const express = require('express');
const router = express.Router();

//Import routes
const Authentication = require('./authentication')
const User = require('./user')


//User routes
Authentication(router)
User(router)


module.exports = { router }