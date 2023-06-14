const auth_token = require('../middelware/auth_token');
const router=require('express').Router();

const get_review_by_user_id = require('../function/Review/get_review_by_user_id');
const get_review_by_house_id = require('../function/Review/get_review_by_house_id');
const delete_review_by_id=require('../function/Review/delete_review_by_id');
const create_review=require('../function/Review/create_review');
const get_note_byHouse = require('../function/Review/get_note_by house');

//CREATE NEW REVIEW
router.post('/:id',auth_token ,async (req,res)=>{
    res.send(await create_review(req));
});
//GET REVIEWS BY USER
router.get('/user/:id',async(req,res)=>{
    res.send(await get_review_by_user_id(req.params.id));
})
//GET REVIEWS BY HOUSE
router.get('/house/:id',async(req,res)=>{
    res.send( await get_review_by_house_id(req.params.id));
})
//DELETE REVIEW by ID & user AUTH
router.delete('/:id',auth_token,async(req,res)=>{
    res.send(await delete_review_by_id(req));
});
//GET NOTE BY HOUSE
router.get('/note/:id',async(req,res)=>{
    res.send( await get_note_byHouse(req.params.id));
})

module.exports=router;
