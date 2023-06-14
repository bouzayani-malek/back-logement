const mongoose = require('mongoose');
const House=require('../../model/House');

module.exports=async function(user_id){
try{
    
    const result=await House.find({owner_id : user_id})
    .populate("owner_id")
    
    if(!result)    return {error : 'error...'};
    return result;
    }catch(err){
    console.log(err.message);
}}
