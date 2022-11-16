import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  name: { type: String, required: true },
  category: {
    name: String,
    slug: String,
  },
  brand: {
    name: String,
    slug: String,
  },
  slug: String,
  status: {
    type: Boolean,
    default: false,
  },
  description: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
