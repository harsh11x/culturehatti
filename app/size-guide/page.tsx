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
import { Ruler, Shirt, Users, Download, Info, Calculator, CheckCircle, AlertCircle } from "lucide-react"

export default function SizeGuidePage() {
  const [measurements, setMeasurements] = useState({
    height: '',
    chest: '',
    waist: '',
    category: ''
  })
  const [recommendedSize, setRecommendedSize] = useState('')

  const calculateSize = () => {
    if (!measurements.category || !measurements.height) {
      setRecommendedSize('')
      return
    }

    const height = parseFloat(measurements.height)
    const chest = parseFloat(measurements.chest)
    const waist = parseFloat(measurements.waist)

    if (measurements.category === 'sarees') {
      if (height <= 5.4) {
        setRecommendedSize('5.5 meters - Perfect for your height')
      } else if (height <= 5.8) {
        setRecommendedSize('6 meters - Most common size for your height')
      } else if (height <= 6.0) {
        setRecommendedSize('6.5 meters - For taller women like you')
      } else {
        setRecommendedSize('7 meters - Extra long for your height')
      }
    } else if (measurements.category === 'kurtas') {
      if (chest <= 36) {
        setRecommendedSize('XS or S - Based on your chest measurement')
      } else if (chest <= 40) {
        setRecommendedSize('M - Perfect fit for your measurements')
      } else if (chest <= 44) {
        setRecommendedSize('L - Comfortable fit for your size')
      } else {
        setRecommendedSize('XL or XXL - For larger chest measurements')
      }
    } else {
      setRecommendedSize('Please select a category and enter your measurements')
    }
  }

  const handleMeasurementChange = (field: string, value: string) => {
    setMeasurements(prev => ({ ...prev, [field]: value }))
    setRecommendedSize('')
  }
  const sizeCharts = {
    sarees: {
      title: "साड़ी साइज़ गाइड | Saree Size Guide",
      description: "Traditional sarees come in standard lengths. Choose based on your height and draping preference.",
      sizes: [
        { size: "5.5 meters", height: "5'0\" - 5'4\"", description: "Petite - Perfect for shorter frames" },
        { size: "6 meters", height: "5'4\" - 5'8\"", description: "Regular - Most common size" },
        { size: "6.5 meters", height: "5'8\" - 6'0\"", description: "Tall - For taller women" },
        { size: "7 meters", height: "6'0\"+", description: "Extra Long - For very tall women" }
      ]
    },
    kurtas: {
      title: "कुर्ता साइज़ गाइड | Kurta Size Guide",
      description: "Measure your chest, waist, and length for the perfect fit.",
      sizes: [
        { size: "XS", chest: "34-36\"", waist: "30-32\"", length: "38-40\"", description: "Extra Small" },
        { size: "S", chest: "36-38\"", waist: "32-34\"", length: "40-42\"", description: "Small" },
        { size: "M", chest: "38-40\"", waist: "34-36\"", length: "42-44\"", description: "Medium" },
        { size: "L", chest: "40-42\"", waist: "36-38\"", length: "44-46\"", description: "Large" },
        { size: "XL", chest: "42-44\"", waist: "38-40\"", length: "46-48\"", description: "Extra Large" },
        { size: "XXL", chest: "44-46\"", waist: "40-42\"", length: "48-50\"", description: "Double Extra Large" }
      ]
    },
    jewelry: {
      title: "आभूषण साइज़ गाइड | Jewelry Size Guide",
      description: "Find the perfect fit for traditional Indian jewelry pieces.",
      sizes: [
        { type: "Bangles", size: "2.25\"", description: "Small wrist (5.5-6 inches)" },
        { type: "Bangles", size: "2.5\"", description: "Medium wrist (6-6.5 inches)" },
        { type: "Bangles", size: "2.75\"", description: "Large wrist (6.5-7 inches)" },
        { type: "Necklaces", size: "14-16\"", description: "Choker length" },
        { type: "Necklaces", size: "18-20\"", description: "Princess length" },
        { type: "Necklaces", size: "22-24\"", description: "Matinee length" },
        { type: "Earrings", size: "1-2 inches", description: "Studs and small drops" },
        { type: "Earrings", size: "2-3 inches", description: "Medium drops" },
        { type: "Earrings", size: "3+ inches", description: "Long drops and chandeliers" }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 pattern-paisley">
      <BazaarHeader />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-4 py-2 rounded-lg text-sm font-medium mb-6 border border-amber-200">
              <Ruler className="h-4 w-4" />
              Size Guide
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-red">साइज़ गाइड | Size Guide</span>
            </h1>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Find the perfect fit for your traditional Indian garments and jewelry with our comprehensive size guide.
            </p>
          </div>

          {/* Interactive Size Calculator */}
          <Card className="mb-12 border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Calculator className="h-6 w-6 text-blue-600" />
                Interactive Size Calculator
              </CardTitle>
              <p className="text-gray-600">Get personalized size recommendations based on your measurements</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="category" className="text-red-800 font-semibold">Select Category</Label>
                    <Select value={measurements.category} onValueChange={(value) => handleMeasurementChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sarees">साड़ी | Sarees</SelectItem>
                        <SelectItem value="kurtas">कुर्ता | Kurtas</SelectItem>
                        <SelectItem value="jewelry">आभूषण | Jewelry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="height" className="text-red-800 font-semibold">Height (feet)</Label>
                    <Input
                      id="height"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 5.6"
                      value={measurements.height}
                      onChange={(e) => handleMeasurementChange('height', e.target.value)}
                    />
                  </div>
                  
                  {measurements.category === 'kurtas' && (
                    <>
                      <div>
                        <Label htmlFor="chest" className="text-red-800 font-semibold">Chest (inches)</Label>
                        <Input
                          id="chest"
                          type="number"
                          placeholder="e.g., 38"
                          value={measurements.chest}
                          onChange={(e) => handleMeasurementChange('chest', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="waist" className="text-red-800 font-semibold">Waist (inches)</Label>
                        <Input
                          id="waist"
                          type="number"
                          placeholder="e.g., 32"
                          value={measurements.waist}
                          onChange={(e) => handleMeasurementChange('waist', e.target.value)}
                        />
                      </div>
                    </>
                  )}
                  
                  <Button onClick={calculateSize} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Calculator className="h-4 w-4 mr-2" />
                    Calculate My Size
                  </Button>
                </div>
                
                <div className="flex items-center justify-center">
                  {recommendedSize ? (
                    <div className="text-center p-6 bg-green-50 border-2 border-green-200 rounded-lg">
                      <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-green-800 mb-2">Recommended Size</h3>
                      <p className="text-green-700 font-medium">{recommendedSize}</p>
                    </div>
                  ) : (
                    <div className="text-center p-6 bg-gray-50 border-2 border-gray-200 rounded-lg">
                      <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">Enter Your Measurements</h3>
                      <p className="text-gray-500">Fill in the form to get your perfect size recommendation</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Measure */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                How to Measure Yourself
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shirt className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Chest Measurement</h3>
                  <p className="text-sm text-gray-600">Measure around the fullest part of your chest, keeping the tape parallel to the ground.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ruler className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Waist Measurement</h3>
                  <p className="text-sm text-gray-600">Measure around your natural waistline, usually the narrowest part of your torso.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Length Measurement</h3>
                  <p className="text-sm text-gray-600">For kurtas, measure from shoulder to desired length. For sarees, consider your height.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Size Charts */}
          <div className="space-y-12">
            {/* Saree Size Guide */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{sizeCharts.sarees.title}</CardTitle>
                <p className="text-gray-600">{sizeCharts.sarees.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {sizeCharts.sarees.sizes.map((size, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="text-center">
                        <Badge className="mb-2 bg-red-100 text-red-800">{size.size}</Badge>
                        <h4 className="font-semibold mb-1">{size.height}</h4>
                        <p className="text-sm text-gray-600">{size.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Kurta Size Guide */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{sizeCharts.kurtas.title}</CardTitle>
                <p className="text-gray-600">{sizeCharts.kurtas.description}</p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Size</th>
                        <th className="text-left p-3 font-semibold">Chest</th>
                        <th className="text-left p-3 font-semibold">Waist</th>
                        <th className="text-left p-3 font-semibold">Length</th>
                        <th className="text-left p-3 font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeCharts.kurtas.sizes.map((size, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-3">
                            <Badge className="bg-amber-100 text-amber-800">{size.size}</Badge>
                          </td>
                          <td className="p-3">{size.chest}</td>
                          <td className="p-3">{size.waist}</td>
                          <td className="p-3">{size.length}</td>
                          <td className="p-3 text-sm text-gray-600">{size.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Jewelry Size Guide */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{sizeCharts.jewelry.title}</CardTitle>
                <p className="text-gray-600">{sizeCharts.jewelry.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sizeCharts.jewelry.sizes.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{item.type}</h4>
                        <Badge className="bg-purple-100 text-purple-800">{item.size}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tips Section */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Size Guide Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-red-800">General Tips:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Always measure over thin, fitted clothing</li>
                    <li>• Keep the measuring tape snug but not tight</li>
                    <li>• For sarees, consider your draping style preference</li>
                    <li>• Traditional Indian clothing tends to be loose-fitting</li>
                    <li>• When in doubt, size up for comfort</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-red-800">Special Considerations:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Silk sarees may shrink slightly after first wash</li>
                    <li>• Cotton kurtas may stretch with wear</li>
                    <li>• Jewelry sizes vary by region and tradition</li>
                    <li>• Consider your body type and comfort preferences</li>
                    <li>• Consult our customer service for personalized advice</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Size Chart */}
          <div className="text-center mt-12">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Download Size Chart</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get a printable version of our complete size guide
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Suspense fallback={<div className="h-32 bg-red-900"></div>}>
        <BazaarFooter />
      </Suspense>
    </div>
  )
}