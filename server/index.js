import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Todo } from "./models/tood.model.js";

const PORT = 3001;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://piyushraikwar289:piyush289@cluster0.5lpcsrr.mongodb.net/"
);

app.post("/add", (req, res) => {
  Todo.create({ task: req.body.task })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err.message));
});

app.get("/get", (_, res) => {
  Todo.find()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err.message));
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
