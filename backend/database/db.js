import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const username=process.env.MONGO_DB_USERNAME;
const password=process.env.MONGO_DB_PASSWORD;
const url=process.env.MONGO_DB_URL;
const dbName=process.env.DATABASENAME;
const database=()=>{
mongoose.connect(`mongodb+srv://${username}:${password}@${url}/${dbName}?retryWrites=true&w=majority`).then(()=>console.log("mongodb connected")).catch((err)=>
console.error(err));
};
export default database;