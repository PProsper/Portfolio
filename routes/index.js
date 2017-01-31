var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Patrice Prosper', env: JSON.stringify(process.env.NODE_ENV) });
});

module.exports = router;
