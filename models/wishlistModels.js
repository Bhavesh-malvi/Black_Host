const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admins",
  },
});

const Wish = mongoose.model("wishlistdata", wishlistSchema);

module.exports = Wish;