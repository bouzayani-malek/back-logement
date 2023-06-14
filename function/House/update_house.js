const House=require('../../model/House');

const get_house_by_id=require('./get_house_by_id');



module.exports=async function(req){
    try {
        const data=req.body;
        const house = await get_house_by_id(req.params.house_id);
        if(!house) return {error : 'house not found' };

        if(data.approuved) {house.approuved=data.approuved; await house.save();}
        if(data.type) {house.type=data.type; await house.save();}
        if(data.prixJour) {house.prixJour=data.prixJour; await house.save();}
        if(data.prixSemaine) {house.prixSemaine=data.prixSemaine; await house.save();}
        if(data.prixMois) {house.prixMois=data.prixMois; await house.save();}
        
        if(data.titre) {house.titre=data.titre; await house.save();}
        if(data.desc) {house.desc=data.desc; await house.save();}
        if(data.adresse){
            if(data.adresse.latitude) {house.adresse.latitude=data.adresse.latitude; await house.save();}
            if(data.adresse.longitude) {house.adresse.longitude=data.adresse.longitude; await house.save();}
            if(data.adresse.gouvernement) {house.adresse.gouvernement=data.adresse.gouvernement; await house.save();}
        }
        if(data.equipement) {house.equipement=data.equipement; await house.save();}
        if(data.reglement) {house.reglement=data.reglement; await house.save();}
        if(data.interieur){
            if(data.interieur.litSimple) {house.interieur.litSimple=data.interieur.litSimple; await house.save();}
            if(data.interieur.litDouble) {house.interieur.litDouble=data.interieur.litDouble; await house.save();}
            if(data.interieur.nbVoyageur) {house.interieur.nbVoyageur=data.interieur.nbVoyageur; await house.save();}
        }
        if(data.photos) {house.photos=data.photos; await house.save();}

     
       
       
       
    
        
        return await get_house_by_id(req.params.house_id);
        
         } catch (err) {
             return {error : err.message}
         }
    
}