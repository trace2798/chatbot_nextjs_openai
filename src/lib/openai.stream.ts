import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";

//This openAi enforces when you make an api request to them.
export type ChatGPTAgent = "user" | "system";

export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}

export interface OpenAIStreamPayload {
  model: string;
  messages: ChatGPTMessage[];
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
  stream: boolean;
  n: number;
}

export async function OpenAIStream(payload: OpenAIStreamPayload) {
  // create a TextEncoder and TextDecoder instance for encoding and decoding text data
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  // initialize a counter to keep track of how many text chunks have been processed
  let counter = 0;

  // make an API request to OpenAI for text completion using the fetch API
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  // create a ReadableStream to stream text completion data
  const stream = new ReadableStream({
    async start(controller) {
      // callback function to handle the "onParse" event when data is parsed from the API response
      function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event.type === "event") {
          const data = event.data;
          // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
          if (data === "[DONE]") {
            controller.close();
            return;
          }
          try {
            const json = JSON.parse(data);
            // console.log('json', json);
            const text = json.choices[0].delta?.content || "";
            if (counter < 2 && (text.match(/\n/) || []).length) {
              // this is a prefix character (i.e., "\n\n"), do nothing
              return;
            }
            const queue = encoder.encode(text);
            controller.enqueue(queue);
            counter++;
          } catch (e) {
            // maybe parse error
            controller.error(e);
          }
        }
      }

      // create a parser instance to parse data from the API response, and invoke the onParse callback function
      // stream response (SSE) from OpenAI may be fragmented into multiple chunks
      // this ensures we properly read chunks and invoke an event for each SSE event stream
      const parser = createParser(onParse);
      // https://web.dev/streams/#asynchronous-iteration
      // iterate over the chunks of data returned by the API response using the "for await" syntax
      for await (const chunk of res.body as any) {
        // decode the chunk using the TextDecoder instance
        parser.feed(decoder.decode(chunk));
      }
    },
  });
  // return the ReadableStream instance
  return stream;
}
