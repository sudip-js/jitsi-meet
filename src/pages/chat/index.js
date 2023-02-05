import React from "react";
import ChatContainer from "./components/ChatContainer";
import Sidebar from "./components/Sidebar";

const Chat = () => {
  return (
    <div className="bg-main h-[92vh] w-[100vw-4rem] flex">
      <Sidebar />
      <ChatContainer />
    </div>
  );
};

export default Chat;
