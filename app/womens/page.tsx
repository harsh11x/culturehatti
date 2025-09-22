import { BazaarHeader } from "@/components/bazaar-header"
import { WomensStall } from "@/components/womens-stall"
import { BazaarFooter } from "@/components/bazaar-footer"

export default function WomensPage() {
  return (
    <div className="min-h-screen bg-background">
      <BazaarHeader />
      <WomensStall />
      <BazaarFooter />
    </div>
  )
}
