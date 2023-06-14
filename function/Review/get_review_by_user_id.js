const Reviews = require('../../model/Reviews');


module.exports=async function(id){
    try{
        const result=await Reviews.find({user_id : id});
        if(!result) return {error : 'No Review Fond for this user'};
        return result;
    }catch(err){
        return {error : err.message};
    }
}