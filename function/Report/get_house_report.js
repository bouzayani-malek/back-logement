const Report = require('../../model/Report');

module.exports=async function(id){

try{

   
     const result = await Report.find({type : "HOUSE"})
     .populate('reporter_id')
     .populate("reported_house_id")
    if(!result) return {error : 'Pas de House Report ....'};
    return result;

}catch(err){
    console.log(err.message);
}
}