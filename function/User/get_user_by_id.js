const User = require("../../model/User");

module.exports = async function(id) {

try{
    const result = await User.findById(id)

    if(!result) return { error : 'user intouvable'};
    return {data : result};
 } catch (err) {
     console.log(err.message);
 }
}
