import { Phone, Video, Info, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MobileChatHeaderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chat: any;
  onBack: () => void;
}

export function MobileChatHeader({ chat, onBack }: MobileChatHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-card">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="relative">
          <Avatar>
            <AvatarImage src={chat.avatar || "/placeholder.svg"} />
            <AvatarFallback>
              {chat.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          {chat.online && (
            <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
          )}
        </div>
        <div>
          <h2 className="font-semibold">{chat.name}</h2>
          <p className="text-sm text-muted-foreground">
            {chat.online ? "Online" : "Last seen 2h ago"}
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
        <Button variant="ghost" size="icon">
          <Info className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
