var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('projects',
  {title: 'Patrice Prosper',
   pageId: 'Projects',
  env:
  JSON.stringify
  (process.env.NODE_ENV)
});
});

module.exports = router;
