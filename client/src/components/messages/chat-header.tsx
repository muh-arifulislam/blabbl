import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Info, Phone, Video } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { openShowRightPanel } from "@/redux/features/app/appSlice";

export function ChatHeader() {
  const dispatch = useAppDispatch();

  const { selectedConversation } = useAppSelector((state) => state.app);

  return (
    <>
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b bg-card">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar>
              <AvatarImage src={"/placeholder.svg"} />
              <AvatarFallback>U</AvatarFallback>
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
    </>
  );
}
