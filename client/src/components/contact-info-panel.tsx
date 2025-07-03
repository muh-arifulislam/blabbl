import { Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeShowRightPanel } from "@/redux/features/app/appSlice";

export function ContactInfoPanel() {
  const dispatch = useAppDispatch();
  const { showRightPanel } = useAppSelector((state) => state.app);

  const { selectedConversation } = useAppSelector((state) => state.app);

  if (!selectedConversation) return null;
  return (
    <Sheet
      open={showRightPanel}
      onOpenChange={() => dispatch(closeShowRightPanel())}
    >
      <SheetContent side="right" className="w-80 p-0">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold">Contact Info</h3>
          </div>

          <div className="p-6 text-center border-b">
            <Avatar className="h-20 w-20 mx-auto mb-4">
              <AvatarImage
                src={selectedConversation?.avatar || "/placeholder.svg"}
              />
              <AvatarFallback className="text-lg">
                {selectedConversation?.name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <h4 className="font-semibold text-lg">
              {selectedConversation?.name}
            </h4>
            <p className="text-sm text-muted-foreground">
              {selectedConversation?.online ? "Online" : "Last seen 2h ago"}
            </p>
          </div>

          <div className="p-4 space-y-2">
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent"
              size="sm"
            >
              <Phone className="h-4 w-4 mr-2" />
              Voice Call
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent"
              size="sm"
            >
              <Video className="h-4 w-4 mr-2" />
              Video Call
            </Button>
          </div>

          <Separator />

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">About</h5>
                <p className="text-sm text-muted-foreground">
                  Available for work and collaboration. Always happy to help!
                </p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Media & Files</h5>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="aspect-square bg-muted rounded-md"
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
}
