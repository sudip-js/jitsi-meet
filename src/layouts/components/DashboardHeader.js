import { Button } from "@mantine/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarIcon, HeadphonesIcon, UserPlusIcon } from "../../assets/icons";
import FullScreenSpinner from "../../components/spinner/FullScreenSpinner";

const METTING_PATH = "meeting";
const generateMeetingUUID = () => {
  let d = new Date().getTime();
  let uuid = "xxx-xxxx-xxx".replace(/[x]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x7) | 0x8).toString(16).toLowerCase();
  });
  return uuid;
};

const DashboardHeader = () => {
  const [fullScreenLoader, setFullScreenLoader] = useState(false);
  const navigate = useNavigate();
  const handleInstantMeeting = () => {
    setFullScreenLoader(true);
    const { origin, pathname } = window?.location;
    const appName = pathname?.split("/")?.[1];
    const meetingURL = `${origin}/${appName}`;
    const meetingUID = generateMeetingUUID();
    const meetingLink = `${meetingURL}/${METTING_PATH}/${meetingUID}`;
    setTimeout(() => {
      window.open(meetingLink, "_blank");
      setFullScreenLoader(false);
    }, 2000);
  };
  const handleScheduleMeeting = () => {
    console.log("handleScheduleMeeting");
    navigate("schedule-meeting");
  };
  const handleJoinMeeting = () => {
    console.log("handleJoinMeeting");
  };
  const RenderButton = ({ Icon, label, ...rest }) => {
    return (
      <Button
        {...rest}
        leftIcon={<Icon className="w-5 h-5 cursor-pointer text-white " />}
        className=" hover:text-white"
      >
        {label}
      </Button>
    );
  };
  return (
    <div className="w-[calc(100vw-4rem)] bg-header h-[8vh] text-white flex items-center px-3">
      {fullScreenLoader && <FullScreenSpinner loadingMessage="Joining..." />}

      <div className="flex gap-5">
        <RenderButton
          Icon={HeadphonesIcon}
          label="Instant Meeting"
          onClick={() => handleInstantMeeting()}
        />
        <RenderButton
          Icon={CalendarIcon}
          label="Schedule Meeting"
          onClick={() => handleScheduleMeeting()}
        />
        <RenderButton
          Icon={UserPlusIcon}
          label="Join Meeting"
          onClick={() => handleJoinMeeting()}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
