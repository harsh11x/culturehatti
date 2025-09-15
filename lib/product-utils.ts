interface Product {
  _id?: string
  id?: string
  name: string
  price: number
  originalPrice?: number
  image?: string
  images?: string[]
  category: string
  subcategory?: string
  colors?: string[]
  sizes?: string[]
  stock?: number
  rating?: number
  reviews?: number
  badge?: string
}

export function getProductImage(product: Product): string {
  if (product.image) return product.image
  if (product.images && product.images.length > 0) return product.images[0]
  
  // Return a placeholder image
  return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNTAgMTAwQzEzMy42IDEwMCAxMjAgMTEzLjYgMTIwIDEzMEMxMjAgMTQ2LjQgMTMzLjYgMTYwIDE1MCAxNjBDMTY2LjQgMTYwIDE4MCAxNDYuNCAxODAgMTMwQzE4MCAxMTMuNiAxNjYuNCAxMDAgMTUwIDEwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTE1MCAyMDBMMTgwIDIzMEwxNTAgMjYwTDEyMCAyMzBMMTUwIDIwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+'
}

export function getProductSize(product: Product): string {
  if (product.sizes && product.sizes.length > 0) {
    return product.sizes[0]
  }
  return 'One Size'
}

export function getProductColor(product: Product): string {
  if (product.colors && product.colors.length > 0) {
    return product.colors[0]
  }
  return 'Default'
}

export function createCartItem(product: Product, size?: string, color?: string) {
  return {
    id: product._id || product.id || '',
    name: product.name,
    price: product.price,
    image: getProductImage(product),
    quantity: 1,
    size: size || getProductSize(product),
    color: color || getProductColor(product)
  }
}

export function isValidProduct(product: any): product is Product {
  return (
    product &&
    typeof product === 'object' &&
    typeof product.name === 'string' &&
    typeof product.price === 'number' &&
    typeof product.category === 'string' &&
    (product._id || product.id)
  )
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function calculateDiscount(originalPrice: number, currentPrice: number): number {
  if (originalPrice <= currentPrice) return 0
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
}
