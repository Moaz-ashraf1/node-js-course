const request = require('request');
// const url = 'http://api.weatherstack.com/current?access_key=dab65dce5eea1f5707df8e811da919eb&query=	30.033333,31.233334&units=f';
// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service! ❌');
//   } else if (response.body.error) {
//     console.log('Unable to find location 😔');
//   } else {
//     console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + ' degress out');
//   }
// })


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Egypt.json?access_token=pk.eyJ1IjoiYWJkZWxyYWhtYW4tMTIzIiwiYSI6ImNsNTczYXhsdzA5a3IzaHFscHB1ZHFta3kifQ.LTWxj9dDNMZh75y7y7ncfg&limit=1';
request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service! ❌');
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location 😔');
  } else {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
  }
})