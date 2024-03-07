import { ICategory } from '../models/category';

export async function addCategory(productData: ICategory): Promise<ICategory> {
  const product = productData;
  return product.save();
}
