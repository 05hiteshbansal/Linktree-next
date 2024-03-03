import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  url: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  urlimage: {
    type: String,
  },
  bio: {
    type: String,
  },
  location: {
    type: String,
  },
  socialLinks:{
    type:Array
  }
}, {timestamp:true});
export default  mongoose.models.userprofiles || mongoose.model("userprofiles" , schema);