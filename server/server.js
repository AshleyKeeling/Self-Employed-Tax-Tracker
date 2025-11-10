import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from './routes/user.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// global midleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/api/user', userRoutes);
app.post("/api/test", (req, res) => {
    res.status(200).json({ message: "POST received", body: req.body });
});

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongo connected"))
    .catch(err => console.error(err));

app.get("/", (req, res) => res.send("API running"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));