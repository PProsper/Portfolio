var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact',
  {title: 'Patrice Prosper',
     pageId: 'Contact',
  env:
  JSON.stringify
  (process.env.NODE_ENV)
});
});

module.exports = router;
