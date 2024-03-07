import { ObjectId } from 'mongodb';
import Product, { IProduct } from '../models/product';

export async function addProduct(productData: IProduct): Promise<IProduct> {
  const product = productData;
  return product.save();
}
export async function findProduct(productId: ObjectId): Promise<IProduct | null> {
  const product = await Product.findById(productId);
  if (product) {
    return product;
  } else {
    return null;
  }
}
export async function deleteProduct(productId: ObjectId): Promise<boolean> {
  const product: IProduct | null = await Product.findByIdAndDelete(productId);
  if (product) {
    return true;
  } else {
    return false;
  }
}
