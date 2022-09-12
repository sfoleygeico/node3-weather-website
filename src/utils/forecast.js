const request = require('postman-request')
const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2321e878238c2ed745e229e542171756&query='+ encodeURIComponent(lat + ',' + lon) + '&limit=1&units=f'
    console.log(url)
    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.success === 'false') {
            callback('Unable to find location. Try another location.', undefined)
        } else {
            // callback(undefined, {
            //     condition: body.current.weather_descriptions[0],
            //     temp: body.current.temperature,
            //     feelslike:  body.current.feelslike
            // })
            callback(undefined, 
                'Currently it is ' + body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' but feels like ' + body.current.feelslike + '.  The wind speed is ' + body.current.wind_speed + '.'
            )            
        }
    })
}


module.exports = forecast