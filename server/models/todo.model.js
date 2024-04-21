import mongoose, { Schema, model } from "mongoose";
const todoSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const Todo = model("Todo", todoSchema);
