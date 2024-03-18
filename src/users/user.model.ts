import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
});

export interface User extends mongoose.Document {
  firstname: string,
  lastname: string,
  password: string
}