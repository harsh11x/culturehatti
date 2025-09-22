'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { X, Plus, Upload, Save } from 'lucide-react'
import { toast } from 'sonner'

interface ProductFormData {
  name: string
  description: string
  price: number
  category: string
  subcategory: string
  images: string[]
  colors: string[]
  materials: string[]
  features: string[]
  artisan: string
  location: string
  inStock: boolean
  featured: boolean
}

const initialFormData: ProductFormData = {
  name: '',
  description: '',
  price: 0,
  category: '',
  subcategory: '',
  images: [],
  colors: [],
  materials: [],
  features: [],
  artisan: '',
  location: '',
  inStock: true,
  featured: false
}

const categories = [
  { value: 'sarees', label: 'Sarees', subcategories: ['Banarasi', 'Kanjeevaram', 'Chanderi', 'Silk', 'Cotton'] },
  { value: 'kurtas', label: 'Kurtas', subcategories: ['Lucknowi', 'Silk', 'Cotton', 'Linen', 'Sherwani'] },
  { value: 'jewelry', label: 'Jewelry', subcategories: ['Kundan', 'Polki', 'Pearl', 'Gold', 'Silver'] },
  { value: 'handicrafts', label: 'Handicrafts', subcategories: ['Brass', 'Wooden', 'Pottery', 'Textile Art', 'Home Decor'] },
  { value: 'kids', label: 'Kids Wear', subcategories: ['Lehenga Choli', 'Kurta Pajama', 'Dhoti Kurta', 'Ethnic Frocks'] }
]

const commonColors = ['Red', 'Maroon', 'Gold', 'Yellow', 'Orange', 'Green', 'Blue', 'Purple', 'Pink', 'Black', 'White', 'Cream']
const commonMaterials = ['Silk', 'Cotton', 'Linen', 'Chiffon', 'Georgette', 'Velvet', 'Brocade', 'Kanjeevaram', 'Banarasi', 'Chanderi']

