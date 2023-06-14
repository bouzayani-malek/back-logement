const { set } = require('mongoose');
const Message = require('../../model/Message');
const get_user_by_id=require('../../function/User/get_user_by_id');
const get_user_name_photos = require('../User/get_user_name_photos');



module.exports =async function(req) {
    

    try{
    //    const result = await Message.find({$or  :[{from : req.user.id},{to : req.user.id}]})
    //    const result = await Message.aggregate([
           
    //         // { "$project" :{"text" :1}},
    //          { "$group": {_id: {"from" : req.user.id ,"text" : "$text", "date" : '$created',"to" : "60acdfda62a3b6c0a2ddc7d3" }}},
    //          {"$sort" : {date : -1}}
    //     ]);
        
        const result = await Message.find({ $or: [{$and : [{ from : req.params.id }, { to : req.user.id }]},
            {$and :[{from : req.user.id},{to :req.params.id}]}]})
                            .sort("-created")
                            .populate('from').populate('to')
                            // .distinct("from")
                            
        // const test =   await Message.find({ $or: [{ from : req.user.id }, { to : req.user.id }]})
        //                     .sort({"created" : 1}).distinct("to")     
        // const liste=result.concat(test)
        // // var a=[{}]
        // // liste.forEach(async (val)=> {  
        // //     a.push(  (await get_user_name_photos(val)).data)
        //     a=>
        // })
        // console.log(a);
        
       return result
    }catch(err){
        console.log(err);
    }
}