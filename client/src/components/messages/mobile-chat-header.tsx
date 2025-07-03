import { Phone, Video, Info, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { openShowRightPanel } from "@/redux/features/app/appSlice";
import { useNavigate } from "react-router-dom";

export function MobileChatHeader() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selectedConversation } = useAppSelector((state) => state.app);

  return (
    <div className="flex items-center justify-between p-4 border-b bg-card">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/messages")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="relative">
          <Avatar>
            <AvatarImage
              src={selectedConversation?.avatar || "/placeholder.svg"}
            />
            <AvatarFallback>
              {selectedConversation?.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          {selectedConversation?.online && (
            <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
          )}
        </div>
        <div>
          <h2 className="font-semibold">{selectedConversation?.name}</h2>
          <p className="text-sm text-muted-foreground">
            {selectedConversation?.online ? "Online" : "Last seen 2h ago"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Phone className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Video className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => dispatch(openShowRightPanel())}
        >
          <Info className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
