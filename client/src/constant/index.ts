import { MessageCircle, Users, User, Settings, Eye } from "lucide-react";

export const navItems = [
  { id: "messages", label: "Messages", icon: MessageCircle, path: "/messages" },
  { id: "status", label: "Status", icon: Eye, path: "/status" },
  { id: "friends", label: "Friends", icon: Users, path: "/friends" },
  { id: "profile", label: "Profile", icon: User, path: "/profile" },
  { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
];
