const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    email: String,
    category: String,
    message: String,
    option: Boolean,
    phoneNumber: Number,
  },
  {
    timestamps: true,
  }
);

const ContactModel = mongoose.model("contact", ContactSchema);

module.exports = ContactModel;
