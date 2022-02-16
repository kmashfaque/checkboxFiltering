import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";
import router from "./routes/productRoute.js";

connectDB();

const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/v1/products", router);

//Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
