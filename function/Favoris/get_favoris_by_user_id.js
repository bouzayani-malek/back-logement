const Favoris=require('../../model/Favoris')

module.exports=async function(id){

try{

     const result = await Favoris.find({user_id : id})
     .populate('house_id')
    return result;

}catch(err){
    console.log(err.message);
}
}