const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');
const ParserError = require('../middlewares/parser');

let Router = (app) => {
  // set lang to all routes and handle errors
  app.use(ParserError);
  // user routes
  app.use('/user', Controllers.User);

  //404 Route (ALWAYS Keep this as the last route)
  app.use((req, res) =>{
    res.status(404).send({ code: 404, success: false, key: true, message: req.ts('notFound') });
  });
};

module.exports = Router;
