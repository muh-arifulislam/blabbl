import App from "@/App";
import LoginPage from "@/scenes/auth/login";
import FriendsPage from "@/scenes/friends/page";
import MessagesPage from "@/scenes/messages/page";
import ProfilesPage from "@/scenes/profile/page";
import SettingsPage from "@/scenes/settings/page";
import StatusPage from "@/scenes/status/page";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/messages" replace />,
      },
      {
        path: "/messages",
        element: <MessagesPage />,
      },
      {
        path: "/status",
        element: <StatusPage />,
      },
      {
        path: "/friends",
        element: <FriendsPage />,
      },
      {
        path: "/profile",
        element: <ProfilesPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
