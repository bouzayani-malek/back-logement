const { default: axios } = require('axios');
const mongoose = require('mongoose');

const House=require('../../model/House');

module.exports=async function(id){
try{
    if(id==='animeaux'){
        const result=await House.find({ reglement : "animeaux" })
        if(!result)    return {error : 'House_id invalaide ...'};
        return result;
    }
    if(id==='enfant'){
        const result=await House.find({ reglement : "enfant" })
        if(!result)    return {error : 'House_id invalaide ...'};
        return result;
    }
    
    if(id==='equipement'){
        const result=await House.find({$expr:{$gt:[{$size:"$equipement"}, 16]}})
        if(!result)    return {error : 'House_id invalaide ...'};
        return result;
    }
    
    }catch(err){
    console.log(err.message);
}}
