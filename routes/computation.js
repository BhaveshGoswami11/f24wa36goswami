var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100;

  let y;
  let fnName;
  if (x % 3 === 0) {
    y = Math.hypot(x);
    fnName = "Math.hypot";
  } else if (x % 3 === 1) {

    y = Math.ceil(x);
    fnName = "Math.ceil";
  } else {
    y = Math.clz32(x);
    fnName = "Math.clz32";
  }

  res.send(`${fnName} applied to ${x.toFixed(2)} is ${y}`);
});

module.exports = router;
