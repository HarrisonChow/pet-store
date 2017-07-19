var express = require('express'),
  app = express(),
  port = process.env.PORT || 3333;

app.listen(port);

console.log('Pet Store RESTful API server started on: ' + port);
