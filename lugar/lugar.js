const axios = require('axios');



const getLugarLatLng = async(dir) => {

    const encoudedUrl = encodeURI(dir);

    var instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoudedUrl}`,
        headers: { 'X-RapidAPI-Key': '67b502e885msh572b1ce4e7deac4p1d3805jsn1a80c92b502c' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat; // latitud
    const lng = data.lon; // longuitud


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}