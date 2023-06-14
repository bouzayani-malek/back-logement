const { set } = require('mongoose');
const Message = require('../../model/Message');
const get_user_by_id=require('../../function/User/get_user_by_id');
const get_user_name_photos = require('../User/get_user_name_photos');



module.exports =async function(req) {
    

    try{
    //    const result = await Message.find({$or  :[{from : req.user.id},{to : req.user.id}]})
    //    const result = await Message.aggregate([
           
    //         { $match :{$or :[{"from" : req.user.id},{"to" : req.user.id}]}},
    //         {$group : {_id : ["$from" , "$to","$text","$created"] }},
    //         //  { "$group": {_id: {"from" : req.user.id ,"text" : "$text", "date" : '$created',"to" : "60acdfda62a3b6c0a2ddc7d3" }}},
    //          {"$sort" : {date : -1}}
    //     ]);
        
        const result = await Message.find({ $or: [{ from : req.user.id }, { to : req.user.id }]})
        .distinct("from")
                            
        const test = await Message.find({ $or: [{ from : req.user.id }, { to : req.user.id }]})
        .distinct("to")

        const liste=result.concat(test)

        // const result = await Message.find({"$or" :[{from : req.user.id} ,{to : req.user.id}]})
            // .populate('from')
            // .populate('to')
            // .sort("created")

            // const result = await Message.find({$or  :[{from : req.user.id},{to : req.user.id}]},{"from":1,"to" :1,"_id" :0})
            var unique = [...new Set(liste)]
        
        return unique
    }catch(err){
        console.log(err);
    }
}