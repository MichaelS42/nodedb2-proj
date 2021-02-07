const express = require("express");
const carsRouter = require("./cars/cars-router");

const server = express();

server.use(express.json());
server.use("/api/cars", carsRouter);

// server.get("/", (req, res) => {
//   res.status(200);
// });

// server.use((error, req, res, next) => {
//   const statusCode = error.statusCode || 500;
//   res.status(statusCode).json({ message: error.message, stack: error.stack });
// });

module.exports = server;
