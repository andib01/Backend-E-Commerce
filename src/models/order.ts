import { Decimal128 } from 'mongodb';
import mongoose, { Schema, Document, model, SchemaTypes } from 'mongoose';
import { Product } from './product';

export interface Order extends Document {
  products: Product[];
  total: Decimal128;
  //More fields to be added here later
}

const OrderSchema: Schema = new Schema({
  description: { type: SchemaTypes.Array, required: true },
  total: {
    type: Schema.Types.Decimal128,
    required: true,
    validate: {
      validator: (v: Decimal128) => parseFloat(v.toString()) >= 0,
      message: (props: any) => `${props.value} is a negative number`
    }
  }
  //More fields to be added here later
});
const Order = model<Product>('Product', OrderSchema);
export default Product;
