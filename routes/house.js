const express = require('express');
var multer  = require('multer');

const auth_token = require('../middelware/auth_token');
const auth_owner_verif=require('../middelware/Reserv/auth_owner_verif');

const create_house = require('../function/House/create_house');
const router = express.Router();

const get_house_by_id = require('../function/House/get_house_by_id');
const get_all_house=require('../function/House/get_all_house');
const update_house=require('../function/House/update_house');
const delete_house = require('../function/House/delete_house');
const get_house_by_user_id = require('../function/House/get_house_by_user_id');
const search_house_by_gouvernement = require('../function/House/search_house_by_gouvernement');
const get_house_by_type = require('../function/House/get_house_by_type');
const get_house_by_fav = require('../function/House/get_house_by_fav');

//GET ALL HOUSE
router.get('/',async(req,res)=>{
    res.send(await get_all_house());

});
//GET HOUSE BY ID
router.get('/:id',async(req,res)=>{
        res.send(await get_house_by_id(req.params.id));    
})



var storageHouse = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./images/House/`)
    },
    filename: function (req, file, cb) {
      cb(null,`${req.user.id}`+'-'+file.originalname+'.png')
    }
  })
   
  var uploadHouse = multer({ storage: storageHouse })

  router.post('/',auth_token, uploadHouse.array('photos', 12),async function  (req, res, next) {
    //   const adresse = `${req.protocol + '://' + req.get('host')}`
    // const photos=req.files.map(value=>`${adresse}/${value.path}`);

    // // console.log(req.files);
    // const test=JSON.parse(req.body.house)
    // test.photos=photos
    // console.log(test);


    res.send( await create_house(req))

    // res.send({photos,adresse : req.body.adresse})
    // res.send(req.files.map(value=>value.path));
  })


// CREER HOUSE
// router.post('/',auth_token ,async(req,res)=>{
//     res.send(await create_house(req,res));
// })
// UPDATE HOUSE BY OWNER
router.patch('/:house_id',auth_token,auth_owner_verif,async (req,res)=>{
    res.send(await update_house(req));
})

//DELETE HOUSE BY OWNER
// router.delete('/:house_id',auth_token,auth_owner_verif,async (req,res)=>{
//     res.send(await delete_house(req));
// })
router.delete('/:house_id',async (req,res)=>{
  res.send(await delete_house(req));
})
//GET HOUSE BY USER ID
router.get('/user/:id',async(req,res)=>{
    res.send(await get_house_by_user_id(req.params.id));

});

//SEARCH HOUSE BY GOUVERNEMENT
router.get('/city/:id',async(req,res)=>{
    res.send(await search_house_by_gouvernement(req.params.id));

});

//SEARCH HOUSE BY TYPE
router.get('/type/:id',async(req,res)=>{
    res.send(await get_house_by_type(req.params.id));

});

//SEARCH HOUSE BY FAV
router.get('/fav/:id',async(req,res)=>{
    res.send(await get_house_by_fav(req.params.id));

});


module.exports=router;