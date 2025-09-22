import { BazaarHeader } from "@/components/bazaar-header"
import { MensStall } from "@/components/mens-stall"
import { BazaarFooter } from "@/components/bazaar-footer"

export default function MensPage() {
  return (
    <div className="min-h-screen bg-background">
      <BazaarHeader />
      <MensStall />
      <BazaarFooter />
    </div>
  )
}
