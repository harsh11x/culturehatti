// Shared storage utilities
export class SharedStorage {
  static setItem(key: string, value: any): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  static getItem(key: string): any {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    }
    return null
  }

  static removeItem(key: string): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key)
    }
  }

  static clear(): void {
    if (typeof window !== 'undefined') {
      localStorage.clear()
    }
  }
}

// Export storage objects for API routes
export const productStorage = {
  getAllProducts: () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('admin-products')
      return stored ? JSON.parse(stored) : []
    }
    return []
  },
  getProductById: (id: string) => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('admin-products')
      const products = stored ? JSON.parse(stored) : []
      return products.find((p: any) => p.id === id) || null
    }
    return null
  },
  addProduct: (product: any) => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('admin-products')
      const products = stored ? JSON.parse(stored) : []
      products.push(product)
      localStorage.setItem('admin-products', JSON.stringify(products))
    }
    return product
  },
  updateProduct: (id: string, product: any) => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('admin-products')
      const products = stored ? JSON.parse(stored) : []
      const index = products.findIndex((p: any) => p.id === id)
      if (index !== -1) {
        products[index] = product
        localStorage.setItem('admin-products', JSON.stringify(products))
      }
    }
    return product
  },
  deleteProduct: (id: string) => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('admin-products')
      const products = stored ? JSON.parse(stored) : []
      const filtered = products.filter((p: any) => p.id !== id)
      localStorage.setItem('admin-products', JSON.stringify(filtered))
    }
    return true
  },
  getProductStats: () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('admin-products')
      const products = stored ? JSON.parse(stored) : []
      return {
        totalProducts: products.length,
        activeProducts: products.filter((p: any) => p.isActive).length,
        featuredProducts: products.filter((p: any) => p.isFeatured).length,
        totalValue: products.reduce((sum: number, p: any) => sum + (p.price * p.stock), 0)
      }
    }
    return {
      totalProducts: 0,
      activeProducts: 0,
      featuredProducts: 0,
      totalValue: 0
    }
  }
}

export const cartStorage = {
  getCart: (userId: string) => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(`cart-${userId}`)
      return stored ? JSON.parse(stored) : []
    }
    return []
  },
  addToCart: (userId: string, item: any) => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(`cart-${userId}`)
      const cart = stored ? JSON.parse(stored) : []
      const existingItem = cart.find((i: any) => i.id === item.id)
      if (existingItem) {
        existingItem.quantity += item.quantity || 1
      } else {
        cart.push(item)
      }
      localStorage.setItem(`cart-${userId}`, JSON.stringify(cart))
    }
    return true
  },
  removeFromCart: (userId: string, itemId: string) => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(`cart-${userId}`)
      const cart = stored ? JSON.parse(stored) : []
      const filtered = cart.filter((i: any) => i.id !== itemId)
      localStorage.setItem(`cart-${userId}`, JSON.stringify(filtered))
    }
    return true
  },
  clearCart: (userId: string) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(`cart-${userId}`)
    }
    return true
  }
}

export const orderStorage = {
  getAllOrders: () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('admin-orders')
      return stored ? JSON.parse(stored) : []
    }
    return []
  },
  getOrderById: (id: string) => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('admin-orders')
      const orders = stored ? JSON.parse(stored) : []
      return orders.find((o: any) => o.id === id) || null
    }
    return null
  },
  createOrder: (order: any) => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('admin-orders')
      const orders = stored ? JSON.parse(stored) : []
      orders.push(order)
      localStorage.setItem('admin-orders', JSON.stringify(orders))
    }
    return order
  },
  updateOrder: (id: string, order: any) => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('admin-orders')
      const orders = stored ? JSON.parse(stored) : []
      const index = orders.findIndex((o: any) => o.id === id)
      if (index !== -1) {
        orders[index] = order
        localStorage.setItem('admin-orders', JSON.stringify(orders))
      }
    }
    return order
  },
  deleteOrder: (id: string) => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('admin-orders')
      const orders = stored ? JSON.parse(stored) : []
      const filtered = orders.filter((o: any) => o.id !== id)
      localStorage.setItem('admin-orders', JSON.stringify(filtered))
    }
    return true
  }
}
