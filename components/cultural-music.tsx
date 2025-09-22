"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Volume2, VolumeX, Music } from "lucide-react"

export function CulturalMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Simulated traditional Indian music (in a real app, you'd use actual audio files)
  const playAmbientSound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(console.error)
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="fixed bottom-20 left-4 z-50">
      <Card className="border-2 border-accent/20 bg-card/90 backdrop-blur-sm">
        <CardContent className="p-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Music className="h-4 w-4" />
              <span>Bazaar Ambience</span>
            </div>
            <Button variant="ghost" size="icon" onClick={playAmbientSound} className="h-8 w-8">
              {isPlaying ? (
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              ) : (
                <div className="w-3 h-3 border-2 border-accent rounded-full"></div>
              )}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMute} className="h-8 w-8">
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Hidden audio element - in a real app, you'd use actual traditional Indian music */}
      <audio ref={audioRef} loop muted={isMuted} preload="none">
        {/* You would add actual audio sources here */}
        <source src="/bazaar-ambience.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}
