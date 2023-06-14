const Joi = require('joi');
const bcrypt = require('bcryptjs');
const User = require('../../model/User');


const schemaJoiUser = Joi.object({
    nom : Joi.string().min(3).max(20).required(),
    prenom : Joi.string().min(3).max(20).required(),
    email :Joi.string().email().required(),
    password :Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required() ,    
    dtn :Joi.date().required(),
    img_url : Joi.string() , 
    phone : Joi.string()
});

module.exports =async function(req) {
    

try {
    // console.log('done !');
    //const {error}= schemaJoiUser.validate(req.body);
    //console.log(error.details);

    // if(error) return {error : error.details[0].message};

    const salt =  await bcrypt.genSalt(10);
    const hashed =await bcrypt.hash(req.body.password , salt);

   

    const user = new User({
        nom : req.body.nom , 
        prenom : req.body.prenom ,
        email :req.body.email , 
        password : hashed ,
        dtn : req.body.dtn ,
        img_url : `${req.protocol + '://' + req.get('host')}/${req.file.path}` ,
        phone : req.body.phone
     })
    
    const result = await user.save();
    //  console.log(result);
 
    
    if(!result) return {error : 'Erreur a creation de nouveau user !!'};
    return result

 } catch (err) {
     return {error : err.message};
 }
}
