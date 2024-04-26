// productController.js

const Product = require('../model/ProductSchema');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()

    res.json(products);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message });
  }
};
