import { Decimal128 } from 'mongodb';
import { Schema, Document, model, SchemaTypes } from 'mongoose';
import { IProduct } from './product';
import { IUser } from './user';

export interface IOrder extends Document {
  products: IProduct[];
  total: Decimal128;
  user: IUser;
  //More fields to be added here later
}

const OrderSchema: Schema = new Schema({
  description: { type: SchemaTypes.Array, required: true },
  userId: SchemaTypes.ObjectId,
  total: {
    type: Schema.Types.Decimal128,
    required: true,
    validate: {
      validator: (v: Decimal128) => parseFloat(v.toString()) >= 0,
      message: (props: { value: number }) => `${props.value} is a negative number`
    }
  }
  //More fields to be added here later
});
const Order = model<IOrder>('Product', OrderSchema);
export default Order;
