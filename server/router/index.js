const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');

let Router = (app) =>{
  // user routes
  app.use('/user', Controllers.User);
};

module.exports = Router;
