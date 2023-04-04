var mongoose = require("mongoose");

var offerSchema = new mongoose.Schema({
  investor: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  equity: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  comment: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("Offer", offerSchema);
