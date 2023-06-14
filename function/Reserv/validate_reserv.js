const Reserv = require('../../model/Reserv');

module.exports=async function(req){
try{
    const result = await Reserv.findOne({_id : req.params.reserv_id});
    if(!result) return {error : 'Reservation non effectué'};
    if(req.body.validate){
         result.validated= req.body.validate;
         return await result.save();
        }
    else if(req.body.remove) return await Reserv.deleteOne({_id : req.params.reserv_id})
    else return {error : 'invalid command'};
}catch(err){
    console.log(err.message);
}
}