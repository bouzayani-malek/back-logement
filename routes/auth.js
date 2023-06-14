const express = require('express');
const bcrypt = require('bcryptjs');
//const Auth=require('../model/Auth');
const User=require('../model/User');
const router = express.Router();




router.post('/',async (req,res)=>{
    try {
    const result =await User.findOne({email : req.body.email})
    if(!result) return res.status(401).send('Verifier email');
    const isValid = await bcrypt.compare(req.body.password,result.password);
    if(!isValid) return res.status(401).send('verifier mot de passe');
    res.status(200).header('x-auth-token',result.generateToken()).send( result );
 } catch (err) {
     console.log(err);
 }
    
})



module.exports=router;
