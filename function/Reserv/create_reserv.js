const Reserv = require('../../model/Reserv');


module.exports= async function(req){
try{        
       
    const reserv = new Reserv({
        house_id : req.params.house_id ,
        user_id : req.user.id,
        start_date : req.body.start_date,
        end_date : req.body.end_date,
       price :req.body.price
    });

    const result = await reserv.save();
    return result;
    //console.log(nb_days);
 }catch(err){
   console.log(err.message);
}
}