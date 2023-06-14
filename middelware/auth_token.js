const jwt=require('jsonwebtoken');
const keys = require('../config/keys');

module.exports =function(req,res,next){
   try {
    
    const token = req.header('x-auth-token');
    if(!token)return res.status(401).send('Visiteur Non autorisé  ...');
    const decoded = jwt.verify(token, keys.jwt);
    if(!decoded) return res.status(401).send('Visiteur Non autorisé  ...');
    req.user=decoded;
    next();
    
   } catch (error) {
       console.log(error.message);
   }

}
