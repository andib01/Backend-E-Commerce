import { Schema, Document, model } from 'mongoose';

export interface user extends Document {
  name: string;
  email: string;
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now()
  }
});

const User = model<user>('User', UserSchema);
export default User;
