var Forecast = require("forecast.io");
var express = require('express');
var app = express();
var port = 9001;
var options = {
  APIKey: '89615b604ffc8435ec4c5477f912d638'
};
var forecast = new Forecast(options);

app.get('/api/forecast/:lat,:lng', function(req, res) {
  forecast.get(req.params.lat, req.params.lng, function (err, res2, data) {
    if (err) throw err;
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.send(data);
  });
});

app.listen(port, function() {
	console.log('API server running on port ' + port);
});
