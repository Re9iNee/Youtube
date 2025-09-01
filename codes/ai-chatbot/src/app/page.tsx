"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UIMessage, useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Send } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const { messages, sendMessage, status } = useChat<UIMessage>({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    messages: [
      {
        id: "1",
        role: "system",
        parts: [
          {
            type: "text",
            text: "Hello This is an AI Assistant, feel free to ask anything",
          },
        ],
      },
    ],
  });

  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = async () => {
    // Simulate AI response (replace with actual API call)
    if (!inputValue.trim()) {
      return;
    }

    sendMessage({ text: inputValue });
    setInputValue("");
  };

  const handleKeydown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          AI Chatbot
        </h1>

        <Card className="mb-4">
          <CardContent className="p-0">
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map(({ id, parts, role, metadata }) => (
                <div
                  key={id}
                  className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      role === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-800 border"
                    }`}
                  >
                    <p className="text-sm">
                      {parts.map((part, index) =>
                        part.type === "text" ? (
                          <span key={index}>{part.text}</span>
                        ) : null
                      )}
                    </p>
                  </div>
                </div>
              ))}
              {status !== "ready" && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 border px-4 py-2 rounded-lg">
                    <p className="text-sm">AI is thinking...</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeydown}
            placeholder="Type your message..."
            className="flex-1"
            disabled={status !== "ready"}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || status !== "ready"}
            size="icon"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
