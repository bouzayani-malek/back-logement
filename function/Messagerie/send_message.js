const Message = require('../../model/Message');



module.exports =async function(req) {
    

    try{
        const message=new Message({
            from : req.user.id,
            to : req.params.id,
            text:req.body.text
        })
        const result = await message.save();
       return result
    }catch(err){
        console.log(err);
    }
}