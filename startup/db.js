const mongoose = require('mongoose');
// const config = require('config');
// const keys =require('../config/keys')

 module.exports = function() {

// mongoose.connect('mongodb+srv://test:test@cluster0.d1wsj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
//  { useUnifiedTopology: true ,useNewUrlParser: true ,useCreateIndex: true })
//     .then(console.log('Conneced to DataBase ...'))
//     .catch(err => console.log(err));

mongoose.connect('mongodb+srv://malek2000:IG1rl5sEQOz6jfDm@cluster0.gyp376n.mongodb.net/SouDatabase?retryWrites=true&w=majority',
 { useUnifiedTopology: true ,useNewUrlParser: true ,useCreateIndex: true })
    .then(console.log('Conneced to DataBase ...'))
    .catch(err => console.log(err));
// mongoose
//   .connect(`mongodb://localhost:27017/ProjetSoo`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Successfully connect to MongoDB.");
//     //initial(); 
//   })
//   .catch(() => {
//     console.error("Connection error");
//     process.exit();
//   });

}



