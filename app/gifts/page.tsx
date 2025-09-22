import { BazaarHeader } from "@/components/bazaar-header"
import { GiftsStall } from "@/components/gifts-stall"
import { BazaarFooter } from "@/components/bazaar-footer"

export default function GiftsPage() {
  return (
    <div className="min-h-screen bg-background">
      <BazaarHeader />
      <GiftsStall />
      <BazaarFooter />
    </div>
  )
}
