import React from "react";
import Chats from "./components/chats/Chats";
import Sidebar from "./components/sidebar/Sidebar";

const Chat = () => {
  return (
    <div className="bg-main h-[92vh] w-[100vw-4rem] flex">
      <Sidebar />
      <Chats />
    </div>
  );
};

export default Chat;
