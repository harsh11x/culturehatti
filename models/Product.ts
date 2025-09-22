import mongoose, { Schema, Document } from 'mongoose'

export interface IProduct extends Document {
  name: string
  description: string
  price: number
  category: string
  subcategory?: string
  images: string[]
  colors: string[]
  materials: string[]
  features: string[]
  artisan?: string
  location?: string
  inStock: boolean
  featured: boolean
  createdAt: Date
  updatedAt: Date
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { 
    type: String, 
    enum: ['sarees', 'kurtas', 'jewelry', 'handicrafts', 'kids'],
    required: true
  },
  subcategory: { type: String },
  images: [{ type: String }],
  colors: [{ type: String }],
  materials: [{ type: String }],
  features: [{ type: String }],
  artisan: { type: String },
  location: { type: String },
  inStock: { type: Boolean, default: true },
  featured: { type: Boolean, default: false }
}, {
  timestamps: true
})

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema)
