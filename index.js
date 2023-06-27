const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.use(express.json());

app.get("/", (req, res) => {
  return res.json("Webcome API endpoint");
});

app.get("/records", (req, res) => {
  if (!fs.existsSync("records.json")) {
    return res.status(200).json([]);
  }

  const jsonString = fs.readFileSync("records.json", "utf-8");
  const items = JSON.parse(jsonString);
  res.status(200).json(items);
});

app.get("/nodes", (req, res) => {
  if (!fs.existsSync("nodes.json")) {
    return res.status(200).json([]);
  }

  const jsonString = fs.readFileSync("nodes.json", "utf-8");
  const items = JSON.parse(jsonString);
  res.status(200).json(items);
});

app.post("/records", (req, res) => {
  const json = JSON.stringify(req.body);

  if (!fs.existsSync("records.json")) {
    fs.writeFileSync("records.json", "");
  }

  fs.writeFileSync("records.json", json);
  res.status(200).json("update success");
});

app.post("/nodes", (req, res) => {
  console.log(req.body);
  const json = JSON.stringify(req.body);

  if (!fs.existsSync("nodes.json")) {
    fs.writeFileSync("nodes.json", "");
  }

  fs.writeFileSync("nodes.json", json);
  res.status(200).json("update success");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
