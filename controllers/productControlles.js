const Admin = require("../models/productModels");
const fs = require("fs");

const adminUser = async (req, res) => {
  console.log(req.files);
  console.log(req.body);
  const { title, offer, price, category, discription, about } = req.body;

  const admin = await Admin({
    image: {
      data: fs.readFileSync("images/" + req.files["image"][0].filename),
      contentType: "images/",
    },

    image1: {
      data: fs.readFileSync("images/" + req.files["image1"][0].filename),
      contentType: "images/",
    },

    image2: {
      data: fs.readFileSync("images/" + req.files["image2"][0].filename),
      contentType: "images/",
    },

    title,
    offer,
    price,
    category,
    discription,
    about,
  });

  await admin.save();

  res.json({
    message: admin,
    status: true,
  });
};

const getDataUser = async (req, res) => {
  const products = await Admin.find({});

  res.json({
    allproducts: products,
    status: true,
  });
};

const deleteProduct = async (req, res) => {
  console.log(req.params);
  id = req.params.id;

  const products = await Admin.deleteOne({ _id: id });

  res.json({
    status: true,
  });
};




const updateProduct = async (req, res) => {
  console.log(req.params);
  const updatedProduct = await Admin.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  console.log(updatedProduct);
  res.status(201).json({
    status: true,
    result: updatedProduct,
  });
};




const moreProduct = async (req, res) => {
  console.log("moreid", req.params);
  const moreProduct = await Admin.findById(req.params.id);
  console.log(moreProduct);

  res.status(201).json({
    status: true,
    result: moreProduct,
  });
};



const categoryProduct = async (req, res) => {
  console.log("morecategory", req.params);
  const categoryProduct = await Admin.find({category: req.params.category});
  console.log(categoryProduct);

  res.status(201).json({
    status: true,
    result: categoryProduct,
  });
};



module.exports = {
  adminUser,
  getDataUser,
  deleteProduct,
  updateProduct,
  moreProduct,
  categoryProduct,
};
