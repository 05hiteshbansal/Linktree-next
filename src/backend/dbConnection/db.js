import mongoose from "mongoose";
// const URI = process.env.NEXT_PUBLIC_MONGODB_URI;

// let cached = global.mongoose || {con:null , promise:null};


//  const Connect = async () => {
//     if (cached.con) return cached.con;
//     if (!URI) throw new Error("URI empty!!!");
  
//     cached.promise =
//       cached.promise ||
//       mongoose.connect(URI,{
//         dbName: "Linktree",
//         bufferCommands: false
//       });
//     cached.con = await cached.promise;
//     return cached.con;
//   };

//export default Connect



const connect =async()=>{
    try {
       await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
        console.log('DB connected ')
    } catch (error) {
        console.log(error.message);
    }
}

 export default connect