// cartModel.js

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  products: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: Number
  }],
  couponCode: String
});

module.exports = mongoose.model('Cart', cartSchema);
