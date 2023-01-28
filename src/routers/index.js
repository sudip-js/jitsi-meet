import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import {
  Calendar,
  Call,
  Chat,
  Contact,
  Dashboard,
  DID,
  Meeting,
  ScheduleMeeting,
  Setting,
  Video,
} from "../pages";
import { PrivateLayout } from "../layouts";
import MeetingLayout from "../layouts/meeting";

export const router = createBrowserRouter([
  {
    path: "/jitsi-meet",
    element: (
      <PrivateRoutes>
        <PrivateLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "video",
        element: <Video />,
      },
      {
        path: "call",
        element: <Call />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "did",
        element: <DID />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
      {
        path: "schedule-meeting",
        element: <ScheduleMeeting />,
      },
    ],
  },
  {
    path: "/jitsi-meet",
    element: (
      <PrivateRoutes>
        <MeetingLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "meeting/:id",
        element: <Meeting />,
      },
    ],
  },
]);
