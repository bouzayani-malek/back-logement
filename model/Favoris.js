const mongoose = require('mongoose');
const moment =require('moment')



const favorisSchema = new mongoose.Schema({
    house_id :{
        type : String , ref :'House'  
    },
    user_id :{
        type :String,
        required :true
    },
    created :{
        type :String,
        default : moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ')
    },
})

const Favoris = mongoose.model('Favoris',favorisSchema);

module.exports = Favoris;