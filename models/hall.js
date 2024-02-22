const mongoose = require("mongoose");
const { Schema } = mongoose;

const hallSchema = new Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  price: {
    type: String,
  },
  phone: {
    type: String,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
  photos: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Hall", hallSchema);
