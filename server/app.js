const express = require("express");
const userRouter = require("./src/routes/user.route");

const app = express();

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/users", userRouter);

module.exports = app;
