import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { AuthController } from './routes/Auth.js';

dotenv.config();

const app = express();
const db = mongoose.connect(process.env.MONGO_URI);
if (db) {
    console.log("Database connection established");
} else {
    console.log("error in connectionto Mongoose");
    process.exit(1);
}

app.use(express.json());

app.use("/api/auth" , AuthController);

app.listen(3000 , (req,res)=>{
    console.log('Server running on port 3000');
})