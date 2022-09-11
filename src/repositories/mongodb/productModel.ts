import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ProductRepository = mongoose.model('product', Schema, 'products');
export default ProductRepository;
