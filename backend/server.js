import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`server is runnug on port ${port}`)
})



















// mongodb+srv://mausamkkushwaha_db_user:<db_password>@cluster0.79qtqnf.mongodb.net/