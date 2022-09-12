const request = require('postman-request')
const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=a9e8d384225d2485a52431c9ea524344&query='+ encodeURIComponent(address) + '&limit=1'
    console.log(url)
    debugger
    request({url, json:true}, (error, {body}) => {
        debugger
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (!body.data || body.data.length === 0) {
            callback('Unable to find location. Try another location.', undefined)
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].name
            })
        }
    })
}

// const url = 'http://api.weatherstack.com/current?access_key=2321e878238c2ed745e229e542171756&query=37.8267,-122.4233&units=f'

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find the location.')
//     } else {
//     console.log(response.body.current.weather_descriptions[0] + '.  It is currently ' + response.body.current.temperature + ' degrees out.  It feels like ' + response.body.current.feelslike + ' degrees out.' )
//     }
// })


module.exports = geocode
