var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', function (req, res) {
  function bufferFile(relPath) {
    var p = path.join(__dirname, relPath);
    console.log(p);
    return fs.readFileSync(p,{ encoding: 'utf8' });
  }

  var BUFFER = bufferFile('../docs/C-CDA_R2_Care_Plan.xml');
  //var BUFFER = bufferFile('../docs/CCD - Missy Sue TAYLOR.xml');
  console.log(BUFFER)
  res.send(BUFFER);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
