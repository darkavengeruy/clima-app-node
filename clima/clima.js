const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=5c6a393d82cd9875c51cc2d134747e82&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}