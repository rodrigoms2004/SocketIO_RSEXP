var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/chat2', (req, res, next) => {
  res.render('chat2', { title: 'chat2'});
})


router.get('/chat', (req, res, next) => {
  res.render('chat', {});
})

module.exports = router;
