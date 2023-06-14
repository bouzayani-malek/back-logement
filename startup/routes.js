const express = require('express');
const cors =require('cors')
const users=require('../routes/users')
const auth = require('../routes/auth');
const house = require('../routes/house');
const reserv=require('../routes/reserv');
const reviews = require('../routes/reviews');
const photos=require('../routes/photos')
const message = require('../routes/message')
const favoris=require('../routes/favoris')
const  report  = require('../routes/report');
const admin = require('../routes/admin')

const insert = require('../config/insert');


module.exports=function (app) {
    

app.use(express.json());
app.use(cors())

app.use(express.urlencoded({
    extended: true
  }));

app.use('/users',users);
app.use('/auth',auth);
app.use('/house',house);
app.use('/reserv',reserv);
app.use('/reviews',reviews);
app.use('/photos',photos)
app.use('/message',message)
app.use('/favoris',favoris)
app.use('/report',report)
app.use('/admin',admin)

app.get('/data',async (req,res)=>{
    res.send(await insert())
})

app.get('/', (req, res) => res.send('Hello World!'));
}