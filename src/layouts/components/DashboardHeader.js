import { Button } from "@mantine/core";
import React from "react";
import { CalendarIcon, HeadphonesIcon, UserPlusIcon } from "../../assets/icons";

const DashboardHeader = () => {
  return (
    <div className="w-[calc(100vw-4rem)] bg-header h-[8vh] text-white flex items-center px-3">
      <div className="flex gap-5">
        <Button
          leftIcon={
            <HeadphonesIcon className="w-5 h-5 cursor-pointer text-white " />
          }
          className="bg-sidebar hover:text-white"
        >
          Instant Meeting
        </Button>
        <Button
          leftIcon={
            <CalendarIcon className="w-5 h-5 cursor-pointertext-white " />
          }
          className="bg-sidebar hover:text-white"
        >
          Schedule Meeting
        </Button>
        <Button
          leftIcon={
            <UserPlusIcon className="w-5 h-5  cursor-pointer text-white " />
          }
          className="bg-sidebar hover:text-white"
        >
          Join Meeting
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
