'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const jewelryCategories = [
  {
    name: 'All Jewelry',
    href: '/jewelry',
    icon: '💎',
    description: 'Complete Collection'
  },
  {
    name: 'Necklaces',
    href: '/jewelry/necklaces',
    icon: '📿',
    description: 'Malas & Pendants'
  },
  {
    name: 'Earrings',
    href: '/jewelry/earrings',
    icon: '💎',
    description: 'Jhumkas & Studs'
  },
  {
    name: 'Bangles',
    href: '/jewelry/bangles',
    icon: '💍',
    description: 'Kadas & Bracelets'
  },
  {
    name: 'Rings',
    href: '/jewelry/finger-rings',
    icon: '💍',
    description: 'Anguthis & Finger Rings'
  },
  {
    name: 'Chains',
    href: '/jewelry/chains',
    icon: '⛓️',
    description: 'Mangalsutras & Kamarbands'
  },
  {
    name: 'Nose Rings',
    href: '/jewelry/nose-rings',
    icon: '👃',
    description: 'Nath & Nose Studs'
  },
  {
    name: 'Anklets',
    href: '/jewelry/anklets',
    icon: '🦶',
    description: 'Payal & Ankle Chains'
  },
  {
    name: 'Men\'s Jewelry',
    href: '/jewelry/mens',
    icon: '👔',
    description: 'Kadas & Chains'
  },
  {
    name: 'Kids Jewelry',
    href: '/jewelry/kids',
    icon: '🧸',
    description: 'Children\'s Collection'
  }
]

export function JewelryNavigation() {
  const pathname = usePathname()

  return (
    <div className="bg-white/90 backdrop-blur-sm border-b border-indian-gold/20 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto py-4 space-x-1">
          {jewelryCategories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className={cn(
                "flex-shrink-0 flex flex-col items-center p-3 rounded-lg transition-all duration-300 min-w-[100px]",
                pathname === category.href
                  ? "bg-gradient-to-br from-indian-gold/20 to-indian-saffron/20 border border-indian-gold text-indian-maroon"
                  : "hover:bg-indian-gold/10 text-indian-crimson hover:text-indian-maroon"
              )}
            >
              <div className="text-2xl mb-1">{category.icon}</div>
              <div className="text-xs font-semibold text-center leading-tight">
                {category.name}
              </div>
              <div className="text-xs text-center opacity-70 mt-1">
                {category.description}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
