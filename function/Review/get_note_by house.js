const Reviews=require('../../model/Reviews');



module.exports= async function(id){
    
    try{
        const result= await Reviews.aggregate([
            { $match: { house_id: id } },
            { $group: { _id: id, average: { $avg: '$comment.rating' } } },
           
          ])
        if(!result) return {error : 'House not found'};
        return result

    }catch(err){
        console.log(err.message);
    }
}