import { BazaarHeader } from "@/components/bazaar-header"
import { UserAccount } from "@/components/user-account"
import { BazaarFooter } from "@/components/bazaar-footer"

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-background">
      <BazaarHeader />
      <UserAccount />
      <BazaarFooter />
    </div>
  )
}
