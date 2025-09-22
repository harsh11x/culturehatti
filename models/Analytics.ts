import mongoose, { Schema, Document } from 'mongoose'

export interface IAnalytics extends Document {
  date: Date
  orders: number
  revenue: number
  products: number
  customers: number
  createdAt: Date
  updatedAt: Date
}

const AnalyticsSchema = new Schema<IAnalytics>({
  date: { type: Date, required: true },
  orders: { type: Number, default: 0 },
  revenue: { type: Number, default: 0 },
  products: { type: Number, default: 0 },
  customers: { type: Number, default: 0 }
}, {
  timestamps: true
})

export default mongoose.models.Analytics || mongoose.model<IAnalytics>('Analytics', AnalyticsSchema)
