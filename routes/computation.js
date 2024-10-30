var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100;
  
  
  let y = Math.hypot(x);

  res.send(`Math.hypot applied to ${x.toFixed(2)} is ${y.toFixed(2)}`);
});

module.exports = router;
