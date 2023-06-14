const mongoose = require('mongoose');



const interieurSchema = new mongoose.Schema({
    house_id :{
        type :String,
        required :true
    },
    nb_lit : {
        type : Number
    },
    nb_voy :{
        type : Number
    },
    nb_chambre :{
        type : Number
    },
    nb_salon :{
        type : Number
    },
    nb_cuisine :{
        type : Number
    },
    nb_salle_bain:{
        type : Number
    }
})

const Interieur = mongoose.model('Interieur',interieurSchema);

module.exports = Interieur;