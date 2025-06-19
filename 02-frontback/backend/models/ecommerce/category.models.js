import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema); // hamesa capital letter m hi likhna hai.. aur jab ye store mongodb m to mongdb esko khud small m kar k plural bna dega... agar pahle hi plural likh denge to fir se s lga k plural nhi banega
