const House=require('../../model/House');





module.exports=async function(req){
    try {
        const result =await House.deleteOne({id : req.params.id})
        if(!result) return 'Erreur !!!'        
        return result;
        
         } catch (err) {
             return {error : err.message}
         }
    
}