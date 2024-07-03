import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip } from "@/components/ui/tooltip";
import { Search, MoreVertical, MessageSquare, Plus, Smile, Paperclip, Send } from "lucide-react";

const Index = () => {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-1/3 border-r border-gray-200">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="User Profile" className="mx-auto rounded-full object-cover w-10 h-10" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex items-center space-x-2">
            <Tooltip content="Status">
              <Button variant="ghost" size="icon">
                <Smile className="h-5 w-5" />
              </Button>
            </Tooltip>
            <Tooltip content="New Chat">
              <Button variant="ghost" size="icon">
                <Plus className="h-5 w-5" />
              </Button>
            </Tooltip>
            <Tooltip content="Menu">
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </Tooltip>
          </div>
        </div>
        {/* Search Bar */}
        <div className="p-4">
          <div className="relative">
            <Input type="text" placeholder="Search or start new chat" className="pl-10" />
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        {/* Chat List */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {/* Chat Item */}
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="Chat User" className="mx-auto rounded-full object-cover w-10 h-10" />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-medium">Chat User</h4>
                  <span className="text-xs text-gray-400">12:00 PM</span>
                </div>
                <p className="text-sm text-gray-500">Last message preview...</p>
              </div>
            </div>
            {/* Repeat Chat Item for more chats */}
          </div>
        </ScrollArea>
      </div>
      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="Contact Profile" className="mx-auto rounded-full object-cover w-10 h-10" />
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium">Contact Name</h4>
              <p className="text-sm text-gray-500">Online</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Tooltip content="Search">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </Tooltip>
            <Tooltip content="Attach">
              <Button variant="ghost" size="icon">
                <Paperclip className="h-5 w-5" />
              </Button>
            </Tooltip>
            <Tooltip content="Menu">
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </Tooltip>
          </div>
        </div>
        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4 space-y-4">
          {/* Message */}
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User Profile" className="mx-auto rounded-full object-cover w-8 h-8" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="bg-gray-100 p-2 rounded-lg">
                <p className="text-sm">Hello! How are you?</p>
              </div>
              <span className="text-xs text-gray-400">12:00 PM</span>
            </div>
          </div>
          {/* Repeat Message for more messages */}
        </ScrollArea>
        {/* Message Input Area */}
        <div className="flex items-center p-4 border-t border-gray-200">
          <Button variant="ghost" size="icon">
            <Smile className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Input type="text" placeholder="Type a message" className="flex-1 mx-4" />
          <Button variant="ghost" size="icon">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;