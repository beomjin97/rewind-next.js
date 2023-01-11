import { model, Schema } from "mongoose";
import { user } from "../type";

const userSchema = new Schema<user>({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  following: {
    type: [Schema.Types.ObjectId],
    ref: "User",
  },
  followedBy: {
    type: [Schema.Types.ObjectId],
    ref: "User",
  },
  likes: {
    type: [Schema.Types.ObjectId],
    ref: "Post",
  },
});

const User = model("User", userSchema);
export default User;
