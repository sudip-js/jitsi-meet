import React from "react";
import { ProfilePic } from "../../../../assets/images";

const ChatMessage = () => {
  return (
    <div className="w-[40%] flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <img src={ProfilePic} className="w-8 h-8 object-contain rounded-full" />
        <h1 className="text-white text-sm font-semibold">Sadhna Tarhun</h1>
        <p className="text-xs text-gray-400 font-semibold">1:30 PM</p>
      </div>
      <div className="bg-sidebar text-white w-full p-4 rounded-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, cum? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quo, cum? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quo, cum?
      </div>
    </div>
  );
};

export default ChatMessage;
