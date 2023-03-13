import { Schema, model } from 'mongoose';

export interface IUser {
  _id: string;
  name: string;
  username: string;
  addedAt: Date;
}

const userSchema = new Schema<IUser>({
  _id: String,
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  addedAt: {
    type: Date,
    required: true,
  },
});

const UserModel = model<IUser>('User', userSchema);

export default UserModel;