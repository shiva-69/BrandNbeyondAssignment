const express = require("express");
const { register, login, showall } = require("../Handlers/UserHandler");
const UserRouter = express.Router();


UserRouter.post("/register", register);
UserRouter.post("/login", login);
UserRouter.post("/showall", showall);

module.exports = {
    UserRouter
}