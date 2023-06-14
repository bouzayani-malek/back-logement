const mongoose = require('mongoose');
const moment = require('moment')



const messageShema = new mongoose.Schema({
    from : {
        type :mongoose.Schema.Types.ObjectId,ref: 'User',
        required : true
    },
    to : {
        type: mongoose.Schema.Types.ObjectId,ref: 'User',
        required : true
    },
    text :{
        type: String,
        required :true
    },
    created :{
        type : Date,
        default :moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ')
    }
})

const Message = mongoose.model('Message',messageShema);

module.exports = Message;