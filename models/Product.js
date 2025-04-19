const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Spices', 'Grains', 'Coffee', 'Tea', 'Dairy', 'Meat', 'Vegetables', 'Fruits', 'Beverages', 'Snacks']
  },
  image: {
    type: String,
    required: true
  },
  isEthiopian: {
    type: Boolean,
    default: false
  },
  origin: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true,
    default: 0
  },
  unit: {
    type: String,
    required: true,
    enum: ['kg', 'g', 'piece', 'packet', 'bottle']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema); 