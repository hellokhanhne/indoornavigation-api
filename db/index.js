const mongoose = require("mongoose");

const connect = () => {
  const uri =
    "mongodb+srv://khanhdev:CvxuUswxGpuExbkv@cluster0.vqjd6vg.mongodb.net/indoornavigation?retryWrites=true&w=majority";
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB", error));
};

module.exports = {
  connect,
};
