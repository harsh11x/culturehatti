import { useEffect, useRef } from 'react'

interface UseAutoLogoutOptions {
  isAdmin?: boolean
  timeout?: number
  onLogout: () => void
}

export function useAutoLogout({ 
  isAdmin = false, 
  timeout = 5 * 60 * 1000, // 5 minutes default
  onLogout 
}: UseAutoLogoutOptions) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    timeoutRef.current = setTimeout(() => {
      onLogout()
    }, timeout)
  }

  useEffect(() => {
    const handleActivity = () => {
      resetTimeout()
    }

    // Add event listeners for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart']
    
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true)
    })

    // Set initial timeout
    resetTimeout()

    // Cleanup
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true)
      })
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [timeout, onLogout])

  return { resetTimeout }
}
