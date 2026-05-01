const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", async (req, res) => {
  const response = await axios.get("http://backend:5000/items");
  res.send(`<h1>Items</h1><pre>${JSON.stringify(response.data)}</pre>`);
});

app.listen(9000, () => console.log("Frontend running"));
