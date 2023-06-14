const Reviews= require('../../model/Reviews');

module.exports=async function(req){
    try{
        const result=await Reviews.remove({_id : req.params.id , user_id : req.user.id});
        if(!result) return {error : 'review non supprimee'};
        return result;
    }catch(err){
        return {error : err.message};
    }
}
