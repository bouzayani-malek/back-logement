const Favoris=require('../../model/Favoris')

module.exports=async function(req){

try{

     const result = await Favoris.deleteOne({house_id : req.params.id , user_id : req.user.id})
    return result;

}catch(err){
    console.log(err.message);
}
}