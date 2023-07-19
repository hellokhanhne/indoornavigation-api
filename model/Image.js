const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Image = new Schema({
  id: String,
  url: String,
  label: String,
});

module.exports = mongoose.model("image", Image);
