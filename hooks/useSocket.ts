'use client'

import { useEffect, useRef } from 'react'

interface SocketOptions {
  onCartUpdate?: (cartData: any) => void
  onOrderUpdate?: (orderData: any) => void
  [key: string]: any
}

export function useSocket(options?: SocketOptions) {
  const socketRef = useRef<any>(null)

  useEffect(() => {
    // Simple mock socket for now
    socketRef.current = {
      emit: () => {},
      on: () => {},
      off: () => {},
      disconnect: () => {}
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect()
      }
    }
  }, [])

  return socketRef.current
}
