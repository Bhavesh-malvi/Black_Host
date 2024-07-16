const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");                   
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv")

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

const corsOptions1 = {
  origin1: "http://localhost:3001",
  optionsSuccessStatus1: 400,
};

const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "images/");
  },
  filename: function (req, file, cd) {
    cd(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors({ corsOptions, corsOptions1 }));
dotenv.config()
// app.use(cors(corsOptions1));

const cpUpload = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "image1", maxCount: 1 },
  { name: "image2", maxCount: 1 },
]);

app.use("/users", cpUpload, require("./routes/productRoutes"));
app.use("/carts", require("./routes/cartRoutes"));
app.use("/wishes", require("./routes/wishlistRoutes"));


// const port = process.env.PORT;
// const url = process.env.Database_URL

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/AdminData");
}

app.listen(8000, () => {
  console.log("server is created");
});
