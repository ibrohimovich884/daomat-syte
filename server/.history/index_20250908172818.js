import express from "express";
import mongoose from "mongoose";
import Users from "./Users.model.js";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

const con = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/social");
  } catch (error) {
    console.log(error);
  }
};
EAClWupEcjHbzadw
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
