import express from "express";
import mongoose from "mongoose";
import Users from "./Users.model.js";
import { createServer } from "http";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const httpServer = createServer(app);

const con = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.log(error);
  }
};
app.get("/users", async (req, res) => {
  try {
    const users = await Users.find();
    console.log(users);
    
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

con()

httpServer.listen(3000, () => {
  console.log(" Server running on http://localhost:3000");
});
