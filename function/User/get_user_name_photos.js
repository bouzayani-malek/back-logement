const User = require("../../model/User");

module.exports = async function(id) {

try{
    const result = await User.findById(id).select(['nom','prenom','img_url'])
    // console.log(result);

    if(!result) return { error : 'user intouvable'};
    return  result
 } catch (err) {
     console.log(err.message);
 }
}
