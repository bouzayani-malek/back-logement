const Report = require('../../model/Report');


module.exports= async function(req){
try{        
       
    const report = new Report({
        reporter_id : req.user.id ,
        // reported_house_id : req.params.id,
        reported_comment_id : req.params.id,
        text :req.body.text,
        type : 'REVIEW'
    });

    const result = await report.save();
    return result;
    //console.log(nb_days);
 }catch(err){
   console.log(err.message);
}
}