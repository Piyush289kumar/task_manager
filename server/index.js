import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const PORT = 3001;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server On");
});

app.listen(PORT, () => {
  console.log(`Server is Running of PORT : ${PORT}`);
});
