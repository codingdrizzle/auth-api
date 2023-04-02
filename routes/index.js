const express = require('express');
const router = express.Router();

//Import routes
const Authentication = require('./authentication')


//User routes
Authentication(router)


module.exports = { router }