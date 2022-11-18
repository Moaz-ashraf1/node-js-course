const request = require('request');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const location = process.argv[2]

if (location) {
  geocode(location, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.longitude, data.latitude, (error, foreCastData) => {
      if (error) {
        return console.log('Error', error)
      }
      console.log(data.location);
      console.log(foreCastData);
    })
  })
} else {
  console.log("Please provide an address 😡");
}