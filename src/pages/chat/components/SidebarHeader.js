import React from "react";
import { PlusIcon } from "../../../assets/icons";

const SidebarHeader = ({ chatHeader }) => {
  const { label, Icon, cta } = chatHeader;
  return (
    <header className="flex justify-between">
      <div className="flex items-center gap-4">
        <h1 className="font-semibold text-white text-sm">{label}</h1>
        <Icon className="text-sidebarIcon" />
      </div>
      <PlusIcon
        className="text-[#2CCE5D] cursor-pointer"
        onClick={() => cta()}
      />
    </header>
  );
};

export default SidebarHeader;
