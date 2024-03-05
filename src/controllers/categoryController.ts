import { Category } from '../models/category';

export async function addCategory(productData: Category): Promise<Category> {
  const product = productData;
  return product.save();
}
