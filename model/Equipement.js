const mongoose = require('mongoose');



const equipementSchema = new mongoose.Schema({
    house_id:{
        type :String,
        required : true
    },
    liste : {
        type : [String],
        requied : false
    } 
})

const Equipement = mongoose.model('Equipement',equipementSchema);

module.exports = Equipement;