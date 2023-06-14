
const router=require('express').Router();
const delete_favoris = require('../function/Favoris/delete_favoris');
const get_favoris_by_user_id = require('../function/Favoris/get_favoris_by_user_id');
const post_new_favoris = require('../function/Favoris/post_new_favoris');
const auth_token = require('../middelware/auth_token');
const Favoris = require('../model/Favoris')




//GET LISTE FAVORIS BY USER
router.get('/',auth_token, async (req,res)=>{
    res.send(await get_favoris_by_user_id(req.user.id) );
    
})

//ADD NEW FAVORIS
router.post('/:id',auth_token ,async (req,res)=>{
    res.send(await post_new_favoris(req))
});

//DELETE FAVORIS BY ID
router.delete('/:id',auth_token,async(req,res)=>{
    res.send(await delete_favoris(req));
});
module.exports=router;
