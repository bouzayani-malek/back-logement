const User = require("../../model/User");



module.exports = async function() {
    
    try {
        const result = await User.find().populate('boite')
        // console.log(result);
        if(!result) return {error : 'no users avaible'};
        return result;
    } catch (err) {
        console.log(err.message);
    }    
}