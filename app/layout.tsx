import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Noto_Sans_Devanagari } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "sonner"
import { CartProvider } from "@/components/providers/CartProvider"
import { FirebaseAuthProvider } from "@/contexts/FirebaseAuthContext"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  display: "swap",
  preload: false,
})

export const metadata: Metadata = {
  title: "कल्चर हाट्टी | Culture Hatti - Traditional Indian Bazaar",
  description:
    "Experience the magic of India's traditional bazaars. Discover authentic handwoven sarees, elegant kurtas, exquisite jewelry, and unique handicrafts crafted by master artisans across India.",
  keywords: "Indian bazaar, traditional sarees, ethnic wear, Indian jewelry, handicrafts, culture hatti, traditional Indian market",
  authors: [{ name: "Culture Hatti" }],
  creator: "Culture Hatti",
  publisher: "Culture Hatti",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://culture-hatti.vercel.app'),
  openGraph: {
    title: "कल्चर हाट्टी | Culture Hatti - Traditional Indian Bazaar",
    description: "Experience the magic of India's traditional bazaars with authentic handwoven sarees, elegant kurtas, and exquisite jewelry.",
    url: 'https://culture-hatti.vercel.app',
    siteName: 'Culture Hatti',
    images: [
      {
        url: '/beautiful-indian-woman-in-colorful-saree-with-jewe.jpg',
        width: 1200,
        height: 630,
        alt: 'Traditional Indian Bazaar - Culture Hatti',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "कल्चर हाट्टी | Culture Hatti - Traditional Indian Bazaar",
    description: "Experience the magic of India's traditional bazaars with authentic handwoven sarees, elegant kurtas, and exquisite jewelry.",
    images: ['/beautiful-indian-woman-in-colorful-saree-with-jewe.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${notoSansDevanagari.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="font-sans antialiased">
        <FirebaseAuthProvider>
          <CartProvider>
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 via-cream-50 to-orange-50">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-amber-300 border-t-red-600 rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-amber-800 font-semibold">कल्चर हाट्टी लोड हो रहा है...</p>
                  <p className="text-amber-600">Culture Hatti Loading...</p>
                </div>
              </div>
            }>
              {children}
            </Suspense>
          </CartProvider>
        </FirebaseAuthProvider>
        <Toaster position="top-right" richColors />
        <Analytics />
      </body>
    </html>
  )
}
