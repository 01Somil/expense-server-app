const express = require('express');
const { registerUser,fetchusersController } = require('../../controllers/users/userController');
const userRoute=express.Router();
userRoute.post("/register",registerUser);
userRoute.get("/",fetchusersController)
module.exports =userRoute;