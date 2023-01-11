import mongoose from "mongoose";

const connect = () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  mongoose.set("strictQuery", true);

  const username = encodeURIComponent(process.env.MONGO_USERNAME ?? "");
  const password = encodeURIComponent(process.env.MONGO_PASSWORD ?? "");
  const uri = `mongodb+srv://${username}:${password}@cluster0.jv9pc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  mongoose.connect(uri, { dbName: "rewind-next" }, (err) => {
    if (err) {
      console.log("mongoDB connection error", err);
    } else {
      console.log("mongoDB connect success");
    }
  });
};

export default connect;
