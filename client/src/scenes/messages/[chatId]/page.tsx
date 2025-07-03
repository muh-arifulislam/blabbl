import { useParams } from "react-router-dom";
import { ChatArea } from "@/components/messages/chat-area";
import { MobileChatHeader } from "@/components/messages/mobile-chat-header";
import { useMobile } from "@/hooks/useMobile";
import { ConversationsList } from "@/components/messages/conversations-list";

export default function ChatPage() {
  const { chatId } = useParams();
  console.log(chatId);

  const isMobile = useMobile();

  return (
    <div className={`flex h-full ${isMobile ? "flex-col" : "flex-1"}`}>
      {!isMobile && <ConversationsList />}

      {isMobile && <MobileChatHeader />}

      {<ChatArea />}
    </div>
  );
}
