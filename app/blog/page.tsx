'use client'

import { Suspense, lazy } from "react"
import { BazaarHeader } from "@/components/bazaar-header"
import { BazaarFooter } from "@/components/bazaar-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Heart, Share2 } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Banarasi Silk Weaving",
      excerpt: "Discover the intricate process behind creating the world's most luxurious silk sarees in the ancient city of Varanasi.",
      author: "Priya Sharma",
      date: "2024-01-15",
      category: "Craftsmanship",
      readTime: "5 min read",
      image: "/beautiful-indian-woman-in-colorful-saree-with-jewe.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Traditional Indian Jewelry: A Cultural Heritage",
      excerpt: "Explore the rich history and significance of traditional Indian jewelry, from Kundan to Polki, and their cultural importance.",
      author: "Rajesh Kumar",
      date: "2024-01-12",
      category: "Jewelry",
      readTime: "7 min read",
      image: "/beautiful-indian-handicrafts-brass-items-decorativ.jpg",
      featured: false
    },
    {
      id: 3,
      title: "The Story Behind Handwoven Cotton Kurtas",
      excerpt: "Learn about the traditional techniques used to create comfortable and stylish cotton kurtas that have been worn for centuries.",
      author: "Anita Singh",
      date: "2024-01-10",
      category: "Fashion",
      readTime: "4 min read",
      image: "/handsome-indian-man-in-traditional-kurta-and-ethni.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Supporting Artisan Communities in Rural India",
      excerpt: "How Culture Hatti is helping preserve traditional crafts and support artisan communities across India.",
      author: "Culture Hatti Team",
      date: "2024-01-08",
      category: "Community",
      readTime: "6 min read",
      image: "/cute-indian-children-in-colorful-traditional-cloth.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Festival Fashion: Dressing for Indian Celebrations",
      excerpt: "A guide to choosing the perfect traditional attire for various Indian festivals and celebrations.",
      author: "Meera Patel",
      date: "2024-01-05",
      category: "Fashion",
      readTime: "8 min read",
      image: "/beautiful-indian-woman-in-colorful-saree-with-jewe.jpg",
      featured: false
    },
    {
      id: 6,
      title: "The Future of Traditional Indian Crafts",
      excerpt: "How modern technology and e-commerce are helping traditional Indian crafts reach a global audience.",
      author: "Vikram Joshi",
      date: "2024-01-03",
      category: "Innovation",
      readTime: "5 min read",
      image: "/beautiful-indian-handicrafts-brass-items-decorativ.jpg",
      featured: false
    }
  ]

  const categories = ["All", "Craftsmanship", "Jewelry", "Fashion", "Community", "Innovation"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 pattern-paisley">
      <BazaarHeader />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-red">ब्लॉग | Blog</span>
            </h1>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Discover stories about Indian culture, traditional crafts, and the artisans who keep our heritage alive.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-red-800 hover:bg-red-900 text-white" : "border-red-800 text-red-800 hover:bg-red-50"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-red-900 mb-6">Featured Article</h2>
            <Card className="border-2 border-amber-200 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4 text-red-600 border-red-600">
                    {blogPosts[0].category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </div>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Button className="bg-red-800 hover:bg-red-900 text-white w-fit">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-red-900 mb-6">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="border-2 border-amber-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge variant="outline" className="absolute top-3 left-3 text-red-600 border-red-600 bg-white">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm" className="border-red-800 text-red-800 hover:bg-red-50">
                        Read More
                      </Button>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-600">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-600">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <Card className="border-2 border-amber-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Stay Updated</h3>
              <p className="text-gray-700 mb-6">
                Subscribe to our newsletter to get the latest stories about Indian culture and traditional crafts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Button className="bg-red-800 hover:bg-red-900 text-white">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Suspense fallback={<div className="h-32 bg-red-900"></div>}>
        <BazaarFooter />
      </Suspense>
    </div>
  )
}
