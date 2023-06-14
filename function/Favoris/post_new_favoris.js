const Favoris=require('../../model/Favoris')

module.exports=async function(req){

try{
    const favoris= new Favoris({
        user_id :req.user.id,
        house_id :req.params.id
    })

     const result = await favoris.save();
    return result;

}catch(err){
    console.log(err.message);
}
}