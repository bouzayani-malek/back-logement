const router=require('express').Router();
const Reserv=require('../model/Reserv');
const auth_res_valide = require('../middelware/Reserv/auth_res_valide');
const auth_token =require('../middelware/auth_token');

const post_house_report = require('../function/Report/post_house_report');
const post_review_report = require('../function/Report/post_review_report');
const get_house_report = require('../function/Report/get_house_report');
const get_review_report = require('../function/Report/get_review_report');

//NEW REPORT HOUSE
//auth_res_valide
router.post('/house/:id',auth_token, async (req,res)=>{
    res.send(await post_house_report(req));
})

//NEW REPORT REVIEW
//auth_res_valide
router.post('/Review/:id',auth_token, async (req,res)=>{
    res.send(await post_review_report(req));
})

//GET ALL HOUSE REPORT

router.get('/house',async(req,res)=>{
    res.send(await get_house_report(req.params.house_id));
})

//GET ALL REVIEW REPORT

router.get('/review',async(req,res)=>{
    res.send(await get_review_report(req.params.house_id));
})

//GET RESERV BY HOME ID for Owner of house
// ,auth_owner_verif
// router.get('/house/:house_id',auth_token,async(req,res)=>{
//     res.send(await get_reserv_by_house_id(req.params.house_id));
// })
// //VALIDATE Or REMOVE THE RESERV BY THE OWNER OF THE HOUSE
// ,auth_owner_verif
// router.patch('/:house_id/:reserv_id',auth_token,async(req,res)=>{
//     res.send(await validate_res(req));
// })
// //NEW RESERV
// //auth_res_valide
// router.post('/:house_id',auth_token,auth_res_valide, async (req,res)=>{
//     res.send(await create_reserv(req));
// })


module.exports = router;