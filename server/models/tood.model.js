import mongoose, { Schema, model } from "mongoose";

const todoSchema = new Schema(
  {
    task: {
      type: String,
      require: true,
    },

    isTaskDone: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Todo = model("Todo", todoSchema);
