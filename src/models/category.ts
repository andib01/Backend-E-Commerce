import { Schema, Document, model } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  description?: string;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: 'This Category has no description' }
});
const Category = model<ICategory>('Category', CategorySchema);
export default Category;
