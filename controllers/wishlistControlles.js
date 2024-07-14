const Wish = require("../models/wishlistModels");

const addwishlist = async (req, res) => {
  console.log(req.body);

  console.log(req.params);

  const id = req.params.id;

  const WishlistAdded = await Wish({
    item: id,
  });

  await WishlistAdded.save();

  res.json({
    message: WishlistAdded,
    status: true,
  });
};

const getwishlist = async (req, res) => {
  const WishlistItems = await Wish.find().populate("item");
  console.log(WishlistItems)

  res.json({
    message: WishlistItems,
    status: true,
  });
};



const removewishlist = async (req, res) => {
  console.log(req.params);
  id = req.params.id;

  console.log("delete", id);
  const Wishesremoved = await Wish.deleteOne({ _id : id });

  console.log(Wishesremoved)

  res.json({
    status: true,
  });
};





const totalUniquewishes = async (req, res) => {

    const uniqueWishesCount = await Wish.distinct('item').countDocuments();

    res.json({ 
        totalUniqueWishes: uniqueWishesCount
    });

};

module.exports = { addwishlist, getwishlist, removewishlist, totalUniquewishes };