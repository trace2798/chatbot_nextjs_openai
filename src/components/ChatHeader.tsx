import Image from "next/image";
import { FC } from "react";

const ChatHeader: FC = () => {
  return (
    <div className="w-full flex gap-3 justify-start items-center text-zinc-800">
      <div className="flex flex-col items-start text-sm">
        {/* <h1>Support</h1> */}
        {/* <p className="text-xs">Chat with</p> */}
        {/* <Image src="/images/support.png" alt="Support" width="50" height="50" /> */}
        <div className="flex gap-1.5 items-center">
          <p className="w-2 h-2 rounded-full bg-green-500" />
          <p className="font-medium">Bohniman support</p>
        </div>
      </div>
      <div className="no-underline text-xs p-2 max-md:p-[5px] ml-1 bg-black text-white rounded-xl">
        AI Powered
      </div>
    </div>
    // <div>Chat</div>
  );
};

export default ChatHeader;
