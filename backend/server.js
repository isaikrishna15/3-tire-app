const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());

const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "mydb",
  password: "password",
  port: 5432,
});

app.get("/api", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows);
});

app.listen(5000, () => console.log("Backend running"));