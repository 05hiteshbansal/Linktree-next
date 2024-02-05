import mongoose from "mongoose";

const connect =async()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log('DB connected')
    } catch (error) {
        throw new Error(error.message);
    }
}

export default connect