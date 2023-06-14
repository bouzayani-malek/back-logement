const mongoose  = require("mongoose");




const reviewsSchema = new mongoose.Schema({
    user_id :{type : String,ref  : 'User'},
    house_id : {type : String,ref  : 'House'},
        comment :
        {
            rating : {
                type : Number,
                min : 0,
                max :5
            },
            text : String,
            time : Date
        }
});

const Reviews = mongoose.model('Reviews',reviewsSchema);

module.exports=Reviews;  
