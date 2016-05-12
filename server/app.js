var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();

app.post('/', upload.single(), function(req,res,next) {
	console.log(req.body);
	res.end('ok');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// curl -H "Content-Type: text/xml" -d "@C:\git\work\ccdaview\docs\C-CDA_R2_Care_Plan.xml" -X POST http://localhost:3000
