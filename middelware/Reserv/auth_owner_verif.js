const House =require('../../model/House');

module.exports=async function(req,res,next){
try{
    const result= await House.findOne({_id :req.params.house_id});
    if(!result) return res.send('House not found');
    if(result.owner_id === req.user.id)return next();
    res.send('User is not the Owner');
}catch(err){
    console.log(err.message);
}
}