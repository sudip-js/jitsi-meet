import React from "react";
import { NavLink } from "react-router-dom";
import {
  CalendarIcon,
  CallIcon,
  ChatIcon,
  DashboardIcon,
  DIDIcon,
  Logo,
  SettingsIcon,
  UserIcon,
  VideoIcon,
} from "../../assets/icons";
import MantineTooltip from "../../components/tooltip";

const links = [
  {
    to: "dashboard",
    label: "Dashboard",
    Icon: DashboardIcon,
  },
  {
    to: "video",
    label: "Video",
    Icon: VideoIcon,
  },
  {
    to: "call",
    label: "Call",
    Icon: CallIcon,
  },
  {
    to: "chat",
    label: "Chat",
    Icon: ChatIcon,
  },
  {
    to: "contact",
    label: "Contact",
    Icon: UserIcon,
  },
  {
    to: "calendar",
    label: "Calendar",
    Icon: CalendarIcon,
  },
  {
    to: "did",
    label: "DID",
    Icon: DIDIcon,
  },
  {
    to: "setting",
    label: "Setting",
    Icon: SettingsIcon,
  },
];

const DashboardSidebar = () => {
  const activeClassName = "text-white";
  return (
    <div className="min-w-[4rem] h-[100vh] bg-sidebar flex flex-col items-center gap-8 py-2">
      <Logo className="w-10 h-10 text-white cursor-pointer" />
      <div className="flex flex-col items-center gap-10">
        {links && links?.length > 0
          ? links.map(({ to, label, Icon }) => (
              <MantineTooltip key={to} label={label} position="right">
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `${isActive ? activeClassName : "text-sidebarIcon"}`
                  }
                >
                  <Icon className="w-5 h-5 cursor-pointer   hover:text-white" />
                </NavLink>
              </MantineTooltip>
            ))
          : null}
      </div>
    </div>
  );
};

export default DashboardSidebar;
