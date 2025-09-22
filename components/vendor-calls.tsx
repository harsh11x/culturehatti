"use client"

import { useState, useEffect } from "react"
import { Megaphone, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VendorCalls() {
  const [isActive, setIsActive] = useState(false)
  const [currentCall, setCurrentCall] = useState(0)
  const [isMuted, setIsMuted] = useState(false)

  const vendorCalls = [
    {
      hindi: "सुंदर साड़ियाँ! बनारसी सिल्क! आओ देखो!",
      english: "Beautiful sarees! Banarasi silk! Come and see!",
      vendor: "Saree Vendor"
    },
    {
      hindi: "ताज़े मिठाई! रसगुल्ले! लड्डू!",
      english: "Fresh sweets! Rasgullas! Laddus!",
      vendor: "Sweet Vendor"
    },
    {
      hindi: "हाथ से बने गहने! कुंदन! मीनाकारी!",
      english: "Handmade jewelry! Kundan! Meenakari!",
      vendor: "Jewelry Vendor"
    },
    {
      hindi: "रंग-बिरंगे कपड़े! कुर्ते! सलवार!",
      english: "Colorful clothes! Kurtas! Salwars!",
      vendor: "Cloth Vendor"
    },
    {
      hindi: "पारंपरिक खिलौने! गुड़िया! गाड़ी!",
      english: "Traditional toys! Dolls! Cars!",
      vendor: "Toy Vendor"
    },
    {
      hindi: "ताज़े फूल! गुलाब! चमेली!",
      english: "Fresh flowers! Roses! Jasmine!",
      vendor: "Flower Vendor"
    }
  ]

  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      setCurrentCall((prev) => (prev + 1) % vendorCalls.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isActive, vendorCalls.length])

  const toggleVendorCalls = () => {
    setIsActive(!isActive)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-amber-300 p-4 bazaar-shadow max-w-sm">
        <div className="flex items-center gap-3 mb-3">
          <Megaphone className="h-5 w-5 text-amber-600 animate-vendor-call" />
          <span className="text-sm font-semibold text-amber-800">Vendor Calls</span>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <Button
            size="sm"
            variant="outline"
            onClick={toggleVendorCalls}
            className="border-amber-400 text-amber-700 hover:bg-amber-100"
          >
            {isActive ? "⏸️ Stop" : "▶️ Start"}
          </Button>
          
          <Button
            size="sm"
            variant="outline"
            onClick={toggleMute}
            className="border-amber-400 text-amber-700 hover:bg-amber-100"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
        </div>
        
        {isActive && (
          <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
            <div className="text-xs text-amber-600 mb-1 font-semibold">
              {vendorCalls[currentCall].vendor}
            </div>
            <div className="text-sm text-amber-800 font-medium mb-1">
              {vendorCalls[currentCall].hindi}
            </div>
            <div className="text-xs text-amber-600 italic">
              {vendorCalls[currentCall].english}
            </div>
          </div>
        )}
        
        <div className="mt-2 text-xs text-amber-600 text-center">
          {isActive && !isMuted ? "🔊 Playing" : "🔇 Muted"}
        </div>
      </div>
    </div>
  )
}
