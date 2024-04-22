import mongoose, { Schema, model } from "mongoose";
const todoSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export const Todo = model("Todo", todoSchema);
