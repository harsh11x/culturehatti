'use client'

import { Suspense, lazy, useState } from "react"
import { BazaarHeader } from "@/components/bazaar-header"
import { BazaarFooter } from "@/components/bazaar-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Droplets, Wind, Sun, Shield, AlertTriangle, CheckCircle, XCircle, Info, Search, BookOpen, Lightbulb } from "lucide-react"

export default function CareInstructionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [showTips, setShowTips] = useState(false)

  const careTips = [
    {
      category: 'General',
      tip: 'Always check care labels before washing any garment',
      icon: <Info className="h-5 w-5 text-blue-600" />
    },
    {
      category: 'Storage',
      tip: 'Store silk items in breathable cotton bags to prevent yellowing',
      icon: <Shield className="h-5 w-5 text-green-600" />
    },
    {
      category: 'Cleaning',
      tip: 'Test cleaning products on hidden areas first',
      icon: <Droplets className="h-5 w-5 text-blue-600" />
    },
    {
      category: 'Ironing',
      tip: 'Iron on reverse side with appropriate heat setting',
      icon: <Sun className="h-5 w-5 text-yellow-600" />
    },
    {
      category: 'Jewelry',
      tip: 'Remove jewelry before applying perfumes or lotions',
      icon: <Shield className="h-5 w-5 text-purple-600" />
    }
  ]

  const filteredTips = careTips.filter(tip => 
    tip.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tip.tip.toLowerCase().includes(searchQuery.toLowerCase())
  )
  const careInstructions = {
    sarees: {
      title: "साड़ी की देखभाल | Saree Care Instructions",
      description: "Proper care ensures your sarees maintain their beauty and longevity for years to come.",
      materials: [
        {
          type: "Silk Sarees",
          icon: <Droplets className="h-6 w-6 text-blue-600" />,
          washing: "Dry clean only",
          ironing: "Low heat with cloth barrier",
          storage: "Hang on padded hangers",
          tips: [
            "Never wash silk sarees at home",
            "Store in breathable cotton bags",
            "Avoid direct sunlight",
            "Use mothballs for long-term storage"
          ]
        },
        {
          type: "Cotton Sarees",
          icon: <Wind className="h-6 w-6 text-green-600" />,
          washing: "Hand wash in cold water",
          ironing: "Medium heat",
          storage: "Fold and store flat",
          tips: [
            "Use mild detergent",
            "Air dry in shade",
            "Iron while slightly damp",
            "Store with tissue paper between folds"
          ]
        },
        {
          type: "Georgette/Crepe",
          icon: <Sun className="h-6 w-6 text-yellow-600" />,
          washing: "Dry clean recommended",
          ironing: "Low heat, steam iron",
          storage: "Hang to prevent creasing",
          tips: [
            "Handle with care while wearing",
            "Avoid snagging on jewelry",
            "Store in garment bags",
            "Professional cleaning preferred"
          ]
        }
      ]
    },
    kurtas: {
      title: "कुर्ता की देखभाल | Kurta Care Instructions",
      description: "Keep your kurtas looking fresh and new with these care guidelines.",
      materials: [
        {
          type: "Cotton Kurtas",
          icon: <Wind className="h-6 w-6 text-green-600" />,
          washing: "Machine wash cold",
          ironing: "Medium heat",
          storage: "Hang or fold",
          tips: [
            "Wash with similar colors",
            "Tumble dry low",
            "Iron while damp",
            "Store in cool, dry place"
          ]
        },
        {
          type: "Silk Kurtas",
          icon: <Droplets className="h-6 w-6 text-blue-600" />,
          washing: "Dry clean only",
          ironing: "Low heat with pressing cloth",
          storage: "Hang on padded hangers",
          tips: [
            "Professional cleaning recommended",
            "Avoid water spots",
            "Store in breathable bags",
            "Handle with clean hands"
          ]
        },
        {
          type: "Linen Kurtas",
          icon: <Sun className="h-6 w-6 text-yellow-600" />,
          washing: "Hand wash or gentle cycle",
          ironing: "High heat while damp",
          storage: "Hang to prevent wrinkles",
          tips: [
            "Wash in cold water",
            "Air dry completely",
            "Iron while still damp",
            "Embrace natural wrinkles"
          ]
        }
      ]
    },
    jewelry: {
      title: "आभूषण की देखभाल | Jewelry Care Instructions",
      description: "Maintain the shine and beauty of your traditional Indian jewelry with proper care.",
      materials: [
        {
          type: "Gold Jewelry",
          icon: <Shield className="h-6 w-6 text-yellow-600" />,
          cleaning: "Mild soap and water",
          storage: "Separate compartments",
          tips: [
            "Clean with soft brush",
            "Avoid harsh chemicals",
            "Store in soft pouches",
            "Remove before swimming"
          ]
        },
        {
          type: "Silver Jewelry",
          icon: <Droplets className="h-6 w-6 text-gray-600" />,
          cleaning: "Silver polish or baking soda",
          storage: "Anti-tarnish bags",
          tips: [
            "Polish regularly",
            "Store in dry place",
            "Avoid contact with perfumes",
            "Use soft cloth for cleaning"
          ]
        },
        {
          type: "Kundan/Polki",
          icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
          cleaning: "Dry cleaning only",
          storage: "Individual pouches",
          tips: [
            "Never use water",
            "Handle with extreme care",
            "Store in padded boxes",
            "Professional cleaning only"
          ]
        }
      ]
    },
    bags: {
      title: "थैलों की देखभाल | Bag Care Instructions",
      description: "Keep your bags looking new and functional with proper maintenance.",
      materials: [
        {
          type: "Leather Bags",
          icon: <Shield className="h-6 w-6 text-amber-600" />,
          cleaning: "Leather conditioner",
          storage: "Stuff with paper",
          tips: [
            "Condition regularly",
            "Avoid water exposure",
            "Store in cool, dry place",
            "Use leather protectant"
          ]
        },
        {
          type: "Fabric Bags",
          icon: <Wind className="h-6 w-6 text-green-600" />,
          cleaning: "Spot clean or hand wash",
          storage: "Hang or fold flat",
          tips: [
            "Test cleaning solution first",
            "Air dry completely",
            "Iron on reverse side",
            "Store in breathable bags"
          ]
        },
        {
          type: "Embroidered Bags",
          icon: <Sun className="h-6 w-6 text-purple-600" />,
          cleaning: "Professional cleaning",
          storage: "Lay flat or hang",
          tips: [
            "Handle embroidery carefully",
            "Avoid snagging",
            "Store in protective bags",
            "Professional cleaning recommended"
          ]
        }
      ]
    }
  }

  const generalTips = [
    {
      category: "Storage",
      icon: <Shield className="h-5 w-5 text-blue-600" />,
      tips: [
        "Store in cool, dry places away from direct sunlight",
        "Use breathable storage bags and boxes",
        "Keep items clean before storing",
        "Rotate items regularly to prevent permanent creasing"
      ]
    },
    {
      category: "Cleaning",
      icon: <Droplets className="h-5 w-5 text-green-600" />,
      tips: [
        "Always check care labels before cleaning",
        "Test cleaning products on hidden areas first",
        "Use appropriate detergents for fabric types",
        "Handle delicate items with extra care"
      ]
    },
    {
      category: "Ironing",
      icon: <Sun className="h-5 w-5 text-yellow-600" />,
      tips: [
        "Use appropriate heat settings for fabric types",
        "Iron on reverse side when possible",
        "Use pressing cloth for delicate fabrics",
        "Allow items to cool before storing"
      ]
    },
    {
      category: "Wearing",
      icon: <CheckCircle className="h-5 w-5 text-purple-600" />,
      tips: [
        "Apply perfumes and lotions before wearing",
        "Remove jewelry before changing clothes",
        "Handle items with clean hands",
        "Avoid contact with rough surfaces"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 pattern-paisley">
      <BazaarHeader />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-4 py-2 rounded-lg text-sm font-medium mb-6 border border-amber-200">
              <Shield className="h-4 w-4" />
              Care Instructions
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-red">देखभाल निर्देश | Care Instructions</span>
            </h1>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Learn how to properly care for your traditional Indian garments and accessories to maintain their beauty and longevity.
            </p>
          </div>

          {/* Interactive Care Guide */}
          <Card className="mb-12 border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BookOpen className="h-6 w-6 text-green-600" />
                Interactive Care Guide
              </CardTitle>
              <p className="text-gray-600">Get personalized care instructions for your specific items</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="category" className="text-red-800 font-semibold">Select Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose item category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sarees">साड़ी | Sarees</SelectItem>
                        <SelectItem value="kurtas">कुर्ता | Kurtas</SelectItem>
                        <SelectItem value="jewelry">आभूषण | Jewelry</SelectItem>
                        <SelectItem value="bags">थैले | Bags</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {selectedCategory && (
                    <div>
                      <Label htmlFor="material" className="text-red-800 font-semibold">Select Material</Label>
                      <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose material type" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedCategory === 'sarees' && (
                            <>
                              <SelectItem value="silk">Silk</SelectItem>
                              <SelectItem value="cotton">Cotton</SelectItem>
                              <SelectItem value="georgette">Georgette</SelectItem>
                            </>
                          )}
                          {selectedCategory === 'kurtas' && (
                            <>
                              <SelectItem value="cotton">Cotton</SelectItem>
                              <SelectItem value="silk">Silk</SelectItem>
                              <SelectItem value="linen">Linen</SelectItem>
                            </>
                          )}
                          {selectedCategory === 'jewelry' && (
                            <>
                              <SelectItem value="gold">Gold</SelectItem>
                              <SelectItem value="silver">Silver</SelectItem>
                              <SelectItem value="kundan">Kundan/Polki</SelectItem>
                            </>
                          )}
                          {selectedCategory === 'bags' && (
                            <>
                              <SelectItem value="leather">Leather</SelectItem>
                              <SelectItem value="fabric">Fabric</SelectItem>
                              <SelectItem value="embroidered">Embroidered</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  
                  <Button 
                    onClick={() => setShowTips(!showTips)} 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    disabled={!selectedCategory || !selectedMaterial}
                  >
                    <Lightbulb className="h-4 w-4 mr-2" />
                    Get Care Instructions
                  </Button>
                </div>
                
                <div className="flex items-center justify-center">
                  {showTips && selectedCategory && selectedMaterial ? (
                    <div className="w-full space-y-4">
                      <div className="text-center p-4 bg-white border rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">
                          Care Instructions for {selectedMaterial} {selectedCategory}
                        </h3>
                        <div className="space-y-2 text-sm text-left">
                          <p>• {selectedMaterial === 'silk' ? 'Dry clean only' : 'Hand wash in cold water'}</p>
                          <p>• {selectedMaterial === 'cotton' ? 'Iron on medium heat' : 'Iron on low heat'}</p>
                          <p>• Store in breathable bags</p>
                          <p>• Avoid direct sunlight</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-6 bg-gray-50 border-2 border-gray-200 rounded-lg">
                      <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">Select Your Item</h3>
                      <p className="text-gray-500">Choose category and material to get personalized care instructions</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Care Tips Search */}
          <Card className="mb-12 border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Search className="h-6 w-6 text-purple-600" />
                Quick Care Tips Search
              </CardTitle>
              <p className="text-gray-600">Search for specific care tips and advice</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="search" className="text-red-800 font-semibold">Search Tips</Label>
                  <Input
                    id="search"
                    placeholder="Search for care tips (e.g., 'silk', 'stain removal', 'storage')"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {filteredTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
                      {tip.icon}
                      <div>
                        <Badge className="mb-2 bg-purple-100 text-purple-800">{tip.category}</Badge>
                        <p className="text-sm text-gray-700">{tip.tip}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Care Instructions by Category */}
          <div className="space-y-12">
            {/* Sarees */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{careInstructions.sarees.title}</CardTitle>
                <p className="text-gray-600">{careInstructions.sarees.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {careInstructions.sarees.materials.map((material, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        {material.icon}
                        <h3 className="font-semibold text-lg">{material.type}</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <Badge className="bg-blue-100 text-blue-800 mb-1">Washing</Badge>
                          <p className="text-sm text-gray-600">{material.washing}</p>
                        </div>
                        <div>
                          <Badge className="bg-green-100 text-green-800 mb-1">Ironing</Badge>
                          <p className="text-sm text-gray-600">{material.ironing}</p>
                        </div>
                        <div>
                          <Badge className="bg-purple-100 text-purple-800 mb-1">Storage</Badge>
                          <p className="text-sm text-gray-600">{material.storage}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Tips:</h4>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {material.tips.map((tip, tipIndex) => (
                              <li key={tipIndex}>• {tip}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Kurtas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{careInstructions.kurtas.title}</CardTitle>
                <p className="text-gray-600">{careInstructions.kurtas.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {careInstructions.kurtas.materials.map((material, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        {material.icon}
                        <h3 className="font-semibold text-lg">{material.type}</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <Badge className="bg-blue-100 text-blue-800 mb-1">Washing</Badge>
                          <p className="text-sm text-gray-600">{material.washing}</p>
                        </div>
                        <div>
                          <Badge className="bg-green-100 text-green-800 mb-1">Ironing</Badge>
                          <p className="text-sm text-gray-600">{material.ironing}</p>
                        </div>
                        <div>
                          <Badge className="bg-purple-100 text-purple-800 mb-1">Storage</Badge>
                          <p className="text-sm text-gray-600">{material.storage}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Tips:</h4>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {material.tips.map((tip, tipIndex) => (
                              <li key={tipIndex}>• {tip}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Jewelry */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{careInstructions.jewelry.title}</CardTitle>
                <p className="text-gray-600">{careInstructions.jewelry.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {careInstructions.jewelry.materials.map((material, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        {material.icon}
                        <h3 className="font-semibold text-lg">{material.type}</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <Badge className="bg-blue-100 text-blue-800 mb-1">Cleaning</Badge>
                          <p className="text-sm text-gray-600">{material.cleaning}</p>
                        </div>
                        <div>
                          <Badge className="bg-green-100 text-green-800 mb-1">Storage</Badge>
                          <p className="text-sm text-gray-600">{material.storage}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Tips:</h4>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {material.tips.map((tip, tipIndex) => (
                              <li key={tipIndex}>• {tip}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{careInstructions.bags.title}</CardTitle>
                <p className="text-gray-600">{careInstructions.bags.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {careInstructions.bags.materials.map((material, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        {material.icon}
                        <h3 className="font-semibold text-lg">{material.type}</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <Badge className="bg-blue-100 text-blue-800 mb-1">Cleaning</Badge>
                          <p className="text-sm text-gray-600">{material.cleaning}</p>
                        </div>
                        <div>
                          <Badge className="bg-green-100 text-green-800 mb-1">Storage</Badge>
                          <p className="text-sm text-gray-600">{material.storage}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Tips:</h4>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {material.tips.map((tip, tipIndex) => (
                              <li key={tipIndex}>• {tip}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* General Care Tips */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-6 w-6 text-blue-600" />
                General Care Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {generalTips.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-4 text-red-800 flex items-center gap-2">
                      {category.icon}
                      {category.category}
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {category.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Warning Section */}
          <Card className="mt-8 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <AlertTriangle className="h-6 w-6" />
                Important Warnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-red-800">What NOT to Do:</h4>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      Never use bleach on colored fabrics
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      Don't expose silk to direct sunlight
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      Avoid using harsh detergents on delicate fabrics
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      Don't store wet or damp items
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-red-800">Emergency Care:</h4>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Blot stains immediately with clean cloth
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Take to professional cleaner for major stains
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Contact us for specific care questions
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Keep care labels for reference
                    </li>
                  </ul>
                </div>
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
