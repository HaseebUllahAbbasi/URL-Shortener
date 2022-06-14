const mongoose = require("mongoose");
const shortId = require("shortid");
const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: [true, "please enter the full url"],
  },
  short: {
    type: String,
    required: [true, "please enter the short url"],
    default: shortId.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("ShortUrl", shortUrlSchema);
