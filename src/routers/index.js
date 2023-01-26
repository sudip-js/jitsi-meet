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
  Setting,
  Video,
} from "../pages";
import { PrivateLayout } from "../layouts";

export const router = createBrowserRouter([
  {
    path: "/",
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
    ],
  },
  {
    path: "/meeting",
    element: (
      <PrivateRoutes>
        <PrivateLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <Meeting />,
      },
    ],
  },
]);
