import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import {
  Calendar,
  Call,
  Chat,
  Contact,
  Dashboard,
  DID,
  Login,
  Meeting,
  ScheduleMeeting,
  Setting,
  Signup,
  Video,
} from "../pages";
import { PrivateLayout, PublicLayout } from "../layouts";
import MeetingLayout from "../layouts/meeting";
import PublicRoutes from "./PublicRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoutes>
        <PublicLayout />
      </PublicRoutes>
    ),
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },

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
