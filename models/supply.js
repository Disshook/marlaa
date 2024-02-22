const mongoose = require("mongoose");
const { Schema } = mongoose;

const supplySchema = new Schema({
  name: {
    type: String,
  },
  quantity: {
    type: String,
  },
  hall: {
    type: mongoose.Types.ObjectId,
    ref: "Hall",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Supply", supplySchema);
