const { default: axios } = require('axios');
const mongoose = require('mongoose');

const House=require('../../model/House');

module.exports=async function(id){
try{
    // console.log('-----------');
    const result=await House.find({type : id})
    if(!result)    return {error : 'House_id invalaide ...'};
    return result;
    }catch(err){
    console.log(err.message);
}}
