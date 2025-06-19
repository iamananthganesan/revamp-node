const express = require("express");
const { login, refreshToken } = require("../controllers/login.controller");

const loginRouter = express.Router();

loginRouter.post("/login", login);

loginRouter.post("/refresh", refreshToken);

module.exports = {
  loginRouter,
};
