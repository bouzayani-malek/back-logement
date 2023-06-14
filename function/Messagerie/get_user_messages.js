const { set } = require('mongoose');
const Message = require('../../model/Message');
const get_user_by_id=require('../../function/User/get_user_by_id');
const get_user_name_photos = require('../User/get_user_name_photos');
const get_unique_user_message = require('./get_unique_user_message');



module.exports =async function(req) {
    

    try{
    const liste= await get_unique_user_message(req)
    // // liste.forEach(async val =>console.log(await get_user_name_photos(val)))
        const b=[]
    // const newArray = await liste.map(async val => {
    //     const item= await  get_user_name_photos(val)
    //     b.push(item)
    //     // console.log(b);
    // })

    for (const elem of liste) {
        const item= await  get_user_name_photos(elem)
        b.push(item)
        // console.log(b);
    }
    // console.log(b);
    // const a=[]
    // Promise.all(newArray).then(val=>a.push(val))

    // setTimeout(() => {
    //       console.log(b);
    // }, 1000);
  

        
       return b
    }catch(err){
        console.log(err);
    }
}