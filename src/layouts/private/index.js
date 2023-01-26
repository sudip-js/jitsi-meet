import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

const PrivateLayout = () => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <div>
        <DashboardHeader />
        <div className="bg-main h-[calc(100vh-8vh)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
