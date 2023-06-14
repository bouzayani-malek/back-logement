
const get_conversation = require('../function/Messagerie/get_conversation');
const get_user_messages = require('../function/Messagerie/get_user_messages');
const send_message = require('../function/Messagerie/send_message');
const auth_token = require('../middelware/auth_token');

const router=require('express').Router();
const Message = require('../model/Message')


//CREATE NEW MESSAGE
router.post('/:id',auth_token ,async (req,res)=>{
    res.send(await send_message(req))
});

router.get('/user',auth_token, async (req,res)=>{
    res.send(await get_user_messages(req))
})

router.get('/user/:id',auth_token, async (req,res)=>{
    res.send(await get_conversation(req))
})


module.exports=router;
