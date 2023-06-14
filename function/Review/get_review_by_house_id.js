const Reviews=require('../../model/Reviews');



module.exports= async function(id){
    
    try{
        const result= await Reviews.find({house_id : id})
        .populate('user_id')
        if(!result) return {error : 'House not found'};
        return result;
    }catch(err){
        console.log(err.message);
    }
} 