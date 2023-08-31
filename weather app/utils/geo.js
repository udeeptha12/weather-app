const axios = require('axios'); // Use require for CommonJS

const getGeo = (location)=>{
    return new Promise ((resolve,reject)=>{

        const url ='https://api.openweathermap.org/geo/1.0/direct?q='+location+'&limit=1&appid=d58d0a392b8e34b580806560181ac42a';

                axios.get(url)
                .then(function (response) {
                    // handle success
                    resolve({
                        name: response.data[0].name,
                        lat: response.data[0].lat,
                        lon: response.data[0].lon
                    });
                    //console.log(response.data[0].name+" is in "+response.data[0].lat+" "+response.data[0].lon); 
                })
                .catch(function (error) {
                    reject({
                        error:'Unable to find the location'
                    });
                    //console.log("Unable to find the location")
                });
    });
}

module.exports = getGeo;