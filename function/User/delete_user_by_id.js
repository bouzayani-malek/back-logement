const User = require('../../model/User');


module.exports=async function(id){
    try{
        const result = await User.deleteOne({_id : id});
        if(! result) return {error : 'User non supprimé'};
        return result;
    }catch (err){
        return {error : err.message};
    }
}
