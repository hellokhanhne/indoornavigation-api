const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  nodes: Array,
  records: Array,
});

module.exports = mongoose.model("data", DataSchema);
