const express = require('express');
const fs=require('fs');

const router = express.Router();

var multer  = require('multer');
const auth_token = require('../middelware/auth_token');
//var upload = multer({ dest: './images' })


var storageProfile = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./images/profile/`)
  },
  filename: function (req, file, cb) {
    cb(null,`${req.user.id}.png`)
  }
})
 
var uploadProfile = multer({ storage: storageProfile })

  router.post("/profile",auth_token, uploadProfile.single("image"), (req, res) => {
    // console.log("done");
    // console.log(req.body.nom);
    res.send(req.file.path);
  });




  var storageHouse = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./images/House/`)
    },
    filename: function (req, file, cb) {
      cb(null,`${Date.now()}`+'-'+file.originalname)
    }
  })
   
  var uploadHouse = multer({ storage: storageHouse })

  router.post('/house',auth_token, uploadHouse.array('photos', 12), function (req, res, next) {

    res.send(req.files.map(value=>value.path));
  })

  router.get('/',async(req,res)=>{
    res.send('hello photos');

});





module.exports=router;
