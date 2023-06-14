const mongoose = require('mongoose');



const reservSchema=new mongoose.Schema({
    house_id : {
        type : String,
        ref : 'House'
    },
    user_id : {
        type : String,
        ref:'User'
    },
    start_date : {
        type : String,
        required : true
    },
    end_date : {
        type : String,
        required : true
    },
    
    price : {
        type : Number,
        required :true,
        default : 0
    },
    validated : {
        type : Boolean,
        required :false,
        default :false
    },
    created :{
        type :Date,
        default : Date.now()
    }
});

const Reserv=mongoose.model('Reserv',reservSchema);

module.exports=Reserv;
