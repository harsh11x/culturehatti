import Link from 'next/link'
import { ReactNode } from 'react'

interface OptimizedLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function OptimizedLink({ href, children, className, onClick }: OptimizedLinkProps) {
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}
