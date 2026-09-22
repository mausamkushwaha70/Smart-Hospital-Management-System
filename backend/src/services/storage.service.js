import dotenv from "dotenv"
dotenv.config()
import ImageKit from "imagekit"
import { asyncHandler } from "../middlewares/asyncHandler";


const storageInstace = new ImageKit({
    publicKey,
    privateKey,
    urlEndpoint
})
export const sendfile = asyncHandler(async(req, res)=>{
    let obj = {
        file,
        filename,
        folder:"TMS"
    }
    return storageInstace.upload(obj)
})