var express = require('express'),
  app = express(),
  port = process.env.PORT || 3333,
  mongoose = require('mongoose'),
  Task = require('./api/models/petStoreModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/PetStoredb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/petStoreRoutes');
routes(app);

app.listen(port);

console.log('Pet Store RESTful API server started on: ' + port);
