const User = require('../../model/User');
const bcrypt = require('bcryptjs');
const get_user_by_id = require('./get_user_by_id');


module.exports =async function(req ,res) {
    

try {

const {data ,error} = await get_user_by_id(req.params.id);
    
if(error) return {error : 'user not found !!!'};

const user = new User(data);
if(req.body.nom) user.nom = req.body.nom;
if(req.body.prenom) user.prenom = req.body.prenom;
if(req.body.email) user.email = req.body.email;
if(req.body.password) {
    const salt =  await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password , salt);
    user.password = hashed;
}
if(req.body.dtn) user.dtn = req.body.dtn;
if(req.body.img_url) user.img_url = req.body.img_url;
if(req.body.phone) user.phone = req.body.phone ;

const result = await user.save();
if(!result) return {error : 'Erreur updating user'};
return {data : result}

 } catch (err) {
     return {error : err.message}
 }
}