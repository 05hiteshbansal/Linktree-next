import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  username: {
    type: String,
     unique: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String
  },
  profileimage: {
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
  },
  colour:{
    type:String,
    default:"#240750"
  },
  imageurl:{
    type:String
  },
  bgstate:{
    type:String,
    default:"colour"
  }
}, {timestamp:true});

export default mongoose.models.userprofiles || mongoose.model("userprofiles" , schema);