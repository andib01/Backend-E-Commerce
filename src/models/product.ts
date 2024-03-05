import { Decimal128 } from 'mongodb';
import { Schema, Document, model, SchemaTypes } from 'mongoose';

export interface Product extends Document {
  name: string;
  description?: string;
  price: Decimal128;
  category: string; //TODO #1:
  //More fields to be added here later
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: 'This product has no description' },
  price: {
    type: SchemaTypes.Decimal128,
    required: true,
    validate: {
      validator: (v: Decimal128) => parseFloat(v.toString()) >= 0,
      message: (props: { value: number }) => `${props.value} is a negative number`
    }
  },
  category: { type: SchemaTypes.ObjectId, required: true, ref: 'Category' }
  //More fields to be added here later
});
const Product = model<Product>('Product', ProductSchema);
export default Product;
