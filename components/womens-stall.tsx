"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ShoppingBag, Star, Filter, Grid, List, Search } from "lucide-react"

export function WomensStall() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const products = [
    {
      id: 1,
      name: "Royal Banarasi Silk Saree",
      price: 12999,
      originalPrice: 18999,
      category: "sarees",
      image: "/elegant-banarasi-silk-saree-with-gold-work.jpg",
      rating: 4.8,
      reviews: 124,
      colors: ["Maroon", "Gold", "Royal Blue"],
      sizes: ["Free Size"],
      description: "Handwoven Banarasi silk saree with intricate gold zari work",
      inStock: true,
      featured: true,
    },
    {
      id: 2,
      name: "Embroidered Cotton Salwar Suit",
      price: 3499,
      originalPrice: 4999,
      category: "suits",
      image: "/beautiful-cotton-salwar-suit-with-embroidery.jpg",
      rating: 4.6,
      reviews: 89,
      colors: ["Pink", "Mint Green", "Cream"],
      sizes: ["S", "M", "L", "XL"],
      description: "Elegant cotton salwar suit with hand embroidery and dupatta",
      inStock: true,
    },
    {
      id: 3,
      name: "Kundan Jewelry Set",
      price: 8999,
      originalPrice: 12999,
      category: "jewelry",
      image: "/traditional-kundan-jewelry-set-with-earrings.jpg",
      rating: 4.9,
      reviews: 67,
      colors: ["Gold", "Silver"],
      sizes: ["One Size"],
      description: "Traditional Kundan necklace set with matching earrings",
      inStock: true,
    },
    {
      id: 4,
      name: "Silk Embroidered Handbag",
      price: 1899,
      originalPrice: 2499,
      category: "handbags",
      image: "/silk-embroidered-handbag-traditional-design.jpg",
      rating: 4.4,
      reviews: 45,
      colors: ["Maroon", "Navy", "Emerald"],
      sizes: ["Medium"],
      description: "Handcrafted silk handbag with traditional embroidery",
      inStock: true,
    },
    {
      id: 5,
      name: "Chanderi Silk Saree",
      price: 6999,
      originalPrice: 9999,
      category: "sarees",
      image: "/chanderi-silk-saree-with-border-design.jpg",
      rating: 4.7,
      reviews: 156,
      colors: ["Peach", "Lavender", "Mint"],
      sizes: ["Free Size"],
      description: "Lightweight Chanderi silk saree with woven border",
      inStock: true,
    },
    {
      id: 6,
      name: "Designer Anarkali Suit",
      price: 5999,
      originalPrice: 8999,
      category: "suits",
      image: "/designer-anarkali-suit-with-heavy-work.jpg",
      rating: 4.5,
      reviews: 78,
      colors: ["Royal Blue", "Maroon", "Black"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Designer Anarkali suit with heavy embroidery work",
      inStock: false,
    },
  ]

  const categories = [
    { value: "all", label: "All Items" },
    { value: "sarees", label: "Sarees" },
    { value: "suits", label: "Salwar Suits" },
    { value: "jewelry", label: "Jewelry" },
    { value: "handbags", label: "Handbags" },
  ]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background pattern-paisley">
      {/* Stall Header with Arch Design */}
      <div className="relative bg-gradient-to-b from-primary/10 to-background py-12">
        <div className="absolute inset-0 pattern-mandala opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block bg-card rounded-full px-6 py-2 mb-4 border-2 border-primary/20">
              <span className="text-primary font-medium">{"महिलाओं का संग्रह • Women's Collection"}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 font-serif text-shadow-warm">
              {"Sarees & Suits Stall"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {
                "Step into our women's stall filled with exquisite sarees, elegant suits, traditional jewelry, and handcrafted accessories"
              }
            </p>
          </div>

          {/* Decorative hanging fabrics */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="w-16 h-24 bg-primary/20 rounded-b-full border-2 border-primary/30 animate-pulse"></div>
            <div className="w-20 h-28 bg-secondary/20 rounded-b-full border-2 border-secondary/30 animate-pulse delay-300"></div>
            <div className="w-16 h-24 bg-accent/20 rounded-b-full border-2 border-accent/30 animate-pulse delay-600"></div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-card rounded-2xl p-6 border border-border mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search sarees, suits, jewelry..." className="pl-10" />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Filter className="h-4 w-4" />
                More Filters
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div
          className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
        >
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30"
            >
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    viewMode === "grid" ? "h-64" : "h-48"
                  }`}
                />
                {product.featured && (
                  <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Featured
                  </Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive">Out of Stock</Badge>
                  </div>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className={`${viewMode === "list" ? "flex gap-6" : ""}`}>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-muted-foreground">{product.rating}</span>
                        <span className="text-muted-foreground">({product.reviews})</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-3">{product.description}</p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.colors.slice(0, 3).map((color) => (
                        <Badge key={color} variant="outline" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
                      <span className="text-lg text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </Badge>
                    </div>
                  </div>

                  <div className={`${viewMode === "list" ? "flex flex-col justify-end" : ""}`}>
                    <div className="flex gap-2">
                      <Button className="flex-1" disabled={!product.inStock}>
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                      {viewMode === "grid" && (
                        <Button variant="outline" size="icon">
                          <Heart className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 bg-transparent">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  )
}
