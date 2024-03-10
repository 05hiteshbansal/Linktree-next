import { v2 as cloudinary } from "cloudinary";
 
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.UPLOAD_APIKEY,
  api_secret: process.env.UPLOAD_APISECRET,
});
 
export async function POST(req, res) {

console.log(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ,process.env.UPLOAD_APIKEY , process.env.UPLOAD_APISECRET )


  const { paramsToSign } = req.body;
 console.log(paramsToSign , 1);
  const signature = cloudinary.utils.api_sign_request(paramsToSign, process.env.CLOUDINARY_API_SECRET);
 
  res.status(200).json({ signature });
}