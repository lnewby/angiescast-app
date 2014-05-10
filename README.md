Angiecast.io
========================

Concept for a weather based service suggestions API. Just place the <weatherServices> element in your sites body.

This example use a NodeJS server to serve up the API endpoints and website.

###Start the api service:

```
$ cd api/
$ npm install
$ npm start
```
You can now hit the endpoints found in api/server.js, e.g:
<http://localhost:9001/api/forecast/37.44749,-122.16448> will return a JSON response of forecast from [Forecast.io](http://forecast.io/) based on latitude and longitude passed in:
```javascript
{
latitude: 37.44749,
longitude: -122.16448,
timezone: "America/Los_Angeles",
offset: -7,
currently: {...},
minutely: {...},
hourly: {...},
daily: {...},
alerts: [...],
flags: {...}
}
```
###Start the web service:

```
$ cd ../angiecast/
$ npm install
$ npm start
```
###View the demo of Angiecast widget concept:
```
$ open index.html

```
