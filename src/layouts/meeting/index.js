import React from "react";
import { Outlet } from "react-router-dom";

const MeetingLayout = () => {
  return (
    <div className="flex items-center justify-center bg-sidebar w-[100vw] h-[100vh]">
      <Outlet />
    </div>
  );
};

export default MeetingLayout;
