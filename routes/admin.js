const express = require('express');
const bcrypt = require('bcryptjs');
const auth_token = require('../middelware/auth_token');
const get_users = require('../function/User/get_users');
const get_user_by_id = require('../function/User/get_user_by_id');
const create_user = require('../function/User/create_user');
const update_user = require('../function/User/update_user');
const delete_user=require('../function/User/delete_user_by_id');
const get_user_name_photos = require('../function/User/get_user_name_photos');
const get_all_house = require('../function/House/get_all_house');
const get_house_report = require('../function/Report/get_house_report');
const get_house_by_id = require('../function/House/get_house_by_id');
const router = express.Router();


// GET ALL USERS
router.get('/users',async(req,res)=>{
const data = await get_users();
res.header( 'Access-Control-Expose-Headers', 'Content-Range')
res.header('Content-Range','bytes : 0-9/*')
res.header("X-Total-Count", '100')
const test=[]
for (const iterator of data) {
    test.push(
        {
            "img_url": iterator.img_url,
            "created": iterator.created,
            "validated": iterator.validated,
            "role": iterator.role,
            "id": iterator._id,
            "nom": iterator.nom,
            "prenom": iterator.prenom,
           
            "email": iterator.email,
            "dtn": iterator.dtn,
            "phone": iterator.phone,
            "__v": 0
        }
    )
}
res.send(data);
});

//GET USER BY ID
router.get('/users/:id',async(req,res)=>{

    const data = await get_user_by_id(req.params.id)
    console.log(data);
res.header( 'Access-Control-Expose-Headers', 'Content-Range')
res.header('Content-Range','bytes : 0-9/*')
res.header("X-Total-Count", '100')

res.send(data);
})

//GET ALL HOUSES
router.get('/house',async(req,res)=>{
    console.log(req.query);
    const data = await get_all_house();
    res.header( 'Access-Control-Expose-Headers', 'Content-Range')
    res.header('Content-Range','bytes : 0-9/*')
    res.header("X-Total-Count", '100')
   
    res.send(data);
    });

//GET HOUSE BY ID
router.get('/house/:id',async(req,res)=>{
    console.log(req.query);
    const data = await get_house_by_id(req.params.id);
    res.header( 'Access-Control-Expose-Headers', 'Content-Range')
    res.header('Content-Range','bytes : 0-9/*')
    res.header("X-Total-Count", '100')
   
    res.send(data);
    });

// GET USER BY ID
// router.get('/:id',async (req,res)=>{
//     const data =await get_user_by_id(req.params.id);
//     res.send(data);
// });

// DELETE USER
router.delete('/:id',async(req,res)=>{
    res.send(await delete_user(req.params.id));
});

// GET REOPORT

router.get('/report',async (req,res)=>{
    const data = await get_house_report();
    res.header( 'Access-Control-Expose-Headers', 'Content-Range')
    res.header('Content-Range','bytes : 0-9/*')
    res.header("X-Total-Count", '100')
    const test=[]

    for (const iterator of data) {
        
        test.push({
            "id": iterator._id,
            "reporter_id": {
                "img_url": iterator.reporter_id.img_url,
                "created": iterator.reporter_id.created,
                "validated": iterator.reporter_id.validated,
                "role": iterator.reporter_id.role,
                "id": iterator.reporter_id._id,
                "nom": iterator.reporter_id.nom,
                "prenom": iterator.reporter_id.prenom,
                "email": iterator.reporter_id.email,
                "password": iterator.reporter_id.password,
                "dtn": iterator.reporter_id.dtn,
                "phone": iterator.reporter_id.phone
            }
            ,
                "reported_house_id" : {
                    "adresse": iterator.reported_house_id.adresse,
                    "interieur": iterator.reported_house_id.interieur,
                    "approuved": iterator.reported_house_id.approuved,
                    "created": iterator.reported_house_id.created,
                    "equipement": iterator.reported_house_id.equipement,
                    "reglement": iterator.reported_house_id.reglement,
                    "photos": iterator.reported_house_id.reglement,
                    "id": iterator.reported_house_id._id,
                    "owner_id": iterator.reported_house_id.owner_id,
                    "prixJour": iterator.reported_house_id.prixJour,
                    "prixSemaine": iterator.reported_house_id.prixSemaine,
                    "prixMois": iterator.reported_house_id.prixMois,
                    "type": iterator.reported_house_id.type,
                    "titre": iterator.reported_house_id.titre,
                    "desc": iterator.reported_house_id.desc,
                    "__v": 0
                }
            
        
    })}

    res.send(data);
})

module.exports=router;
