const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const Reserv=require('./Reserv');
const keys =require( '../config/keys');
const { boolean } = require('joi');

const houseSchema=new Schema({
    owner_id : { type: String, ref: 'User' }
    ,
    type :{
        type :String,
        enum : ['maison' , 'logement','appartement','chambre']
    },
    prixJour : {type : Number , required : true},
    prixSemaine : {type : Number , required : true},
    prixMois : {type : Number , required : true},
    approuved :{type : Boolean , default :false},
    created :{type : Date ,default : Date.now()},
    titre:{type : String ,required : true},
    desc :{type : String},

    adresse :  {
        latitude :{type  : String ,required : true},
        longitude:{type  : String ,required : true},
        gouvernement : {type  : String ,default :''},
    },
    equipement : {
            type : [String],
            enum: ["wifi",  "tv",  "chauffage",  "climatiseur", 
             "cuisine", "blender","bebe",  "cafetiere","salleBain","secure",  "jardin",
                  "work","billard","refrigerateur",
              "securite","fumee",  "toilet",  "transport",
                "sheceCheveux",  "camera",  "linge",  "espaceTravail",
                   "sport","taxi"]
    },
    reglement :{
            type : [String],
            enum: ['enfant', 'bebe','animeaux','evenement','fumeur']
    },
    interieur :{
        litSimple:{type : Number , required : true},
        litDouble :{type : Number , required : true},
        nbVoyageur :{type : Number , required :true}
    },
    photos :{
        type : [String],
        default : []
    }
    
});


houseSchema.methods.init_reserv =async function(){
    try{
    const reserv = new Reserv({
        house_id : this.id ,
        user_id : this.owner_id,
        start_date : "1990-1-1",
        end_date : "1990-1-2",
        nb_voyageur : 1,
        total_price : 1
    });
    await reserv.save();
}catch(err){
    console.log(err.message);
}

    };

    
const House=mongoose.model('House',houseSchema);

module.exports=House;
