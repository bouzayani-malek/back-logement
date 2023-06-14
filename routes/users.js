const express = require('express');

const auth_token = require('../middelware/auth_token');
const get_users = require('../function/User/get_users');
const get_user_by_id = require('../function/User/get_user_by_id');
const create_user = require('../function/User/create_user');
const update_user = require('../function/User/update_user');
const delete_user=require('../function/User/delete_user_by_id');
const get_user_name_photos = require('../function/User/get_user_name_photos');
const router = express.Router();

var multer  = require('multer')
var upload = multer()

var storageProfile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./images/profile/`)
    },
    filename: function (req, file, cb) {
      cb(null,`${Date.now()}.png`)
    }
  })

  var uploadProfile = multer({ storage: storageProfile })



router.post('/',uploadProfile.single("image"),async function (req, res, next) {
    // const test=FormData(req.body).getAll()
    // console.log(test);
    // console.log('done !');
    // console.log(req.body.nom);
    // var fullUrl = req.protocol + '://' + req.get('host');
    // console.log(`${req.protocol + '://' + req.get('host')}/${req.file.path}`);
    // console.log(req.body.email);
    res.send(await create_user(req));
  })

// GET ALL USERS
router.get('/',async(req,res)=>{
const data = await get_users();
res.header( 'Access-Control-Expose-Headers', 'Content-Range')
res.header('Content-Range','bytes : 0-9/*')
res.header("X-Total-Count", '100')
res.send(data);
});
// GET USER BY ID
router.get('/:id',async (req,res)=>{
    const data =await get_user_by_id(req.params.id);
    res.send(data);
});
// CREER NEW USER
// router.post('/',async (req,res)=>{
//     res.send(await create_user(req));
// })
// UPDATE USER INFO
router.post('/:id',async(req,res)=>{
    res.send(await update_user(req));
})
// DELETE USER
router.delete('/:id',async(req,res)=>{
    res.send(await delete_user(req.params.id));
});

// GET USER NAME & IMAGE
router.get('/info/:id',async(req,res)=>{
    res.send(await get_user_name_photos(req.params.id));
});

module.exports=router;
