const House=require('../../model/House');
const Reserv=require('../../model/Reserv');

module.exports=async function(id){

try{
    console.log('reserv');
    const test = await House.findById(id);
    if(!test) return {error : 'House Not Found ....'};
     const result = await Reserv.find({house_id : test._id})
     .populate('house_id')
     .populate('user_id')
    if(!result) return {error : 'Pas de Reservation ....'};
    return result;

}catch(err){
    console.log(err.message);
}
}