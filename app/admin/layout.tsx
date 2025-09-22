'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { AdminAuthProvider, useAdminAuth } from '@/contexts/AdminAuthContext'
import { Button } from '@/components/ui/button'
import { LogOut, Settings, Package, ShoppingCart, BarChart3, Home } from 'lucide-react'
import Link from 'next/link'

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated, isLoading, logout } = useAdminAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!isLoading && !isAuthenticated && pathname !== '/admin/login') {
      router.push('/admin/login')
    }
  }, [isAuthenticated, isLoading, pathname, router])

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600 mb-4"></div>
          <p className="text-red-900 font-semibold">Loading...</p>
        </div>
      </div>
    )
  }

  // Show login page if not authenticated
  if (!isAuthenticated && pathname !== '/admin/login') {
    return null // Will redirect to login
  }

  // Show login page without layout
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  // Show admin layout for authenticated users
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 pattern-mandala">
      {/* Admin Header */}
      <header className="culture-hatti-gradient border-b-2 border-golden shadow-lg backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/admin" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                  <Home className="text-red-900 h-5 w-5" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-yellow-400">॥ श्री ॥ Admin Panel</h1>
                  <p className="text-sm text-white">Culture Hatti Management</p>
                </div>
              </Link>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-4">
                <Link 
                  href="/admin" 
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === '/admin' 
                      ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400' 
                      : 'text-white hover:bg-yellow-400/10'
                  }`}
                >
                  <BarChart3 className="h-4 w-4 inline mr-2" />
                  Dashboard
                </Link>
                <Link 
                  href="/admin/products" 
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname.startsWith('/admin/products') 
                      ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400' 
                      : 'text-white hover:bg-yellow-400/10'
                  }`}
                >
                  <Package className="h-4 w-4 inline mr-2" />
                  Products
                </Link>
                <Link 
                  href="/admin/orders" 
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname.startsWith('/admin/orders') 
                      ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400' 
                      : 'text-white hover:bg-yellow-400/10'
                  }`}
                >
                  <ShoppingCart className="h-4 w-4 inline mr-2" />
                  Orders
                </Link>
                <Link 
                  href="/admin/settings" 
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === '/admin/settings' 
                      ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400' 
                      : 'text-white hover:bg-yellow-400/10'
                  }`}
                >
                  <Settings className="h-4 w-4 inline mr-2" />
                  Settings
                </Link>
              </nav>
            </div>

            {/* User Info & Logout */}
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-white">{user?.email}</p>
                <p className="text-xs text-yellow-200 capitalize">{user?.role?.replace('_', ' ')}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-6">
        {children}
      </main>
    </div>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AdminAuthProvider>
  )
}