export default function ProductForm() {
  const [formData, setFormData] = useState<ProductFormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [newColor, setNewColor] = useState('')
  const [newMaterial, setNewMaterial] = useState('')
  const [newFeature, setNewFeature] = useState('')

  const handleInputChange = (field: keyof ProductFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const addColor = () => {
    if (newColor.trim() && !formData.colors.includes(newColor.trim())) {
      setFormData(prev => ({ ...prev, colors: [...prev.colors, newColor.trim()] }))
      setNewColor('')
    }
  }

  const removeColor = (color: string) => {
    setFormData(prev => ({ ...prev, colors: prev.colors.filter(c => c !== color) }))
  }

  const addMaterial = () => {
    if (newMaterial.trim() && !formData.materials.includes(newMaterial.trim())) {
      setFormData(prev => ({ ...prev, materials: [...prev.materials, newMaterial.trim()] }))
      setNewMaterial('')
    }
  }

  const removeMaterial = (material: string) => {
    setFormData(prev => ({ ...prev, materials: prev.materials.filter(m => m !== material) }))
  }

  const addFeature = () => {
    if (newFeature.trim() && !formData.features.includes(newFeature.trim())) {
      setFormData(prev => ({ ...prev, features: [...prev.features, newFeature.trim()] }))
      setNewFeature('')
    }
  }

  const removeFeature = (feature: string) => {
    setFormData(prev => ({ ...prev, features: prev.features.filter(f => f !== feature) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/admin/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Product added successfully!')
        setFormData(initialFormData)
      } else {
        toast.error('Failed to add product')
      }
    } catch (error) {
      toast.error('Error adding product')
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedCategory = categories.find(cat => cat.value === formData.category)

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-red-900 mb-2">Add New Product</h1>
        <p className="text-amber-700">Add authentic Indian heritage products to your collection</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card className="border-2 border-amber-200">
          <CardHeader>
            <CardTitle className="text-red-900 flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-red-800 font-medium">Product Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter product name"
                  className="border-amber-300 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <Label htmlFor="price" className="text-red-800 font-medium">Price (₹) *</Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', parseFloat(e.target.value) || 0)}
                  placeholder="Enter price"
                  className="border-amber-300 focus:border-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description" className="text-red-800 font-medium">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Enter detailed product description"
                className="border-amber-300 focus:border-red-500 min-h-[100px]"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="artisan" className="text-red-800 font-medium">Artisan Name</Label>
                <Input
                  id="artisan"
                  value={formData.artisan}
                  onChange={(e) => handleInputChange('artisan', e.target.value)}
                  placeholder="Enter artisan name"
                  className="border-amber-300 focus:border-red-500"
                />
              </div>
              <div>
                <Label htmlFor="location" className="text-red-800 font-medium">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="Enter location (e.g., Varanasi, Uttar Pradesh)"
                  className="border-amber-300 focus:border-red-500"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Selection */}
        <Card className="border-2 border-amber-200">
          <CardHeader>
            <CardTitle className="text-red-900">Category & Classification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="category" className="text-red-800 font-medium">Category *</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger className="border-amber-300 focus:border-red-500">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="subcategory" className="text-red-800 font-medium">Subcategory</Label>
                <Select value={formData.subcategory} onValueChange={(value) => handleInputChange('subcategory', value)}>
                  <SelectTrigger className="border-amber-300 focus:border-red-500">
                    <SelectValue placeholder="Select subcategory" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedCategory?.subcategories.map((sub) => (
                      <SelectItem key={sub} value={sub}>
                        {sub}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Colors */}
        <Card className="border-2 border-amber-200">
          <CardHeader>
            <CardTitle className="text-red-900">Colors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {formData.colors.map((color) => (
                <Badge key={color} variant="secondary" className="bg-red-100 text-red-800">
                  {color}
                  <button
                    type="button"
                    onClick={() => removeColor(color)}
                    className="ml-2 hover:text-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Select value={newColor} onValueChange={setNewColor}>
                <SelectTrigger className="border-amber-300 focus:border-red-500">
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  {commonColors.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button type="button" onClick={addColor} variant="outline" size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Materials */}
        <Card className="border-2 border-amber-200">
          <CardHeader>
            <CardTitle className="text-red-900">Materials</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {formData.materials.map((material) => (
                <Badge key={material} variant="secondary" className="bg-amber-100 text-amber-800">
                  {material}
                  <button
                    type="button"
                    onClick={() => removeMaterial(material)}
                    className="ml-2 hover:text-amber-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Select value={newMaterial} onValueChange={setNewMaterial}>
                <SelectTrigger className="border-amber-300 focus:border-red-500">
                  <SelectValue placeholder="Select material" />
                </SelectTrigger>
                <SelectContent>
                  {commonMaterials.map((material) => (
                    <SelectItem key={material} value={material}>
                      {material}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button type="button" onClick={addMaterial} variant="outline" size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="border-2 border-amber-200">
          <CardHeader>
            <CardTitle className="text-red-900">Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {formData.features.map((feature) => (
                <Badge key={feature} variant="secondary" className="bg-green-100 text-green-800">
                  {feature}
                  <button
                    type="button"
                    onClick={() => removeFeature(feature)}
                    className="ml-2 hover:text-green-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                placeholder="Enter feature"
                className="border-amber-300 focus:border-red-500"
              />
              <Button type="button" onClick={addFeature} variant="outline" size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Status */}
        <Card className="border-2 border-amber-200">
          <CardHeader>
            <CardTitle className="text-red-900">Product Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.inStock}
                  onChange={(e) => handleInputChange('inStock', e.target.checked)}
                  className="rounded border-amber-300"
                />
                <span className="text-red-800 font-medium">In Stock</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => handleInputChange('featured', e.target.checked)}
                  className="rounded border-amber-300"
                />
                <span className="text-red-800 font-medium">Featured Product</span>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-center pt-6">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-red-800 hover:bg-red-900 text-white px-8 py-3 text-lg font-semibold"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Adding Product...
              </>
            ) : (
              <>
                <Save className="h-5 w-5 mr-2" />
                Add Product
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
