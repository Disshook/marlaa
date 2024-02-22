const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  hall: {
    type: mongoose.Types.ObjectId,
    ref: "Hall",
  },
  day: {
    type: String,
  },
  duration: {
    type: Date,
  },
  phone: {
    type: String,
  },
  paid: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
