import React from "react";
import { ChatIconOne } from "../../../assets/icons";

import SidebarChat from "./SidebarChat";
import SidebarHeader from "./SidebarHeader";
import { ProfilePic } from "../../../assets/images";

const Sidebar = () => {
  const chatHeader = {
    label: "Chat",
    Icon: ChatIconOne,
    cta: () => {
      console.log("add click");
    },
  };

  const chatsArray = [
    {
      id: "1",
      profileImage: ProfilePic,
      username: "React Js",
      message: "Hii ",
    },
    {
      id: "2",
      profileImage: ProfilePic,
      username: "Node Js",
      message: " yooooo",
    },
  ];

  return (
    <div className="w-[20vw] bg-[#2E3136] min-h-min border-t-[1px] border-solid border-[#2CCE5D]">
      <div className="h-[50%] p-2 flex flex-col gap-2 ">
        <SidebarHeader chatHeader={chatHeader} />
        <div className="flex flex-col gap-2 overflow-x-hidden overflow-y-auto scrollbar-hide ">
          {chatsArray && chatsArray?.length > 0
            ? chatsArray.map((data, idx) => (
                <SidebarChat key={idx} data={data} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
