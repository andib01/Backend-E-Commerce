import { Decimal128 } from 'mongodb';
import mongoose, { Schema, Document } from 'mongoose';

export interface Product extends Document {
  name: string;
  description: string;
  price: Decimal128;
  category: string; //TODO #1:
  //More fields to be added here later
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: 'This product has no description' },
  price: { type: String, required: true },
  category: { type: String, required: true }
  //More fields to be added here later
});

export const Product = mongoose.model<Product>('Product', ProductSchema);
