const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Brand model
const BrandSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: 1,
    maxlength: 100
  }
});

module.exports = Brand = mongoose.model("brand", BrandSchema);
