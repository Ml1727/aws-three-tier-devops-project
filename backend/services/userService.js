let users = [
  {
    id: 1,
    name: "Admin User",
    role: "DevOps Engineer"
  },
  {
    id: 2,
    name: "Cloud User",
    role: "AWS Engineer"
  }
];

function getAllUsers() {
  return users;
}

function createUser(userData) {
  const newUser = {
    id: users.length + 1,
    name: userData.name,
    role: userData.role
  };

  users.push(newUser);
  return newUser;
}

function updateUser(id, userData) {
  const user = users.find((u) => u.id === id);

  if (!user) {
    return null;
  }

  user.name = userData.name;
  user.role = userData.role;

  return user;
}

function deleteUser(id) {
  const userExists = users.some((u) => u.id === id);

  if (!userExists) {
    return false;
  }

  users = users.filter((u) => u.id !== id);
  return true;
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
};