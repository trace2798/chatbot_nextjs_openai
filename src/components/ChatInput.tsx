// "use client";

// import { MessagesContext } from "@/context/messages";
// import { cn } from "@/lib/utils";
// import { Message } from "@/lib/validators/message";
// import { useMutation } from "@tanstack/react-query";
// import { CornerDownLeft, Loader2 } from "lucide-react";
// import { nanoid } from "nanoid";
// import { FC, HTMLAttributes, useContext, useRef, useState } from "react";
// import { toast } from "react-hot-toast";
// import TextareaAutosize from "react-textarea-autosize";

// const preDefinedQuestions = [
//   { text: "What do you all do?" },
//   { text: "Do you offer any discounts or promotions?" },
//   { text: "How can I contact customer support?" },
//   // Add more questions as needed
// ];

// interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

// //This code defines a ChatInput component that allows users to input messages into a chat interface.
// // It takes in a className and other HTML attributes as props, and uses them to style the component.
// const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
//   //   uses the useContext hook to access a MessagesContext that provides functionality for adding, removing, and updating messages.
//   const textareaRef = useRef<HTMLTextAreaElement | null>(null);
//   // a useState hook to keep track of the user's input.
//   const [input, setInput] = useState<string>("");

//   // const [clickedQuestions, setClickedQuestions] = useState([]);
//   const [clickedQuestions, setClickedQuestions] = useState<boolean[]>([]);
//   const [showPredefinedQuestions, setShowPredefinedQuestions] = useState(true);
//   const handleInputFocus = () => {
//     setShowPredefinedQuestions(false);
//   };
//   const handleInputBlur = () => {
//     if (input === "") {
//       setShowPredefinedQuestions(true);
//     }
//   };
//   // It also uses the useContext hook to access a MessagesContext that provides functionality for adding, removing, and updating messages.
//   const {
//     messages,
//     addMessage,
//     removeMessage,
//     updateMessage,
//     setIsMessageUpdating,
//   } = useContext(MessagesContext);
//   // seMutation hook is used to handle the submission of new messages to the chat.
//   const { mutate: sendMessage, isLoading } = useMutation({
//     mutationFn: async (message: Message) => {
//       // When the user submits a new message by pressing the Enter key, the component sends a POST request to an API endpoint with the new message data.
//       const response = await fetch("api/message", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ messages: [message] }),
//       });

//       if (!response.ok) {
//         throw new Error();
//       }

//       return response.body;
//     },
//     onMutate(message) {
//       addMessage(message);
//     },
//     onSuccess: async (stream) => {
//       if (!stream) throw new Error("No stream available");

//       const id = nanoid();
//       const responseMessage: Message = {
//         id,
//         isUserMessage: false,
//         text: "",
//       };

//       addMessage(responseMessage);
//       setIsMessageUpdating(true);

//       const reader = stream.getReader();
//       const decoder = new TextDecoder();
//       let done = false;

//       while (!done) {
//         const { value, done: doneReading } = await reader.read();
//         done = doneReading;
//         const chunkValue = decoder.decode(value);
//         console.log(chunkValue);
//         updateMessage(id, (prev) => prev + chunkValue);
//       }

//       //clean up
//       setIsMessageUpdating(false);
//       setInput("");

//       setTimeout(() => {
//         textareaRef.current?.focus();
//       }, 10);
//     },
//     onError: (_, message) => {
//       toast.error("Something went wrong. Please try again.");
//       removeMessage(message.id);
//       textareaRef.current?.focus();
//     },
//   });

//   // const handleQuestionClick = (index: number) => {
//   //   const newClickedQuestions = [...clickedQuestions];
//   //   newClickedQuestions[index] = !clickedQuestions[index];
//   //   setClickedQuestions(newClickedQuestions);
//   // };
//   const handleQuestionClick = async (index: number) => {
//     const question = preDefinedQuestions[index].text;
//     const message = {
//       id: nanoid(),
//       isUserMessage: true,
//       text: question,
//     };
//     await sendMessage(message);
//   };

//   return (
//     <div {...props} className={cn("border-t border-zinc-300", className)}>
//       <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
//         {/* <TextareaAutosize
//           ref={textareaRef}
//           disabled={isLoading}
//           rows={2}
//           maxRows={4}
//           onKeyDown={(e) => {
//             if (e.key === "Enter" && !e.shiftKey) {
//               e.preventDefault();

//               const message = {
//                 id: nanoid(),
//                 isUserMessage: true,
//                 text: input,
//               };

//               sendMessage(message);
//             }
//           }}
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Write a message..."
//           className="peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6"
//         /> */}
//         <TextareaAutosize
//           ref={textareaRef}
//           disabled={isLoading}
//           rows={2}
//           maxRows={4}
//           onKeyDown={(e) => {
//             if (e.key === "Enter" && !e.shiftKey) {
//               e.preventDefault();

