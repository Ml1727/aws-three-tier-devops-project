const express = require("express");
const healthRoutes = require("./routes/health");
const userRoutes = require("./routes/users");


const app = express();

app.use(express.json());
app.use("/health", healthRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("AWS Three-Tier Backend is running");
});



const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});