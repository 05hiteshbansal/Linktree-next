
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    min:1
  },
  email: {
    type: String,
    required: true,
  }

} , {timestamp:true});

export default  mongoose.models || mongoose.model("UserInfo" , schema);

