const mongoose = require('mongoose');

const House=require('../../model/House');

module.exports=async function(search){
try{


    const result=await House.find({"adresse.gouvernement" : search})
    .populate('owner_id')
        // .select({"_id" :0,"adresse.latitude" : 1 , "adresse.longitude" : 1})
        console.log(result);
        // console.log("done");
    if(!result)    return {error : 'error...'};
    return result;
    }catch(err){
    console.log(err.message);
}}
