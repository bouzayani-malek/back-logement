const mongoose = require('mongoose');

const House=require('../../model/House');

const get_house_by_id=require('./get_house_by_id');



module.exports=async function(){
try{
    const result=await House.find()
    // .populate('owner_id')
    if(!result)    return {error : 'House non disponible ...'};
    
     return result;
    
}catch(err){
    console.log(err.message);
}

}