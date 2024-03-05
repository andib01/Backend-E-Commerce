import { Schema, Document, model } from 'mongoose';

export interface Category extends Document {
  name: string;
  description?: string;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: 'This Category has no description' }
});
const Category = model<Category>('Category', CategorySchema);
export default Category;
