const express = require("express");
const app = express();
const port = 80;
const Data = require("./model/Data");
const Image = require("./model/Image");
require("./db/index").connect();

const transformString = "/w_64,h_64/a_-90";

app.use(express.json());

app.get("/", (req, res) => {
  return res.json("Webcome API endpoint");
});

app.get("/records", async (req, res) => {
  const d = await Data.findOne();
  return res.status(200).json(d.nodes || []);
});

app.get("/nodes", async (req, res) => {
  const d = await Data.findOne();
  return res.status(200).json(d.nodes || []);
});

app.get("/images", async (req, res) => {
  const d = await Image.find();
  return res.status(200).json(
    d.map((it) => ({
      ...it._doc,
      url: it.url.replace("/upload/", `/upload${transformString}/`),
    }))
  );
});

app.post("/records", async (req, res) => {
  const d = await Data.findOne();
  d.records = req.body;
  await d.save();
  res.status(200).json("update success");
});

app.post("/nodes", async (req, res) => {
  const d = await Data.findOne();
  d.nodes = req.body;
  await d.save();
  res.status(200).json("update success");
});

app.post("/images", async (req, res) => {
  const { label, url } = req.body;
  const c = await Image.count();
  const i = new Image();
  i.id = c + 1;
  i.label = label;
  i.url = url;
  await i.save();
  return res.status(200).json(i);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
