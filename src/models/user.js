import mongoose from 'mongoose';

const schema = mongoose.Schema(
  {
    userName: {
      type: String,
      default: "",
    },
    userMood: {
      type: String,
      enum: ["1", "2","3","4","5"]
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    }
  },
  { versionKey: false, timestamps: true }
);

export const User = mongoose.model("users", schema);