const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Product Schema
const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: 1
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    slashPrice: {
      type: Number,
      required: true
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "brand"
    },
    available: {
      type: Boolean,
      required: true
    },
    color: {
      type: String
    },
    size: {
      type: Number,
      required: true
    },
    sold: {
      type: Number,
      default: 0
    },
    publish: {
      type: Boolean,
      required: true
    },
    images: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

module.exports = Product = mongoose.model("product", ProductSchema);
