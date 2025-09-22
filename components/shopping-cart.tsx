"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { ShoppingBag, Plus, Minus, Trash2, Gift, Truck, Shield } from "lucide-react"

interface CartItem {
  id: number
  name: string
  price: number
  originalPrice: number
  image: string
  quantity: number
  size?: string
  color?: string
  category: string
}

export function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Royal Silk Sherwani",
      price: 15999,
      originalPrice: 22999,
      image: "/royal-silk-sherwani-with-gold-embroidery.jpg",
      quantity: 1,
      size: "L",
      color: "Maroon",
      category: "sherwanis",
    },
    {
      id: 2,
      name: "Elegant Banarasi Saree",
      price: 8999,
      originalPrice: 12999,
      image: "/elegant-banarasi-silk-saree-with-gold-work.jpg",
      quantity: 1,
      color: "Royal Blue",
      category: "sarees",
    },
  ])

  const [promoCode, setPromoCode] = useState("")

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id))
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const originalTotal = cartItems.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0)
  const savings = originalTotal - subtotal
  const shipping = subtotal > 2000 ? 0 : 199
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-background pattern-paisley">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-accent mb-2 font-serif">
            Shopping Cart • खरीदारी की टोकरी
          </h1>
          <p className="text-muted-foreground">Review your selected items before proceeding to checkout</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Cart Items ({cartItems.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
                    <p className="text-muted-foreground mb-4">Add some beautiful items to get started</p>
                    <Button className="bg-accent hover:bg-accent/90">Continue Shopping</Button>
                  </div>
                ) : (
                  cartItems.map((item, index) => (
                    <div key={item.id}>
                      <div className="flex gap-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg border"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {item.color && (
                              <Badge variant="outline" className="text-xs">
                                Color: {item.color}
                              </Badge>
                            )}
                            {item.size && (
                              <Badge variant="outline" className="text-xs">
                                Size: {item.size}
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-lg font-bold text-accent">₹{item.price.toLocaleString()}</span>
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{item.originalPrice.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-destructive hover:text-destructive"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      {index < cartItems.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Promo Code */}
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5" />
                  Promo Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button variant="outline">Apply</Button>
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="border-2 border-accent/20 bg-accent/5">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>You Save</span>
                  <span>-₹{savings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                </div>
                {shipping === 0 && (
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Truck className="h-4 w-4" />
                    <span>Free shipping on orders above ₹2,000</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-accent">₹{total.toLocaleString()}</span>
                </div>

                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                  size="lg"
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>Secure checkout with 256-bit SSL encryption</span>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card className="border-2 border-border">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Free Delivery</p>
                      <p className="text-sm text-muted-foreground">On orders above ₹2,000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gift className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Gift Wrapping</p>
                      <p className="text-sm text-muted-foreground">Available at checkout</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Easy Returns</p>
                      <p className="text-sm text-muted-foreground">30-day return policy</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
