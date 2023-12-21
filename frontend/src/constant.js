import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errrorMiddleware.js";
const port = process.env.PORT || 5000;

connectDB(); //connect to the MongoDB

const app = express();
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);
// listening port 5000
app.listen(port, () => console.log(`Server running on port ${port}`));
