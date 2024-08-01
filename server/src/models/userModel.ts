import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String, unique: true},
  password: {type: String}
})


export interface IUser extends mongoose.Document {
  id: string;
  name: string;
  email: string;
  password: string;
}

export default mongoose.model<IUser>('User', UserSchema);

