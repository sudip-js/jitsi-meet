import React from "react";
import {
  CallIcon,
  FileIcon,
  SearchIcon,
  VerticalDotsIcon,
} from "../../../../assets/icons";
import { ProfilePic } from "../../../../assets/images";

const ChatHeader = () => {
  return (
    <header className="flex items-center justify-between px-5 h-[4rem] sticky top-0 bg-sidebar">
      <div className="flex items-center gap-2">
        <div className="border-[2px] border-solid border-headerBtnActive w-fit rounded-full">
          <img
            src={ProfilePic}
            className="w-10 h-10 object-contain rounded-full"
          />
        </div>
        <div>
          <h1 className="text-white font-medium leading-4">React Js</h1>
          <p className="text-headerBtnActive text-sm font-semibold">online</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="bg-[#2E3136] p-3 rounded-full text-headerBtnActive cursor-pointer ">
          <CallIcon />
        </div>
        <div className="bg-[#2E3136] p-3 rounded-full text-headerBtnActive cursor-pointer">
          <FileIcon />
        </div>
        <div className="bg-[#2E3136] p-3 rounded-full text-headerBtnActive cursor-pointer">
          <SearchIcon />
        </div>
        <div className="bg-[#2E3136] p-3 rounded-full text-headerBtnActive cursor-pointer">
          <VerticalDotsIcon />
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
