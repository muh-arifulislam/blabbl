import { ChatArea } from "@/components/messages/chat-area";
import { ConversationsList } from "@/components/messages/conversations-list";
import { useMobile } from "@/hooks/useMobile";

export default function MessagesPage() {
  const isMobile = useMobile();
  return (
    <div className="flex flex-1 h-full">
      <ConversationsList />
      {!isMobile && <ChatArea />}
    </div>
  );
}