//               const message = {
//                 id: nanoid(),
//                 isUserMessage: true,
//                 text: input,
//               };

//               sendMessage(message);
//               setShowPredefinedQuestions(false);
//             }
//           }}
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onFocus={handleInputFocus}
//           onBlur={handleInputBlur}
//           placeholder="Write a message..."
//           className="peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6"
//         />
//         <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
//           <kbd className="inline-flex items-center rounded border bg-white border-gray-200 px-1 font-sans text-xs text-gray-400">
//             {isLoading ? (
//               <Loader2 className="w-3 h-3 animate-spin" />
//             ) : (
//               <CornerDownLeft className="w-3 h-3" />
//             )}
//           </kbd>
//         </div>

//         <div
//           className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
//           aria-hidden="true"
//         />
//       </div>
//       {/* {preDefinedQuestions.map((question, index) => {
//         if (clickedQuestions[index]) return null;
//         return (
//           <div
//             key={question.text}
//             className="px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
//             onClick={() => handleQuestionClick(index)}
//           >
//             <div className="text-gray-900">{question.text}</div>
//           </div>
//         );
//       })}
//       {clickedQuestions.some((clicked) => clicked) && (
//         <div className="flex flex-col gap-2">
//           {preDefinedQuestions.map((question, index) => {
//             if (!clickedQuestions[index]) return null;
//             return (
//               <div
//                 key={question.text}
//                 className="px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleQuestionClick(index)}
//               >
//                 <div className="text-gray-900">{question.text}</div>
//               </div>
//             );
//           })}
//         </div>
//       )} */}
//       {/* {preDefinedQuestions.map((question) => (
//         <button
//           key={question.text}
//           onClick={() => {
//             const message = {
//               id: nanoid(),
//               isUserMessage: true,
//               text: question.text,
//             };
//             sendMessage(message);
//           }}
//           className="inline-block px-2 py-1 mr-2 rounded-lg text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//         >
//           {question.text}
//         </button>
//       ))} */}
//       {showPredefinedQuestions && (
//         <div className="space-y-2 mt-2">
//           {preDefinedQuestions.map((q, index) => (
//             <button
//               key={index}
//               onClick={() => {
//                 setInput(q.text);
//                 handleQuestionClick(index);
//                 handleInputFocus();
//               }}
//               className={cn(
//                 "flex items-center justify-start text-sm font-medium rounded-lg text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 px-4 py-2",
//                 clickedQuestions[index] && "bg-gray-100"
//               )}
//             >
//               <span>{q.text}</span>
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatInput;

"use client";

import { MessagesContext } from "@/context/messages";
import { cn } from "@/lib/utils";
import { Message } from "@/lib/validators/message";
import { useMutation } from "@tanstack/react-query";
import { CornerDownLeft, Loader2 } from "lucide-react";
import { nanoid } from "nanoid";
import { FC, HTMLAttributes, useContext, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import TextareaAutosize from "react-textarea-autosize";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [input, setInput] = useState<string>("");
  const {
    messages,
    addMessage,
    removeMessage,
    updateMessage,
    setIsMessageUpdating,
  } = useContext(MessagesContext);

  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: async (message: Message) => {
      const response = await fetch("api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [message] }),
      });

      if (!response.ok) {
        throw new Error();
      }

      return response.body;
    },
    onMutate(message) {
      addMessage(message);
    },
    onSuccess: async (stream) => {
      if (!stream) throw new Error("No stream available");

      const id = nanoid();
      const responseMessage: Message = {
        id,
        isUserMessage: false,
        text: "",
      };

      addMessage(responseMessage);
      setIsMessageUpdating(true);

      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        console.log(chunkValue);
        updateMessage(id, (prev) => prev + chunkValue);
      }

      //clean up
      setIsMessageUpdating(false);
      setInput("");

      setTimeout(() => {
        textareaRef.current?.focus();
      }, 10);
    },
    onError: (_, message) => {
      toast.error("Something went wrong. Please try again.");
      removeMessage(message.id);
      textareaRef.current?.focus();
    },
  });

  return (
    <div {...props} className={cn("border-t border-zinc-300", className)}>
      <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
        <TextareaAutosize
          ref={textareaRef}
          disabled={isLoading}
          rows={2}
          maxRows={4}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();

              const message = {
                id: nanoid(),
                isUserMessage: true,
                text: input,
              };

              sendMessage(message);
            }
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a message..."
          className="peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center rounded border bg-white border-gray-200 px-1 font-sans text-xs text-gray-400">
            {isLoading ? (
              <Loader2 className="w-3 h-3 animate-spin" />
            ) : (
              <CornerDownLeft className="w-3 h-3" />
            )}
          </kbd>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default ChatInput;