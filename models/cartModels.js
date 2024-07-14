const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admins",
  },

  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const Cart = mongoose.model("cartdata", cartSchema);

module.exports = Cart;
