const { default: axios } = require('axios');
const mongoose = require('mongoose');

const House=require('../../model/House');
const get_note_byHouse = require('../Review/get_note_by house');
const get_review_by_house_id = require('../Review/get_review_by_house_id');

module.exports=async function(id){
try{
    const result=await House.findById(id)
    .populate('owner_id')
    if(!result)    return {error : 'House_id invalaide ...'};
    const note= await get_note_byHouse(id)
    console.log(note[0].average);
    result.note=note[0].average;
    const test={result , note : note[0].average}
    
    return result;
    }catch(err){
    console.log(err.message);
}}
