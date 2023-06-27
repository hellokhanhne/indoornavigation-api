const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.use(express.json());

app.get("/", (req, res) => {
  return res.json("ok");
});

app.get("/treenodes", (req, res) => {
  if (!fs.existsSync("treenodes.json")) {
    return res.status(200).json([]);
  }
  // Read the file contents as a string
  const jsonString = fs.readFileSync("treenodes.json", "utf-8");

  // Parse the JSON string into a JavaScript object
  const items = JSON.parse(jsonString);
  res.status(200).json(items);
});

app.get("/nodes", (req, res) => {
  if (!fs.existsSync("nodes.json")) {
    return res.status(200).json([]);
  }
  // Read the file contents as a string
  const jsonString = fs.readFileSync("nodes.json", "utf-8");

  // Parse the JSON string into a JavaScript object
  const items = JSON.parse(jsonString);
  res.status(200).json(items);
});

app.post("/treenodes", (req, res) => {
  // Convert the array to a JSON string
  const json = JSON.stringify(req.body);

  // Check if the file exists, and create it if it does not
  if (!fs.existsSync("treenodes.json")) {
    fs.writeFileSync("treenodes.json", "");
  }

  // Write the JSON string to the file
  fs.writeFileSync("treenodes.json", json);
  res.status(200).json("update success");
});

app.post("/nodes", (req, res) => {
  // Convert the array to a JSON string
  console.log(req.body);
  const json = JSON.stringify(req.body);

  // Check if the file exists, and create it if it does not
  if (!fs.existsSync("nodes.json")) {
    fs.writeFileSync("nodes.json", "");
  }

  // Write the JSON string to the file
  fs.writeFileSync("nodes.json", json);
  res.status(200).json("update success");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
