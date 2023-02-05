import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";

const Chats = () => {
  return (
    <div className="bg-[#36393E] w-[100%] h-[92vh]  overflow-y-auto overflow-x-hidden scrollbar-hide ">
      <ChatHeader />
      <section className="  px-5 py-4 flex flex-col gap-5 ">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </section>

      <footer>
        <input
          type="text"
          placeholder="Message #sadhna tarhun"
          className="fixed"
        />
      </footer>
    </div>
  );
};

export default Chats;
