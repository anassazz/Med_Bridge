import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRoutes from "./routes/userRoutes.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import cloudinary from "cloudinary";
import messageRoutes from "./routes/messageRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
const app = express();

// cloudinary setup
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});