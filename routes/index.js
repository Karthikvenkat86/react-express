var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Main' });
});

router.get('/google', function(req, res) {
  res.render('googleIndex', { title: 'Main' });
});


router.get('/windows', function(req, res) {
  res.render('microsoftIndex', { title: 'Main' });
});


router.get('/apple', function(req, res) {
  res.render('appleIndex', { title: 'Main' });
});



module.exports = router;
