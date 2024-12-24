import express from 'express';
import { loginUser } from '../controller/AuthController.js';

const router = express.Router();

router.post("/signin" , loginUser)


export {router as AuthController}

