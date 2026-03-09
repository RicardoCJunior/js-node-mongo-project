const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  productId: Number,
  quantity: Number,
  price: Number
});

const OrderSchema = new mongoose.Schema({
  orderId: String,
  value: Number,
  creationDate: Date,
  items: [ItemSchema]
});

module.exports = mongoose.model("Order", OrderSchema);
