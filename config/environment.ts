export function getApiUrl(): string {
  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  
  // For server-side rendering, use environment variable or default
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
}

export function getEnvironment(): 'development' | 'production' | 'test' {
  if (typeof window !== 'undefined') {
    return window.location.hostname === 'localhost' ? 'development' : 'production'
  }
  
  return process.env.NODE_ENV as 'development' | 'production' | 'test' || 'development'
}

export const isDevelopment = () => getEnvironment() === 'development'
export const isProduction = () => getEnvironment() === 'production'
