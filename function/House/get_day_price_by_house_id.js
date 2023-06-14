const House = require('../../model/House');


module.exports=async function(id){

    try {
        const result =await House.findById(id).select({_id : 0 , day_price :1});
        if(!result) return {error : 'Erreur'};
        return result.day_price;
    } catch (err) {
        console.log(err.message);
    }
}