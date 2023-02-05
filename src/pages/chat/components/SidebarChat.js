import React from "react";
const SidebarChat = ({ data }) => {
  const { profileImage, username, message } = data;
  return (
    <section className="flex items-center gap-2">
      <div className="border-[2px] border-solid border-[#2CCE5D] w-fit rounded-full">
        <img
          src={profileImage}
          className="w-10 h-10 object-contain rounded-full"
        />
      </div>
      <div>
        <h1 className="text-white font-medium leading-4">{username}</h1>
        <p className="text-sidebarIcon text-sm font-semibold">{message}</p>
      </div>
    </section>
  );
};

export default SidebarChat;
