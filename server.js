const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("./middleware/logger.js");
dotenv.config({ path: "./config/config.env" });
const connectDB = require("./db");
const bodyParser = require("body-parser");

// router routes import
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const hallRoutes = require("./routes/hall");
const supplyRoutes = require("./routes/supply.js");
// const categoryRoutes = require("./routes/category");
// const categoryRoutes = require("./routes/category");
// const categoryRoutes = require("./routes/category");
const errorHandler = require("./middleware/error.js");
connectDB();

const app = express();
app.use(cors());
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// api handlers
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/hall", hallRoutes);
app.use("/api/v1/supply", supplyRoutes);
// file upload limit
app.use(express.json({ limit: "300mb" }));
app.use(express.urlencoded({ limit: "300mb", extended: true }));
app.use("/uploads", express.static(__dirname + "/public/uploads")); // Serve uploaded files

// global error handler
app.use(errorHandler);

// start Express server
const server = app.listen(
  process.env.PORT,
  console.log(`Express server is running on port ${process.env.PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Unhandled rejection error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
