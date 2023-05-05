// import { cn } from "@/lib/utils";
// import { CornerDownLeft, Loader2 } from "lucide-react";
// import { nanoid } from "nanoid";
// import { FC } from "react";
// import TextareaAutosize from "react-textarea-autosize";

// interface QuestionProps {
//   question: string;
//   onClick: () => void;
// }

// const Question: FC<QuestionProps> = ({ question, onClick }) => {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className="inline-block px-2 py-1 text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
//     >
//       {question}
//     </button>
//   );
// };

// interface ChatInputProps {
//   // ...
// }

// const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
//   // ...

//   const handleQuestionClick = (question: string) => {
//     const message = {
//       id: nanoid(),
//       isUserMessage: true,
//       text: question,
//     };

//     sendMessage(message);
//   };

//   return (
//     <div {...props} className={cn("border-t border-zinc-300", className)}>
//       <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
//         {/* <TextareaAutosize
//           // ...
//         /> */}
//         <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
//           {isLoading ? (
//             <Loader2 className="w-3 h-3 animate-spin" />
//           ) : (
//             <>
//               <Question
//                 question="What is your name?"
//                 onClick={() => handleQuestionClick("What is your name?")}
//               />
//               <Question
//                 question="How can I help you?"
//                 onClick={() => handleQuestionClick("How can I help you?")}
//               />
//               <CornerDownLeft className="w-3 h-3" />
//             </>
//           )}
//         </div>
//         // ...
//       </div>
//     </div>
//   );
// };

// export default ChatInput;
