var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/tos.html', function(req, res){
	res.render('tos', { title: 'TOS' });
})

module.exports = router;
