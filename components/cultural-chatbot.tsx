"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, X, Sparkles } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function CulturalChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "नमस्ते! Welcome to our bazaar! I'm Meera, your cultural shopping assistant. How can I help you find the perfect traditional outfit today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const quickReplies = [
    "Show me sarees for weddings",
    "What's trending in men's kurtas?",
    "Help me choose colors",
    "Size guide for sherwanis",
    "Festival collection",
  ]

  const botResponses = {
    saree:
      "Beautiful choice! Our Banarasi sarees are perfect for weddings. They feature intricate gold work and come in traditional colors like deep maroon, royal blue, and emerald green. Would you like to see our bridal collection?",
    kurta:
      "Our men's kurta collection is very popular! Cotton kurtas with hand embroidery are trending this season. They're comfortable and perfect for both casual and festive occasions. Shall I show you our latest designs?",
    color:
      "Colors have deep meaning in Indian culture! Red symbolizes prosperity, yellow brings good fortune, blue represents tranquility, and green signifies new beginnings. What occasion are you shopping for?",
    size: "For sherwanis, we recommend measuring chest, waist, and length. Our size guide includes traditional Indian measurements. Would you like me to help you find the right fit?",
    festival:
      "Festival season is here! Our collection includes special Diwali, Eid, and wedding wear. Each piece is carefully selected to bring joy and celebration to your special moments. What festival are you preparing for?",
  }

  const sendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simple bot response logic
    setTimeout(() => {
      let botResponse =
        "Thank you for your message! Our artisans take great pride in creating each piece with love and tradition. Is there anything specific you'd like to know about our collection?"

      const lowerInput = inputMessage.toLowerCase()
      for (const [key, response] of Object.entries(botResponses)) {
        if (lowerInput.includes(key)) {
          botResponse = response
          break
        }
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)

    setInputMessage("")
  }

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply)
    sendMessage()
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-accent hover:bg-accent/90 shadow-lg z-50 animate-bounce"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-6 right-6 w-80 h-96 shadow-2xl z-50 border-2 border-accent/20">
      <CardHeader className="bg-accent text-white rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <CardTitle className="text-sm">Meera - Cultural Assistant</CardTitle>
              <p className="text-xs opacity-90">मीरा - सांस्कृतिक सहायक</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-0 flex flex-col h-full">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.sender === "user" ? "bg-accent text-white" : "bg-muted text-foreground"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Replies */}
        <div className="p-3 border-t">
          <div className="flex flex-wrap gap-1 mb-3">
            {quickReplies.slice(0, 3).map((reply, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-accent hover:text-white text-xs"
                onClick={() => handleQuickReply(reply)}
              >
                {reply}
              </Badge>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about our collection..."
              className="text-sm"
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button size="icon" onClick={sendMessage} className="bg-accent hover:bg-accent/90">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
