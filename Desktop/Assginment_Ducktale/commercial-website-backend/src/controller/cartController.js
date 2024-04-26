const Cart = require('../model/CartSchema');
const Product = require('../model/ProductSchema');

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    let cart = await Cart.findOne();
    if (!cart) {
      cart = new Cart({
        products: [],
        couponCode: ''
      });
    }

    const existingProductIndex = cart.products.findIndex(item => item.productId.equals(productId));
    if (existingProductIndex !== -1) {
      cart.products[existingProductIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
