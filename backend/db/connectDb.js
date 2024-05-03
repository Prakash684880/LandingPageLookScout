const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const dbUrl = process.env.MONGODB_URL; 
    await mongoose.connect(dbUrl)
    console.log("Connected to database");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); 
  }
};

module.exports = connectDB;
