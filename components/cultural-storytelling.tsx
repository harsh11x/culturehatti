"use client"

import { useState, useEffect } from "react"
import { BookOpen, Quote, Sparkles, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CulturalStorytelling() {
  const [currentStory, setCurrentStory] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const culturalStories = [
    {
      title: "The Art of Banarasi Silk",
      hindiTitle: "बनारसी रेशम की कला",
      content: "For over 2000 years, the weavers of Varanasi have been creating the most exquisite silk sarees. Each thread tells a story of tradition, each pattern carries the legacy of generations. The intricate zari work, the delicate motifs inspired by Mughal architecture, and the rich colors that reflect the Indian spirit - all come together to create the legendary Banarasi silk.",
      hindiContent: "2000 से अधिक वर्षों से, वाराणसी के बुनकर सबसे उत्कृष्ट रेशमी साड़ियां बना रहे हैं। हर धागा परंपरा की कहानी कहता है, हर पैटर्न पीढ़ियों की विरासत लेकर चलता है।",
      image: "/elegant-banarasi-silk-saree-with-gold-work.jpg",
      culturalSignificance: "Symbol of Indian heritage and craftsmanship"
    },
    {
      title: "The Magic of Kundan Jewelry",
      hindiTitle: "कुंदन गहनों का जादू",
      content: "Kundan jewelry represents the pinnacle of Indian craftsmanship. Originating in the royal courts of Rajasthan, this technique involves setting precious stones in pure gold foil. Each piece is a masterpiece, reflecting the grandeur of Indian royalty and the skill of master artisans who have perfected this art over centuries.",
      hindiContent: "कुंदन गहने भारतीय शिल्प कौशल के शिखर का प्रतिनिधित्व करते हैं। राजस्थान के शाही दरबारों में उत्पन्न, इस तकनीक में शुद्ध सोने की पन्नी में कीमती पत्थर जड़ना शामिल है।",
      image: "/traditional-kundan-jewelry-set-with-earrings.jpg",
      culturalSignificance: "Royal heritage and traditional craftsmanship"
    },
    {
      title: "The Elegance of Indian Kurta",
      hindiTitle: "भारतीय कुर्ते की शान",
      content: "The Indian kurta is more than just clothing - it's a symbol of comfort, elegance, and cultural identity. From the simple cotton kurtas worn by farmers to the elaborate silk sherwanis of royalty, each piece reflects the diversity and richness of Indian culture. The intricate embroidery, the flowing silhouettes, and the timeless appeal make it a wardrobe essential.",
      hindiContent: "भारतीय कुर्ता सिर्फ कपड़ा नहीं है - यह आराम, शान और सांस्कृतिक पहचान का प्रतीक है। किसानों द्वारा पहने जाने वाले साधारण सूती कुर्ते से लेकर रॉयल्टी के विस्तृत रेशमी शेरवानी तक।",
      image: "/handsome-indian-man-in-traditional-kurta-and-ethni.jpg",
      culturalSignificance: "Cultural identity and timeless elegance"
    },
    {
      title: "The Joy of Indian Handicrafts",
      hindiTitle: "भारतीय हस्तशिल्प की खुशी",
      content: "Indian handicrafts are a celebration of creativity, tradition, and sustainability. From the colorful pottery of Rajasthan to the intricate woodwork of Kashmir, each piece carries the soul of its maker. These crafts not only beautify our homes but also support local communities and preserve ancient techniques passed down through generations.",
      hindiContent: "भारतीय हस्तशिल्प रचनात्मकता, परंपरा और स्थिरता का उत्सव है। राजस्थान के रंगीन मिट्टी के बर्तनों से लेकर कश्मीर के जटिल लकड़ी के काम तक, हर टुकड़ा अपने निर्माता की आत्मा लेकर चलता है।",
      image: "/beautiful-indian-handicrafts-brass-items-decorativ.jpg",
      culturalSignificance: "Community support and cultural preservation"
    }
  ]

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % culturalStories.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isPlaying, culturalStories.length])

  const toggleStorytelling = () => {
    setIsPlaying(!isPlaying)
  }

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % culturalStories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + culturalStories.length) % culturalStories.length)
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm">
      <Card className="bg-white/95 backdrop-blur-sm border-2 border-amber-300 bazaar-shadow">
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="h-5 w-5 text-amber-600 animate-rangoli-sparkle" />
            <span className="text-sm font-semibold text-amber-800">Cultural Stories</span>
            <Button
              size="sm"
              variant="outline"
              onClick={toggleStorytelling}
              className="ml-auto border-amber-400 text-amber-700 hover:bg-amber-100"
            >
              {isPlaying ? "⏸️" : "▶️"}
            </Button>
          </div>
          
          <div className="space-y-3">
            <div className="text-center">
              <h4 className="text-sm font-bold text-amber-900 mb-1">
                {culturalStories[currentStory].hindiTitle}
              </h4>
              <h5 className="text-xs font-semibold text-red-700 mb-2">
                {culturalStories[currentStory].title}
              </h5>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p className="text-xs text-amber-800 leading-relaxed mb-2">
                {culturalStories[currentStory].hindiContent}
              </p>
              <p className="text-xs text-amber-700 italic">
                {culturalStories[currentStory].culturalSignificance}
              </p>
            </div>
            
            <div className="flex justify-between items-center">
              <Button
                size="sm"
                variant="outline"
                onClick={prevStory}
                className="text-xs px-2 py-1 border-amber-400 text-amber-700"
              >
                ← Previous
              </Button>
              <span className="text-xs text-amber-600">
                {currentStory + 1} / {culturalStories.length}
              </span>
              <Button
                size="sm"
                variant="outline"
                onClick={nextStory}
                className="text-xs px-2 py-1 border-amber-400 text-amber-700"
              >
                Next →
              </Button>
            </div>
          </div>
          
          <div className="mt-2 text-xs text-amber-600 text-center">
            {isPlaying ? "📖 Storytelling Active" : "📖 Storytelling Paused"}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
