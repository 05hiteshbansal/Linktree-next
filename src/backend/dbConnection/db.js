import mongoose from "mongoose";

const connect =async()=>{
    try {
       await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
        console.log('DB connected ')
    } catch (error) {
        console.log(error.message);
    }
}

export default connect