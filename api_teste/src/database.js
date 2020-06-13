import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/n2020", { useNewUrlParser: true });

module.exports = mongoose;
