'use strict';

/* App Module */
var angiecastApp = angular.module('angiecastApp', [
  'ngRoute',
  'angiecastControllers',
  'angiecastDirectives',
  'angiecastServices'
]);

/*
User Story: "As a member, I want to see a suggested snapfix solution based
 on the weather forecast for my primary address, so that I can avoid the
 impact of the weather."

Rules for predicted weather:
(1) Predicted high temp over 90f "Looks like it's going to get hot
    in <location>! Get A/C tune up scheduled now!"
(2) Predicted low temp below 32f "It's getting cold again in <location>!
    Don't get caught without heat.  Schedule a furnace tune up today!"
(3) Predicted rain Gutter Cleaning "Rain is predicted for <location>!
    Get those gutters cleaned.  Schedule it now!
*/

/*
Below is the sample XML data.

<WeatherData>
<Forecast Priority=”1”>
<Temperature>
                <Min =”70” Max=”90” Message=”Is your Furnace serviced?”
<Min =”1” Max=”10” Message=”The water pipes can freeze. Did you inspect your pipes to avoiding freezing?”
</Temperature>
<Rain Priority=”2”>>
                < Chance=”100%” Message=”Some Message” >
                < Chance =”80%” Message=”Some Message”>
</Rain>
</Forecast>
<WeatherData>

Below is the sample JSON data return from api
{
  "Temperature":18.340000152587891,
  "Services":"Plumbing,Roofing",
  "Message":"Is your furnace serviced?",
  "MonthlyMessage":"Summer Time!! yaay!!",
  "PastTemperature":0.0,
  "PastMessage\":null,
  "Forecast":\"No precipitation throughout the week, with temperatures peaking at 21°C on Sunday.\"}"
*/


/*
{
  "WeatherData": {
    "Forecast": {
      "-Priority": "1",
      "Temperature": [
        {
          "-Min": "80",
          "-Max": "100",
          "-Message": "Record Breaking heat coming up. Is your A/C serviced?",
          "-Services": "Plumbing,Roofing"
        },
        {
          "-Min": "1",
          "-Max": "10",
          "-Message": " Winter freeze advisory ahead. The water pipes can freeze. Did you inspect your pipes to avoiding freezing?",
          "-Services": "Plumbing,Roofing"
        }
      ]
    },
    "MonthlyForecast": {
      "-priority": "2",
      "Jan": { "-Message": "It's Winter.Did you inspect your heater?" },
      "May": { "-Message": "Summer Time!! yaay!!" },
      "Jun": { "-Message": "June!!" },
      "Jul": { "-Message": "June!!" },
      "Aug": { "-Message": "June!!" },
      "Sep": { "-Message": "June!!" },
      "Oct": { "-Message": "June!!" },
      "Nov": { "-Message": "June!!" },
      "Dec": { "-Message": "June!!" }
    },
    "WeatherEvent": {
      "-priority": "3",
      "Severe": [
        {
          "-type": "hurricane",
          "-message": "Do you need help with fixing your home? Click here to hire the best?"
        },
        {
          "-type": "tornodo",
          "-message": "Do you need help with fixing your roof? Click here to hire the best roofer in your area?"
        },
        {
          "-type": "flooding",
          "-message": "What would you do if your property were flooded? Are you prepared?? Click here to find roofer in your area?"
        }
      ]
    }
  }
}
*/

// .config(['$httpProvider', function($httpProvider){
//     delete $httpProvider.defaults.headers.common['X-Requested-With'];
//     $httpProvider.defaults.headers.common.Access-Control-Allow-Origin ='true';
// }]);
// .config(['$routeProvider',
//   function($routeProvider){
//     $routeProvider.
//     when('/', {
//       templateUrl: 'index.html',
//       controller: 'IndexCtrl'
//     }).otherwise({
//       redirectTo: '/'
//     });
//   }]);

// var x=document.getElementById("latlng");
//
// var notify = function () {
//     // Check for notification compatibility.
//     if (!'Notification' in window) {
//         // If the browser version is unsupported, remain silent.
//         return;
//     }
//     // Log current permission level
//     console.log(Notification.permission);
//     // If the user has not been asked to grant or deny notifications
//     // from this domain...
//     if (Notification.permission === 'default') {
//         Notification.requestPermission(function () {
//             // ...callback this function once a permission level has been set.
//             notify();
//         });
//     }
//     // If the user has granted permission for this domain to send notifications...
//     else if (Notification.permission === 'granted') {
//         var n = new Notification(
//                     'New message from Liz',
//                     {
//                       'body': 'Lance: "Hi there!"',
//                       // ...prevent duplicate notifications
//                       'tag' : 'unique string'
//                     }
//                 );
//         // Remove the notification from Notification Center when clicked.
//         n.onclick = function () {
//             this.close();
//         };
//         // Callback function when the notification is closed.
//         n.onclose = function () {
//             console.log('Notification closed');
//         };
//     }
//     // If the user does not want notifications to come from this domain...
//     else if (Notification.permission === 'denied') {
//         // ...remain silent.
//         return;
//     }
// };
// window.Notification.requestPermission();
//notify();
