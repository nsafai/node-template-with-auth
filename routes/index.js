var express = require('express');
var router = express.Router();
const User = require('../models/user');

// set layout variables
router.use(function(req, res, next) {
  // set website title
  res.locals.title = "Template Website";
  // so we can check if user is logged in
  res.locals.user = req.session.user;
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Template Website',
    user: res.locals.user
  });
});

module.exports = router;
