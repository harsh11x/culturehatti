'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

interface ProductFormProps {
  initialData?: any
  onSuccess?: () => void
  onCancel?: () => void
}

export default function SimpleProductForm({ initialData, onSuccess, onCancel }: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    punjabiName: '',
    description: '',
    punjabiDescription: '',
    price: '',
    category: '',
    subCategory: '',
    colors: '',
    materials: '',
    images: '',
    stock: '',
    sku: '',
    weight: '',
    dimensions: '',
    artisanName: '',
    artisanLocation: '',
    isFeatured: false,
    isActive: true,
  })
  const [loading, setLoading] = useState(false)

  // Define categories and their subcategories
  const categorySubcategories = {
    sarees: [
      'Banarasi Silk',
      'Kanjeevaram',
      'Chanderi Cotton',
      'Tussar Silk',
      'Georgette',
      'Crepe',
      'Net Saree',
      'Designer Saree',
      'Wedding Saree',
      'Party Wear Saree'
    ],
    kurtas: [
      'Cotton Kurta',
      'Silk Kurta',
      'Linen Kurta',
      'Designer Kurta',
      'Wedding Kurta',
      'Casual Kurta',
      'Formal Kurta',
      'Anarkali Kurta',
      'Straight Cut Kurta',
      'A-Line Kurta'
    ],
    suits: [
      'Salwar Kameez',
      'Patiala Suit',
      'Anarkali Suit',
      'Sharara Suit',
      'Gharara Suit',
      'Palazzo Suit',
      'Straight Cut Suit',
      'A-Line Suit',
      'Designer Suit',
      'Wedding Suit',
      'Party Wear Suit',
      'Casual Suit'
    ],
    jewelry: [
      'Finger Rings',
      'Earrings',
      'Bangles',
      'Bracelets',
      'Necklaces',
      'Chains',
      'Pendants',
      'Nose Rings',
      'Toe Rings',
      'Anklets',
      'Hair Accessories',
      'Brooches',
      'Cufflinks',
      'Tikka',
      'Maang Tikka',
      'Jhumka',
      'Chandbali',
      'Stud Earrings',
      'Hoops',
      'Chandelier Earrings'
    ],
    bags: [
      'Sling Bags',
      'Hand Purses',
      'Shoulder Side Bag Purse',
      'Tote Bags',
      'Clutch Bags',
      'Crossbody Bags',
      'Satchel Bags',
      'Hobo Bags',
      'Messenger Bags',
      'Backpack Bags',
      'Evening Bags',
      'Beach Bags',
      'Shopping Bags',
      'Office Bags',
      'Travel Bags',
      'Designer Bags',
      'Leather Bags',
      'Fabric Bags',
      'Embroidered Bags',
      'Traditional Bags'
    ],
    handicrafts: [
      'Home Decor',
      'Brass Items',
      'Traditional Art',
      'Festival Gifts',
      'Wooden Crafts',
      'Metal Crafts',
      'Ceramic Items',
      'Textile Crafts',
      'Jewelry Boxes',
      'Wall Hangings',
      'Sculptures',
      'Pottery',
      'Bamboo Crafts',
      'Stone Crafts',
      'Glass Crafts'
    ],
    kids: [
      'Kids Kurtas',
      'Kids Sarees',
      'Kids Suits',
      'Festival Wear',
      'School Uniforms',
      'Party Dresses',
      'Traditional Toys',
      'Kids Jewelry',
      'Kids Bags',
      'Kids Accessories'
    ]
  }

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || '',
        punjabiName: initialData.punjabiName || '',
        description: initialData.description || '',
        punjabiDescription: initialData.punjabiDescription || '',
        price: initialData.price ? String(initialData.price) : '',
        category: initialData.category || '',
        subCategory: initialData.subCategory || '',
        colors: initialData.colors ? initialData.colors.join(', ') : '',
        materials: initialData.materials ? initialData.materials.join(', ') : '',
        images: initialData.images ? initialData.images.join(', ') : '',
        stock: initialData.stock ? String(initialData.stock) : '',
        sku: initialData.sku || '',
        weight: initialData.weight || '',
        dimensions: initialData.dimensions || '',
        artisanName: initialData.artisanName || '',
        artisanLocation: initialData.artisanLocation || '',
        isFeatured: initialData.isFeatured || false,
        isActive: initialData.isActive || true,
      })
    }
  }, [initialData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    if (name === 'category') {
      // Reset subcategory when category changes
      setFormData(prev => ({ ...prev, [name]: value, subCategory: '' }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const productData = {
        id: initialData?.id || Date.now().toString(),
        name: formData.name,
        punjabiName: formData.punjabiName,
        description: formData.description,
        punjabiDescription: formData.punjabiDescription,
        price: parseFloat(formData.price),
        originalPrice: parseFloat(formData.price),
        category: formData.category as 'sarees' | 'kurtas' | 'suits' | 'jewelry' | 'bags' | 'handicrafts' | 'kids',
        subcategory: formData.subCategory,
        stock: parseInt(formData.stock),
        stockQuantity: parseInt(formData.stock),
        isActive: formData.isActive,
        images: formData.images.split(',').map(s => s.trim()).filter(Boolean),
        sizes: ['S', 'M', 'L', 'XL'], // Default sizes
        colors: formData.colors.split(',').map(s => s.trim()).filter(Boolean),
        createdAt: initialData?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      // For demo purposes, save to localStorage
      const storedProducts = localStorage.getItem('admin-products')
      let products = storedProducts ? JSON.parse(storedProducts) : []
      
      if (initialData) {
        // Update existing product
        products = products.map((p: any) => p.id === initialData.id ? productData : p)
      } else {
        // Add new product
        products.push(productData)
      }
      
      localStorage.setItem('admin-products', JSON.stringify(products))
      
      toast.success(`Product ${initialData ? 'updated' : 'added'} successfully!`)
      if (onSuccess) {
        onSuccess()
      }
      if (!initialData) {
        // Clear form for new product
        setFormData({
          name: '', punjabiName: '', description: '', punjabiDescription: '', price: '', category: '', subCategory: '',
          colors: '', materials: '', images: '', stock: '', sku: '', weight: '', dimensions: '',
          artisanName: '', artisanLocation: '', isFeatured: false, isActive: true,
        })
      }
    } catch (error: any) {
      console.error(`Error ${initialData ? 'updating' : 'adding'} product:`, error)
      toast.error(error.message || `Failed to ${initialData ? 'update' : 'add'} product`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-red-900 mb-6">
        {initialData ? 'Edit Product' : 'Add New Product'}
      </h2>

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="text-red-800">Product Name (English)</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="punjabiName" className="text-red-800">Product Name (Punjabi)</Label>
          <Input id="punjabiName" name="punjabiName" value={formData.punjabiName} onChange={handleChange} />
        </div>
      </div>

      <div>
        <Label htmlFor="description" className="text-red-800">Description (English)</Label>
        <Textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={4} />
      </div>
      <div>
        <Label htmlFor="punjabiDescription" className="text-red-800">Description (Punjabi)</Label>
        <Textarea id="punjabiDescription" name="punjabiDescription" value={formData.punjabiDescription} onChange={handleChange} rows={4} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="price" className="text-red-800">Price (INR)</Label>
          <Input id="price" name="price" type="number" value={formData.price} onChange={handleChange} required step="0.01" />
        </div>
        <div>
          <Label htmlFor="stock" className="text-red-800">Stock Quantity</Label>
          <Input id="stock" name="stock" type="number" value={formData.stock} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="sku" className="text-red-800">SKU</Label>
          <Input id="sku" name="sku" value={formData.sku} onChange={handleChange} />
        </div>
      </div>

      {/* Categorization */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="category" className="text-red-800">Category</Label>
          <Select name="category" value={formData.category} onValueChange={(value) => handleSelectChange('category', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sarees">साड़ी | Sarees</SelectItem>
              <SelectItem value="kurtas">कुर्ता | Kurtas</SelectItem>
              <SelectItem value="suits">सूट | Suits</SelectItem>
              <SelectItem value="jewelry">आभूषण | Jewelry</SelectItem>
              <SelectItem value="bags">थैले | Bags</SelectItem>
              <SelectItem value="handicrafts">हस्तशिल्प | Handicrafts</SelectItem>
              <SelectItem value="kids">बच्चों के कपड़े | Kids</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="subCategory" className="text-red-800">Sub-Category</Label>
          <Select 
            name="subCategory" 
            value={formData.subCategory} 
            onValueChange={(value) => handleSelectChange('subCategory', value)}
            disabled={!formData.category}
          >
            <SelectTrigger>
              <SelectValue placeholder={formData.category ? "Select Sub-Category" : "First select a category"} />
            </SelectTrigger>
            <SelectContent>
              {formData.category && categorySubcategories[formData.category as keyof typeof categorySubcategories]?.map((subcategory) => (
                <SelectItem key={subcategory} value={subcategory}>
                  {subcategory}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Attributes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="colors" className="text-red-800">Colors (comma-separated)</Label>
          <Input id="colors" name="colors" value={formData.colors} onChange={handleChange} placeholder="e.g., Red, Blue, Green" />
        </div>
        <div>
          <Label htmlFor="materials" className="text-red-800">Materials (comma-separated)</Label>
          <Input id="materials" name="materials" value={formData.materials} onChange={handleChange} placeholder="e.g., Silk, Cotton, Gold" />
        </div>
      </div>

      {/* Images */}
      <div>
        <Label htmlFor="images" className="text-red-800">Image URLs (comma-separated)</Label>
        <Textarea id="images" name="images" value={formData.images} onChange={handleChange} rows={3} placeholder="e.g., url1.jpg, url2.png" />
      </div>

      {/* Shipping & Artisan Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="weight" className="text-red-800">Weight (kg)</Label>
          <Input id="weight" name="weight" value={formData.weight} onChange={handleChange} placeholder="e.g., 0.5" />
        </div>
        <div>
          <Label htmlFor="dimensions" className="text-red-800">Dimensions (LxWxH cm)</Label>
          <Input id="dimensions" name="dimensions" value={formData.dimensions} onChange={handleChange} placeholder="e.g., 30x20x5" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="artisanName" className="text-red-800">Artisan Name</Label>
          <Input id="artisanName" name="artisanName" value={formData.artisanName} onChange={handleChange} placeholder="e.g., Master Weaver Collective" />
        </div>
        <div>
          <Label htmlFor="artisanLocation" className="text-red-800">Artisan Location</Label>
          <Input id="artisanLocation" name="artisanLocation" value={formData.artisanLocation} onChange={handleChange} placeholder="e.g., Varanasi, Uttar Pradesh" />
        </div>
      </div>

      {/* Status & Features */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="isFeatured" name="isFeatured" checked={formData.isFeatured} onCheckedChange={(checked) => handleSelectChange('isFeatured', String(checked))} />
          <Label htmlFor="isFeatured" className="text-red-800">Featured Product</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="isActive" name="isActive" checked={formData.isActive} onCheckedChange={(checked) => handleSelectChange('isActive', String(checked))} />
          <Label htmlFor="isActive" className="text-red-800">Active</Label>
        </div>
      </div>

      <div className="flex gap-4">
        <Button type="submit" className="flex-1 bg-red-800 hover:bg-red-900 text-white" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {initialData ? 'Update Product' : 'Add Product'}
        </Button>
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
            Cancel
          </Button>
        )}
      </div>
    </form>
  )
}
