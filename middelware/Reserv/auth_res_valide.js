const House=require('../../model/House');
const Reserv = require('../../model/Reserv');
const Moment = require('moment');
const MomentRange = require('moment-range');
const Joi=require('joi');

const moment = MomentRange.extendMoment(Moment);

const reservShemaJoi = Joi.object({
    start_date: Joi.date().required().greater(new Date()),
    end_date: Joi.date().greater(Joi.ref('start_date')).required(),
    price :Joi.number().greater(0)
  });
  

module.exports= async function (req, res, next) {
    try{
        // console.log(req.body.start_date,req.body.end_date);
        const {error} = reservShemaJoi.validate(req.body);
        if(error) return res.status(403).send(error.details[0].message);

        const test = await House.findById(req.params.house_id);
        if(!test) return res.status(404).send('House not Found ...');
        
        const notAvaible = await Reserv.find({house_id : req.params.house_id})
        .select({_id : 0 , start_date : 1 ,end_date : 1});
        
        //aucune reservation pour ce house

        if(!notAvaible) return next();
        
        //il existe des reservations

        let test_date =moment.range(req.body.start_date, req.body.end_date);
        
        var free =false;
         notAvaible.forEach(data=>{
              free =!moment.range(data.start_date ,data.end_date).overlaps(test_date);
        });
 
        if(!free) return res.status(405).send('La Date Souhaité n est pas disponible');
        next();
    }catch(err){
        console.log(err.message);
    }
    
}