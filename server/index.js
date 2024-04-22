import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Todo } from "./models/todo.model.js";
const PORT = 3001;
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://piyushraikwar289:piyush289@cluster0.5lpcsrr.mongodb.net/"
);
app.get("/get", (_, res) => {
  Todo.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
app.post("/add", (req, res) => {
  const task = req.body.task;
  Todo.create({
    task,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  Todo.findByIdAndUpdate({ _id: id }, { done: true })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  Todo.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log(`Server is Running of PORT : ${PORT}`);
});
