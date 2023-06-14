const mongoose = require('mongoose');



const reportSchema = new mongoose.Schema({
    reporter_id : {
        type : String, ref :'User',
        required : true
    },
    reported_house_id :{
        type :String, ref :'House'
    },
    reported_comment_id :{
        type :String,ref : 'Reviews'
    },
    text:{
        type :String
    },
    type : {
        type : String
    }
})

const Report = mongoose.model('Report',reportSchema);

module.exports = Report;