const express = require("express");
const { register } = require("../controllers/register.controller");

const registerRouter = express.Router();

registerRouter.post("/register", register);

module.exports = {
  registerRouter
};
