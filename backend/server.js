const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const errorHandler = require("./middleware/errorHandler");

const cors = require("cors");

const healthRoutes = require("./routes/health");
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,               // 100 requests
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
});

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(limiter);

app.use("/health", healthRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("AWS Three-Tier Backend is running");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});