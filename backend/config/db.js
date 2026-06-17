const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER || "appuser",
  host: process.env.DB_HOST || "postgres",
  database: process.env.DB_NAME || "appdb",
  password: process.env.DB_PASSWORD || "apppassword",
  port: process.env.DB_PORT || 5432,
});

module.exports = pool;