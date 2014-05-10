var Forecast = require("forecast.io");
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var app = express();
var port = 9001;
var conditions = require('./assets/javascripts/conditions.js');
var options = {
  APIKey: '89615b604ffc8435ec4c5477f912d638'
};
var forecast = new Forecast(options);

app.use(express.static('static'));
app.use(bodyParser());

app.get('/api/forecast/:lat,:lng', function(req, res) {
  forecast.get(req.params.lat, req.params.lng, function (err, forecastRes, data) {
    if (err) {
      res.send(500);
    }

    var defaultStatus = _.find(conditions.Statuses, function(s) {
			return s.status === 'default';
		});

		defaultStatus.priority = 0;

		function getStatuses(arr) {
			return _.map(arr, function(a) {
				var status = _.find(conditions.Statuses, function(s) {
					return s.status === a.status;
				});

				return {
          status: a.status,
					priority: a.priority,
					message: status.message,
					sps: status.sps
				};
			});
    }

    var results = _.map(data.daily.data, function(d) {
			// d.temperatureMax = -20;

			var temps = _.filter(conditions.TemperatureConditions, function(tc) {
				return d.temperatureMax < tc.high && d.temperatureMax >= tc.low;
			});

			var precip = _.filter(conditions.PrecipitationConditions, function(pc) {
				return d.precipIntensity < pc.high && d.precipIntensity >= pc.low && d.precipType === pc.type;
			});

			var wind = _.filter(conditions.WindConditions, function(wc) {
				return d.windSpeed < wc.high && d.windSpeed >= wc.low;
			});

			var seasonal = _.filter(conditions.SeasonalConditions, function(sc) {
				return sc.month === new Date().getMonth() + 1;
			});

			var status = _.last(_.sortBy([defaultStatus].concat(
				getStatuses(temps),
				getStatuses(precip),
				getStatuses(wind),
				getStatuses(seasonal)
			), 'priority'));

			return {
        imagestyle: status.status+"-bg",
        currently: data.currently,
        temperatureMin: d.temperatureMin,
        temperatureMax: d.temperatureMax,
				date: d.time,
				summary: d.summary,
				message: status.message,
				sps: status.sps
			};
		});

    res.header("Access-Control-Allow-Origin", req.headers.origin);
		res.send({
			timezone: data.timezone,
			messages: results
		});
  });
});

app.listen(port, function() {
	console.log('API server running on port ' + port);
});
