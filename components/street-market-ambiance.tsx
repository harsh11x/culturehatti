"use client"

import { useState, useEffect } from "react"
import { Volume2, VolumeX, Music, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StreetMarketAmbiance() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentSound, setCurrentSound] = useState<'bazaar' | 'festival' | 'traditional'>('bazaar')

  // Traditional Indian street market sound effects (using Web Audio API)
  useEffect(() => {
    if (!isPlaying || isMuted) return

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    
    const createOscillator = (frequency: number, type: OscillatorType = 'sine') => {
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime)
      oscillator.type = type
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      
      return { oscillator, gainNode }
    }

    const sounds = {
      bazaar: () => {
        // Simulate street market ambiance with multiple oscillators
        const bell = createOscillator(800, 'sine')
        const vendor = createOscillator(200, 'triangle')
        const crowd = createOscillator(150, 'sawtooth')
        
        bell.oscillator.start()
        vendor.oscillator.start()
        crowd.oscillator.start()
        
        // Create rhythmic patterns
        const interval = setInterval(() => {
          bell.gainNode.gain.setValueAtTime(0.05, audioContext.currentTime)
          setTimeout(() => {
            bell.gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
          }, 200)
        }, 2000)
        
        return () => {
          clearInterval(interval)
          bell.oscillator.stop()
          vendor.oscillator.stop()
          crowd.oscillator.stop()
        }
      },
      festival: () => {
        // Festival music simulation
        const melody = createOscillator(440, 'sine')
        const harmony = createOscillator(330, 'triangle')
        const rhythm = createOscillator(110, 'square')
        
        melody.oscillator.start()
        harmony.oscillator.start()
        rhythm.oscillator.start()
        
        return () => {
          melody.oscillator.stop()
          harmony.oscillator.stop()
          rhythm.oscillator.stop()
        }
      },
      traditional: () => {
        // Traditional Indian music simulation
        const sitar = createOscillator(220, 'sine')
        const tabla = createOscillator(100, 'square')
        
        sitar.oscillator.start()
        tabla.oscillator.start()
        
        return () => {
          sitar.oscillator.stop()
          tabla.oscillator.stop()
        }
      }
    }

    const stopSound = sounds[currentSound]()
    
    return () => {
      stopSound()
    }
  }, [isPlaying, isMuted, currentSound])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const changeSound = (sound: 'bazaar' | 'festival' | 'traditional') => {
    setCurrentSound(sound)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-amber-200 p-3">
        <div className="flex items-center gap-2 mb-2">
          <Music className="h-4 w-4 text-amber-600" />
          <span className="text-xs font-semibold text-amber-800">Ambiance</span>
        </div>
        
        <div className="flex items-center gap-1 mb-2">
          <Button
            size="sm"
            variant="outline"
            onClick={togglePlay}
            className="border-amber-300 text-amber-700 hover:bg-amber-50 text-xs px-2 py-1"
          >
            {isPlaying ? "⏸️" : "▶️"}
          </Button>
          
          <Button
            size="sm"
            variant="outline"
            onClick={toggleMute}
            className="border-amber-300 text-amber-700 hover:bg-amber-50 text-xs px-2 py-1"
          >
            {isMuted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
          </Button>
        </div>
        
        <div className="text-xs text-amber-600 text-center">
          {isPlaying && !isMuted ? "🔊 Playing" : "🔇 Muted"}
        </div>
      </div>
    </div>
  )
}
