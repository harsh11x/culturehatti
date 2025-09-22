"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Sparkles, Gift } from "lucide-react"

interface FestivalNotification {
  id: number
  title: string
  message: string
  festival: string
  discount: string
  color: string
}

export function FestivalNotifications() {
  const [notifications, setNotifications] = useState<FestivalNotification[]>([])
  const [currentNotification, setCurrentNotification] = useState<FestivalNotification | null>(null)

  const festivalOffers = [
    {
      id: 1,
      title: "Diwali Special Offer!",
      message:
        "Light up your celebrations with our exclusive Diwali collection. Traditional wear with modern elegance.",
      festival: "Diwali",
      discount: "40% OFF",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 2,
      title: "Wedding Season Sale!",
      message: "Make your special day unforgettable with our bridal and groom collections.",
      festival: "Wedding",
      discount: "30% OFF",
      color: "from-red-400 to-pink-500",
    },
    {
      id: 3,
      title: "Eid Mubarak Collection!",
      message: "Celebrate Eid with our beautiful ethnic wear collection for the whole family.",
      festival: "Eid",
      discount: "25% OFF",
      color: "from-green-400 to-emerald-500",
    },
  ]

  useEffect(() => {
    // Show a random festival notification after 3 seconds
    const timer = setTimeout(() => {
      const randomNotification = festivalOffers[Math.floor(Math.random() * festivalOffers.length)]
      setCurrentNotification(randomNotification)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const dismissNotification = () => {
    setCurrentNotification(null)
  }

  if (!currentNotification) return null

  return (
    <div className="fixed top-20 right-4 z-50 animate-slide-in-right">
      <Card className="w-80 border-2 border-accent/20 shadow-2xl overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${currentNotification.color}`}></div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full bg-gradient-to-r ${currentNotification.color} flex items-center justify-center`}
              >
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{currentNotification.title}</h3>
                <Badge variant="secondary" className="text-xs mt-1">
                  {currentNotification.festival}
                </Badge>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={dismissNotification} className="h-6 w-6">
              <X className="h-3 w-3" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mb-3">{currentNotification.message}</p>

          <div className="flex items-center justify-between">
            <Badge className={`bg-gradient-to-r ${currentNotification.color} text-white`}>
              <Gift className="h-3 w-3 mr-1" />
              {currentNotification.discount}
            </Badge>
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Shop Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
