const mongoose = require('mongoose');
const jwt =require('jsonwebtoken');
const keys =require('../config/keys');
const Schema=mongoose.Schema;
//const create_boite = require('../function/Messagerie/create_boite');
//const Boite=require('../model/Boite')

const userSchema=new Schema({
    nom : {
        type : String,
        minLength : 3,
        required : true
    },
    prenom : {
        type : String,
        minLength : 3,
        required : true
    },
    email :{
        type : String,
        minLength : 3,
        required : true,
        unique : true
    },
    password :{
        type : String,
        minLength : 3,
        required : true,
        // select: false
    },    
    dtn :{
        type : Date
    },
    img_url : {
        type : String,
        default :'./assets/user_default.png'
    },
    
    phone : String,
    created :{
        type : Date , 
        default : Date.now(),
       
    },
    validated:{
        type : Boolean ,
        default :false,
       
    },
    role:{
        type : String , 
        enum :['user','manager','admin'] , 
        default : 'user',
        
    },
    
   
});

userSchema.methods.generateToken = function () {
    const token=jwt.sign({id : this._id, email : this.email },keys.jwt);
    return token;
}




const User=mongoose.model('User',userSchema);

module.exports=User;
