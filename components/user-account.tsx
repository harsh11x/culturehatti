"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User, Package, Heart, MapPin, CreditCard, Bell, Shield, Edit } from "lucide-react"

export function UserAccount() {
  const [isEditing, setIsEditing] = useState(false)

  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 15999,
      items: [{ name: "Royal Silk Sherwani", image: "/royal-silk-sherwani-with-gold-embroidery.jpg" }],
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-10",
      status: "In Transit",
      total: 8999,
      items: [{ name: "Elegant Banarasi Saree", image: "/elegant-banarasi-silk-saree-with-gold-work.jpg" }],
    },
  ]

  const wishlistItems = [
    {
      id: 1,
      name: "Cotton Salwar Suit",
      price: 3499,
      image: "/beautiful-cotton-salwar-suit-with-embroidery.jpg",
    },
    {
      id: 2,
      name: "Silk Kurta Pajama",
      price: 5499,
      image: "/silk-kurta-pajama-set-festive-wear.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background pattern-paisley">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-accent mb-2 font-serif">My Account • मेरा खाता</h1>
          <p className="text-muted-foreground">Manage your profile, orders, and preferences</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-border">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Priya Sharma</h3>
                  <p className="text-muted-foreground">priya.sharma@email.com</p>
                  <Badge className="mt-2 bg-secondary">Premium Member</Badge>
                </div>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <User className="h-4 w-4" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Package className="h-4 w-4" />
                    Orders
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Heart className="h-4 w-4" />
                    Wishlist
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <MapPin className="h-4 w-4" />
                    Addresses
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <CreditCard className="h-4 w-4" />
                    Payment Methods
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Bell className="h-4 w-4" />
                    Notifications
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Shield className="h-4 w-4" />
                    Privacy & Security
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                <TabsTrigger value="addresses">Addresses</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card className="border-2 border-border">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Personal Information</CardTitle>
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                      <Edit className="h-4 w-4 mr-2" />
                      {isEditing ? "Cancel" : "Edit"}
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Priya" disabled={!isEditing} />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Sharma" disabled={!isEditing} />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="priya.sharma@email.com" disabled={!isEditing} />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+91 98765 43210" disabled={!isEditing} />
                    </div>
                    <div>
                      <Label htmlFor="birthdate">Date of Birth</Label>
                      <Input id="birthdate" type="date" defaultValue="1990-05-15" disabled={!isEditing} />
                    </div>
                    {isEditing && (
                      <div className="flex gap-2">
                        <Button className="bg-accent hover:bg-accent/90">Save Changes</Button>
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          Cancel
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="orders">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {orders.map((order, index) => (
                        <div key={order.id}>
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="font-semibold">Order {order.id}</h3>
                              <p className="text-sm text-muted-foreground">
                                Placed on {new Date(order.date).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="text-right">
                              <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>
                                {order.status}
                              </Badge>
                              <p className="text-lg font-semibold text-accent mt-1">₹{order.total.toLocaleString()}</p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            {order.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-center gap-3">
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  className="w-16 h-16 object-cover rounded-lg border"
                                />
                                <span className="font-medium">{item.name}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              Track Order
                            </Button>
                            {order.status === "Delivered" && (
                              <Button variant="outline" size="sm">
                                Reorder
                              </Button>
                            )}
                          </div>
                          {index < orders.length - 1 && <Separator className="mt-6" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Wishlist Tab */}
              <TabsContent value="wishlist">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle>My Wishlist</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {wishlistItems.map((item) => (
                        <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold mb-2">{item.name}</h3>
                            <p className="text-lg font-bold text-accent mb-3">₹{item.price.toLocaleString()}</p>
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-accent hover:bg-accent/90">
                                Add to Cart
                              </Button>
                              <Button variant="outline" size="sm">
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Addresses Tab */}
              <TabsContent value="addresses">
                <Card className="border-2 border-border">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Saved Addresses</CardTitle>
                    <Button className="bg-accent hover:bg-accent/90">Add New Address</Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold">Home</h3>
                            <Badge variant="secondary" className="mt-1">
                              Default
                            </Badge>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-muted-foreground">
                          123 MG Road, Connaught Place
                          <br />
                          New Delhi, Delhi 110001
                          <br />
                          India
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold">Office</h3>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-muted-foreground">
                          456 Cyber City, Sector 24
                          <br />
                          Gurgaon, Haryana 122002
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
