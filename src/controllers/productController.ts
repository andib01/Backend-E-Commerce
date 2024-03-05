import { Product } from '../models/product';

export async function addProduct(productData: Product): Promise<Product> {
  const product = productData;
  return product.save();
}
