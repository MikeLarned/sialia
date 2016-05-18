var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var parser = require('xml2json');
var _ = require('underscore');

var docs = [
  { id: 1, name: "Discharge Summary 1.xml" },
  { id: 2, name: "Consult 1.xml" },
  { id: 3, name: "CCD - Missy Sue TAYLOR.xml" },
  { id: 4, name: "CCD 1.xml" },
  { id: 5, name: "C-CDA_R2_Care_Plan.xml" },
  { id: 6, name: "C-CDA_R2-1_CCD.xml" },
  { id: 7, name: "DIR.sample.xml" },
  { id: 8, name: "Final_Task_Force_Full_Sample_R1.1.xml" },
  { id: 9, name: "Op Note 1.xml" },
  { id: 10, name: "Final_Task_Force_Full_Sample_R1.1.xml" },
  { id: 11, name: "Proc Note 1.xml" },
  { id: 12, name: "Progress Note 1.xml" },
  { id: 13, name: "UD 1.xml" },
];

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/docs', function(req, res) {
  res.send(docs);
});

app.get('/:id(\\d+)', function (req, res) {
  var id = req.params.id;
  var doc = _.find(docs, function(d) {
    return d.id == id;
  });

  console.log(doc);

  function bufferFile(relPath) {
    var p = path.join(__dirname, relPath);
    console.log(p);
    return fs.readFileSync(p,{ encoding: 'utf8' });
  }

  //var BUFFER = bufferFile('../docs/C-CDA_R2_Care_Plan.xml');
  //var BUFFER = bufferFile('../docs/CCD - Missy Sue TAYLOR.xml');
  // var BUFFER = bufferFile('../docs/Consult 1.xml');
  var BUFFER = bufferFile('../docs/' + doc.name);
  //var json = parser.toJson(BUFFER);
  res.send(BUFFER);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
