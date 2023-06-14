const router=require('express').Router();
const Reserv=require('../model/Reserv');
const auth_res_valide = require('../middelware/Reserv/auth_res_valide');
const auth_token =require('../middelware/auth_token');

const create_reserv=require('../function/Reserv/create_reserv');
const get_reserv_by_house_id=require('../function/Reserv/get_reserv_by_house_id');
const auth_owner_verif = require('../middelware/Reserv/auth_owner_verif');
const validate_res=require('../function/Reserv/validate_reserv');
const get_owner_reserv = require('../function/Reserv/get_owner_reserv');

//GET RESERV BY HOME ID for Owner of house
// ,auth_owner_verif
router.get('/manager',auth_token,async(req,res)=>{
    res.send(await get_owner_reserv(req));
})


//GET RESERV BY HOME ID for Owner of house
// ,auth_owner_verif
router.get('/house/:house_id',auth_token,async(req,res)=>{
    res.send(await get_reserv_by_house_id(req.params.house_id));
})
//VALIDATE Or REMOVE THE RESERV BY THE OWNER OF THE HOUSE
,auth_owner_verif
router.post('/:reserv_id',auth_token,async(req,res)=>{
    res.send(await validate_res(req));
})
//NEW RESERV
//auth_res_valide,
// auth_res_valide
router.post('/new/:house_id',auth_token, async (req,res)=>{
    res.send(await create_reserv(req));
})


module.exports = router;