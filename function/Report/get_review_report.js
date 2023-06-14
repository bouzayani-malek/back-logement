const Report = require('../../model/Report');

module.exports=async function(id){

try{

   
     const result = await Report.find({type : "REVIEW"})
     .populate("reported_comment_id")
    if(!result) return {error : 'Pas de Review Report ....'};
    return result;

}catch(err){
    console.log(err.message);
}
}