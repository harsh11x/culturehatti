"use client"

import { useMemo } from "react"

export function FloatingLanterns() {
  const lanterns = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
      })),
    [],
  )

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {lanterns.map((lantern) => (
        <div
          key={lantern.id}
          className="absolute w-4 h-6 bg-gradient-to-b from-yellow-400 via-orange-400 to-orange-600 rounded-full opacity-40 animate-float glow-lantern"
          style={{
            left: `${lantern.x}%`,
            top: `${lantern.y}%`,
            animationDelay: `${lantern.delay}s`,
            animationDuration: "8s",
          }}
        >
          <div className="w-full h-1 bg-amber-700 rounded-full mb-1 shadow-sm"></div>
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-yellow-200 rounded-full opacity-60"></div>
        </div>
      ))}
    </div>
  )
}

export function RangoliBorder() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 pointer-events-none z-10">
      <div className="w-full h-full bg-gradient-to-r from-primary via-secondary via-accent to-primary opacity-30 pattern-rangoli animate-gentle-sway"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
    </div>
  )
}

export function CulturalParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 10,
        color: ["primary", "secondary", "accent"][Math.floor(Math.random() * 3)],
      })),
    [],
  )

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full bg-${particle.color}/20 animate-sparkle border border-${particle.color}/30`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: "6s",
          }}
        />
      ))}
    </div>
  )
}

export function EnhancedVisualEffects() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary via-accent to-primary opacity-60 z-50"></div>
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
    </>
  )
}
