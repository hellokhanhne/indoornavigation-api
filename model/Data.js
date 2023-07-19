const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Data = new Schema({
  nodes: Array,
  records: Array,
});

module.exports = mongoose.model("data", Data);
