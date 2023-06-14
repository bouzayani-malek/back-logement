const mongoose = require('mongoose');

const House=require('../../model/House');
const axios=require('axios')
const keys=require('../../config/keys')

module.exports=async function get_gouvernement(latitude,longitude) {
    try{
        const result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=administrative_area_level_1&key=${keys.API_KEY}`)
        return result.data.results[0].address_components[0].long_name;
        // console.log(result);
    }catch(err){
        return {error : err.message};
    }   
}
