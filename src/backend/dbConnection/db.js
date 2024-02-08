import mongoose from "mongoose";

const connect =async()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log('DB connected ')
    } catch (error) {
        console.log(error.message);
    }
}

export default connect