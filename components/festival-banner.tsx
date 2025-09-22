"use client"

import { Badge } from "@/components/ui/badge"
import { Sparkles, Gift, Calendar } from "lucide-react"

export function FestivalBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-amber-50 to-orange-50 border-y border-amber-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-amber-600" />
              <span className="text-sm font-semibold text-amber-800">Festival Season</span>
            </div>
            <Badge variant="secondary" className="bg-amber-100 text-amber-800">
              <Sparkles className="h-3 w-3 mr-1" />
              Live Now
            </Badge>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-amber-900 mb-1">Diwali Collection 2024 - Up to 40% Off</h3>
            <p className="text-sm text-amber-700">
              Celebrate the festival of lights with our exclusive ethnic wear and jewelry
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Gift className="h-4 w-4 text-amber-600" />
            <span className="text-sm text-amber-700 font-medium">Free Gift Wrapping</span>
          </div>
        </div>
      </div>
    </section>
  )
}
