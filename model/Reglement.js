const mongoose = require('mongoose');



const reglementSchema = new mongoose.Schema({
    house_id :{
        type : String,
        required : true
    },
    fumeur : {
        type : Boolean,
        required :false
    },
    animeaux : {
        type : Boolean,
        required :false
    },evenement :{
        type : Boolean,
        required :false
    },autre :{
        type : [String],
        required :false
    }

})

const Reglement = mongoose.model('Reglement',reglementSchema);

module.exports = Reglement;