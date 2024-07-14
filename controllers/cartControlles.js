const Cart = require("../models/cartModels");

const cartProduct = async (req, res) => {
  console.log(req.body);

  console.log(req.params);

  const id = req.params.id;

  const cartAdded = await Cart({
    item: id,
  });

  await cartAdded.save();

  res.json({
    message: cartAdded,
    status: true,
  });
};

const getcart = async (req, res) => {
  const cartItems = await Cart.find().populate("item");
  console.log(cartItems)

  res.json({
    message: cartItems,
    status: true,
  });
};



const removecart = async (req, res) => {
  console.log(req.params);
  id = req.params.id;

  console.log("delete", id);
  const cartsremoved = await Cart.deleteOne({ _id : id });

  console.log(cartsremoved)

  res.json({
    status: true,
  });
};



const updateItemQuantity = async (req, res) => {

    const { id, quantity } = req.body;
    if (quantity < 1) {
      return res.json({
        error: 'Quantity must be at least 1' 
      });
    }

    const cartItem = await Cart.findById(id);

    cartItem.quantity = quantity;

    await cartItem.save();
    
    res.json({
      message: 'Item quantity updated' 
    });
  
};



const totalUniqueItems = async (req, res) => {

    const uniqueItemsCount = await Cart.distinct('item').countDocuments();

    res.json({ 
      totalUniqueItems: uniqueItemsCount
    });

};

module.exports = { cartProduct, getcart, removecart , updateItemQuantity, totalUniqueItems };
