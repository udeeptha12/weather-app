const axios = require('axios'); // Use require for CommonJS

const getWeather =(lat,lon)=>{
    return new Promise((resolve,reject)=>{

        const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid=d58d0a392b8e34b580806560181ac42a';

                axios.get(url)
                .then(function (response) {
                    // handle success
                    resolve({weather:'Currently '+response.data.weather[0].description+' and temparature ' +response.data.main.temp+'C'});
                    //console.log("Currently "+response.data.weather[0].description+" and temparature "+response.data.main.temp+"C"); 
                })
                .catch(function (error) {
                    // handle error
                    reject({error:'Unable to find tha location , Please try another location'})
                    //console.log('Unable to find tha location , Please try another location');
                });
    });
};

module.exports = getWeather;