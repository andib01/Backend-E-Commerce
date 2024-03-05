import { Decimal128 } from 'mongodb';
import Product from '../models/product.js';
import { addProduct } from '../controllers/productController.js';
import Category from '../models/category.js';
import { addCategory } from '../controllers/categoryController.js';

async function addTest() {
  try {
    // Create a new category
    const category = new Category({ name: 'TestCategory' });

    // Save the category to the database
    await addCategory(category);

    // Retrieve the _id of the newly created category
    const categoryId = category._id;

    // Create a new product with the category _id
    const product = new Product({ name: 'TestProduct', price: Decimal128.fromString('123'), category: categoryId });

    // Add the product to the database
    await addProduct(product);

    console.log('Product added successfully!');
  } catch (error) {
    console.error('Error adding product:', error);
  }
}

export default addTest;
