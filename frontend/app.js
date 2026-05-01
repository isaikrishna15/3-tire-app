const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", async (req, res) => {
  const response = await axios.get("http://backend:3000/items");
  res.send(`<h1>Items</h1><pre>${JSON.stringify(response.data)}</pre>`);
});

app.listen(3001, () => console.log("Frontend running"));
