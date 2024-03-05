import { Decimal128 } from 'mongodb';
import Product from '../models/product';
import { addProduct } from '../controllers/productController';

const product = new Product({ name: 'TestProduct', price: Decimal128.fromString('123'), category: 'TestCategory ' });

export default function addTest() {
  addProduct(product);
}
