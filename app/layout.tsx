import type { Metadata } from 'next'
import { SafeProviders } from '@/components/safe-providers'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

export const metadata: Metadata = {
  title: 'Culture Hatti - Authentic Indian Crafts & Jewelry',
  description: 'Discover the finest collection of traditional Indian jewelry, handcrafted bags, and authentic cultural products. Preserving centuries-old Indian heritage through master craftsmanship.',
  keywords: 'indian jewelry, traditional crafts, handmade, culture hatti, indian heritage, authentic products',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <SafeProviders>
          {children}
          <Toaster />
        </SafeProviders>
      </body>
    </html>
  )
}
