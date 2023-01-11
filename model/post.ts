import { model, Schema } from "mongoose";
import { post } from "../type";

const postSchema = new Schema<post>(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    imgUrl: [String],
    like: {
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
    tags: {
      type: [Schema.Types.ObjectId],
      ref: "Tag",
    },
    comment: {
      type: [Schema.Types.ObjectId],
      ref: "Comment",
    },
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);
export default Post;
