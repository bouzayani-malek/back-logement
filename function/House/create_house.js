const House = require('../../model/House');
const keys =require('../../config/keys')
const axios = require('axios');
const get_user_by_id = require('../User/get_user_by_id');
const User = require('../../model/User');
const get_gouvernement =require('./get_gouvernement')

module.exports = async function(req,res){
    try{
        const adresse = `${req.protocol + '://' + req.get('host')}`
        const photos=req.files.map(value=>`${adresse}/${value.path}`);

    const test=JSON.parse(req.body.house)



        const house = new House(
            {
            owner_id : req.user.id,
            prixJour : test.prixJour,
            prixSemaine : test.prixSemaine,
            prixMois : test.prixMois,
            type : test.type.toLowerCase(),
            titre : test.titre,
            desc : test.desc,
            adresse :{
                latitude  : test.adresse.latitude,
                longitude : test.adresse.longitude,
                gouvernement : await get_gouvernement(test.adresse.latitude,test.adresse.longitude)
            },
            equipement: test.equipement,
            reglement :test.reglement,
            interieur :{
                litSimple : test.interieur.litSimple,
                litDouble : test.interieur.litDouble,
                nbVoyageur : test.interieur.nbVoyageur
            },
            photos : photos
        });
        
        await house.init_reserv();

        const result = await house.save();
        console.log(result);

        if(!result) return {"error" : 'Error !!'};
        return result
     } catch (err) {
         console.log(err.message);
     }
};