const pool = require("../config/db");

async function getAllUsers() {
  const result = await pool.query("SELECT * FROM users ORDER BY id ASC");
  return result.rows;
}

async function createUser(userData) {
  const result = await pool.query(
    "INSERT INTO users (name, role) VALUES ($1, $2) RETURNING *",
    [userData.name, userData.role]
  );

  return result.rows[0];
}

async function updateUser(id, userData) {
  const result = await pool.query(
    "UPDATE users SET name = $1, role = $2 WHERE id = $3 RETURNING *",
    [userData.name, userData.role, id]
  );

  return result.rows[0] || null;
}

async function deleteUser(id) {
  const result = await pool.query(
    "DELETE FROM users WHERE id = $1 RETURNING *",
    [id]
  );

  return result.rows[0] || null;
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
};