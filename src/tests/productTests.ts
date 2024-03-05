import { Decimal128 } from 'mongodb';
import Product from '../models/product.js';
import { addProduct } from '../controllers/productController.js';
import Category from '../models/category.js';
import { addCategory } from '../controllers/categoryController.js';

async function addTest() {
  try {
    const category = new Category({ name: 'TestCategory' });
    await addCategory(category);
    const categoryId = category._id;
    const product = new Product({ name: 'TestProduct', price: Decimal128.fromString('123'), category: categoryId });
    await addProduct(product);

    console.log('Product added successfully!');
  } catch (error) {
    console.error('Error adding product:', error);
  }
}

export default addTest;
