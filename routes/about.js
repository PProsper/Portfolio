var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about',
  {title: 'Patrice Prosper',
   pageId: 'About',
  env:
  JSON.stringify
  (process.env.NODE_ENV)
});
});

module.exports = router;
