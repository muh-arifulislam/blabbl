import { Search, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMobile } from "@/hooks/useMobile";
import { conversations } from "@/data";
import { useNavigate } from "react-router-dom";

export function ConversationsList() {
  const isMobile = useMobile();
  const navigate = useNavigate();

  const handleChatSelect = (chatId: number) => {
    navigate(`/messages/${chatId}`);
  };

  return (
    <div
      className={`${
        isMobile ? "w-full" : "w-80"
      } bg-card border-r flex flex-col`}
    >
      {!isMobile && (
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-semibold">Messages</h1>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      )}

      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search conversations..." className="pl-10" />
        </div>
      </div>

      <ScrollArea className={`flex-1 ${isMobile ? "pb-20" : ""}`}>
        <div className="space-y-1 p-2">
          {conversations.map((conversation) => (
            <Card
              onClick={() => handleChatSelect(conversation.id)}
              key={conversation.id}
              className={`p-3 cursor-pointer transition-colors hover:bg-accent`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={conversation.avatar || "/placeholder.svg"}
                    />
                    <AvatarFallback>
                      {conversation.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {conversation.online && (
                    <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium truncate">{conversation.name}</p>
                    <span className="text-xs text-muted-foreground">
                      {conversation.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground truncate">
                      {conversation.lastMessage}
                    </p>
                    {conversation.unread > 0 && (
                      <Badge
                        variant="default"
                        className="ml-2 h-5 w-5 rounded-full p-0 text-xs"
                      >
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
