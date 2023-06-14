const mongoose = require('mongoose');



const adresseSchema = new mongoose.Schema({

    house_id :{
        type : String,
        required : true
    },
    region :{
        type : String,
        required : true
    },
    ville :{
        type : String,
        required : true
    },
    codep :{
        type : Number,
        required : true
    },
    rue :{
        type : String,
        required : true
    },
    longitude :{
        type : String,
        required : false
    },
    latitude :{
        type : String,
        required : false
    }
})

const Adresse = mongoose.model('Adresse',adresseSchema);

module.exports = Adresse;