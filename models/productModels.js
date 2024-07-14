const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  title: String,
  offer: String,
  price: String,
  category: String,
  discription: String,
  about: String,
  image: {
    data: Buffer,
    contentType: String,
  },
  image1: {
    data: Buffer,
    contentType: String,
  },
  image2: {
    data: Buffer,
    contentType: String,
  },
});

const Admin = mongoose.model("admins", adminSchema);

module.exports = Admin;
