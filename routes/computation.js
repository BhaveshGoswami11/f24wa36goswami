var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100;

  let hypotResult = Math.hypot(x);
  let ceilResult = Math.ceil(x);
  let clz32Result = Math.clz32(x);

  let response = `
    Math.hypot applied to ${x.toFixed(2)} is ${hypotResult.toFixed(2)}<br>
    Math.ceil applied to ${x.toFixed(2)} is ${ceilResult}<br>
    Math.clz32 applied to ${x.toFixed(2)} is ${clz32Result}
  `;

  res.send(response);
});

module.exports = router;
