const House=require('../../model/House');
const Reserv=require('../../model/Reserv');
const get_reserv_by_house_id = require('./get_reserv_by_house_id');

module.exports=async function(req){

try{
    const houses = await House.find({owner_id : req.user.id})
    .distinct('_id')
    const result=[]

    for (const elem of houses) {
        const test = await get_reserv_by_house_id(elem)
        result.push(test)
    }


    return result;
}catch(err){
    console.log(err.message);
}
}