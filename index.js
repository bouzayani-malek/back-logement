const express = require('express')
var app = express()

const rateLimit = require("express-rate-limit");

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 60 * 1000, 
  max: 1000000
});

//  apply to all requests
app.use(limiter);
// app.use(express.static('images'))

app.use(express.static('public'));  
app.use('/images', express.static('images')); 

require('./startup/prods')(app)
require('./startup/routes')(app)
require('./startup/db')()

// const hostname = '192.168.1.100';
const port = process.env.PORT ||3000;
app.listen(port, () => console.log(`listening on port ${port} !`));
