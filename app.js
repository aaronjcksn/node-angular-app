var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({
  extended: true
}));

app.post('/view-form', function(req, res) {
  console.log(req.body.number);
  res.end();
});

app.post('/total', function(req, res) {
  console.log(req.body.firstNumber);
  console.log(req.body.secondNumber);

  var totalNum = req.body.firstNumber + req.body.secondNumber;
  res.json([totalNum]);
});


var server = app.listen(3001, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Myapp is listening at http://%s:%s', host, port);
});
