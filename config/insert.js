const User=require('../model/User')
const data=require('./users.json')
const faker=require('faker')
const House = require('../model/House')
const Reviews =require('../model/Reviews')
const Message = require('../model/Message')
const Favoris = require('../model/Favoris')
const Reserv = require('../model/Reserv')
const { default: axios } = require('axios')
const keys = require('./keys')

module.exports=async function(){

// try{
//     data.forEach(async (val)=>{
//         let user=new User(val);
//         await user.save()
//         //console.log(val);
//     })
// }catch(err){
//     console.log(err.message);
// }




for(let i =0;i< 100;i++ ){
const user =new User({
    
        "img_url": "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600114/59070197-user-icon-man-profil-homme-d-affaires-avatar-personne-ic%C3%B4ne-illustration-vectorielle.jpg",
        "created": faker.date.past(1,new Date()),
        "validated": false,
        "role": "user",
        "nom": faker.name.firstName(),
        "prenom": faker.name.lastName(),
        "email": faker.internet.email(),
        "password": "$2a$10$rA98SxFYCj9SZjEez86dD.tJGWPEmguOwi8FE2EtyUo0lCmuqKcKC",
        "dtn": faker.date.past(20,new Date(2000, 0, 1)),
        "phone": faker.phone.phoneNumber(),
        "__v": 0
    
})

const result = await user.save()
console.log(i);
}




// // //---------- AJOUT DES HOUSES-----------------------

const listeEquipement=["wifi",  "tv",  "chaffage",  "climatiseur",  "cuisine",  "cafetiere","salleBain", "refrigerateur", "securite","fumee",  "jardin",  "toilet",  "transport",  "secheCheveux",  "camera",  "linge",  "espaceTravail",  "billard",  "blender"]
const listReglement=['enfant', 'bebe','animeaux','evenement']
const listeOwner1= (await User.find().select({id :1})).map(value=>value.id);
const listeGouvernement=["Ariana","beja","Ben Arous","Bizerte","gabes",
"Gafsa","Jendouba","Kairouan","Kasserine","Kebili","Kef",
"Mahdia","La Manouba","Medenine","Monastir","Nabeul","Sfax",
"Sidi Bouzid","Siliana","Sousse","Tataouine","Tozeur","Tunis"
,"Zaghouan",]
const loc=[
    [ 36.8688529,10.1353404],
    [ 36.7297086,9.1700926 ],
    [ 36.75442792053779, 10.22126198618565 ],
    [ 37.28594793980071, 9.863569033098912],
    [ 33.888557605267955, 10.099052891200564 ],
    [ 34.4310977040187, 8.777782992215066 ],
    [ 36.50131504708613, 8.777516264807003],
    [35.67252353807171, 10.099296040911454 ],
    [ 35.169936410350935, 8.833694960687444 ],
    [ 33.70551661433797, 8.968706429545229 ],
    [ 36.101279609296874, 8.71636471012119 ],
    [35.50106214990865, 11.0451869095281],
    [36.809843628917704, 10.077316596171498],
    [ 33.34601267525818, 10.486449176690364 ],
    [ 35.771774568385844, 10.827307907865409 ],
    [ 36.46202052327737, 10.714320151875247 ],
    [ 34.76123407025822, 10.73309794784046 ],
    [ 35.03578586502613, 9.47909720952972 ],
    [ 36.08721103903328, 9.365930733243513],
    [ 35.82818203012808, 10.609125705191607],
    [ 32.925410965634235, 10.43804179884393 ],
    [ 33.936028802151284, 8.102340458776853 ],
    [ 36.81908151304109, 10.17269487979116],
    [ 36.40997017371981, 10.139686080322662 ]
  ]

for(let i =0;i< 100;i++ ){
    const gouv= faker.random.arrayElement(listeGouvernement)
    const temp = loc[listeGouvernement.indexOf(gouv)]
    // console.log(temp);

    const pos= faker.address.nearbyGPSCoordinate([parseFloat(temp[0]),parseFloat(temp[1])],5)
    // console.log(pos);
    const house=new House({
   
        "adresse" : {
            "gouvernement" : gouv,
            "latitude" : parseFloat(pos[0]) ,
            "longitude" : parseFloat(pos[1])
        },
        "created" : faker.date.past(1,new Date()),
        "equipement" : faker.random.arrayElements(listeEquipement) ,
        "reglement" :  faker.random.arrayElements(listReglement) ,
        "photos" : faker.random.arrayElements(['https://source.unsplash.com/collection/625659','https://source.unsplash.com/collection/4934788','https://source.unsplash.com/collection/304842','https://source.unsplash.com/collection/8684513','https://source.unsplash.com/collection/75921145','https://source.unsplash.com/collection/4480860','https://source.unsplash.com/collection/42194119','https://source.unsplash.com/collection/940649','https://source.unsplash.com/collection/2113666','https://source.unsplash.com/collection/11392110']) ,
        "owner_id" : faker.random.arrayElement(listeOwner1),
        "prixJour" : faker.datatype.number({ min: 20, max: 100}),
        "prixSemaine" : faker.datatype.number({ min: 200, max: 500}),
        "prixMois" : faker.datatype.number({ min: 800, max: 2000}),
        "type" : faker.random.arrayElement(['maison' , 'logement','appartement','chambre']),
        "titre" : faker.commerce.productName() ,
        "desc" : faker.commerce.productDescription() ,
        "interieur" : {
            "litSimple" : faker.datatype.number({ min: 0, max: 5}),
            "litDouble" : faker.datatype.number({ min: 0, max: 5}),
            "nbVoyageur" : faker.datatype.number({ min: 1, max: 10}),
        }
    });
    const result= await house.save()
    console.log(i);
//     // try {
//     //     console.log('ldghkmsg');
//     //     const text=faker.random.arrayElement(listeGouvernement)
//     //     const result = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${text}&inputtype=textquery&fields=geometry&key=${keys.API_KEY}`)
//     //     console.log(text,result.data.candidates[0].geometry.location.lat);
//     //     console.log(text,result.data.candidates[0].geometry.location.lng);
//     // } catch (error) {
        
//     // }
//     // console.log(faker.address.nearbyGPSCoordinate([35.64205595801515, 10.811856579260592],20));

    
}

// // //------------ Ajouts des Reviews

const listeOwner2= (await User.find().select({id :1})).map(value=>value.id);
const listeHouse2= (await House.find().select({id :1})).map(value=>value.id);


for(let i =0;i< 300;i++ ){
const review=new Reviews({
    "user_id" : faker.random.arrayElement(listeOwner2) ,
    "house_id" : faker.random.arrayElement(listeHouse2),
    "comment" : {
        "text" : faker.lorem.paragraph(),
        "time" : faker.date.past(1,new Date()),
        'rating' : faker.datatype.number({min :1 , max :5})
    }
})
await review.save();
console.log(i);


}

// // // // AJOUT DES MESSAGES

const ListeUser= (await User.find().select({id :1})).map(value=>value.id);

for(let i =0;i< 500;i++ ){
    const message=new Message({    
    from : faker.random.arrayElement(ListeUser),
    to : faker.random.arrayElement(ListeUser),
    text :faker.lorem.sentence(),
    created :faker.date.past(1,new Date())
    })

    await message.save()
    console.log(i);

    }

// // //---------- AJOUT DES FAVORIS

const listeOwner3= (await User.find().select({id :1})).map(value=>value.id);
const listeHouse3= (await House.find().select({id :1})).map(value=>value.id);

for(let i=0;i<200;i++){
    const favoris = new Favoris({
        user_id : faker.random.arrayElement(listeOwner3),
        house_id : faker.random.arrayElement(listeHouse3),
        created : faker.date.past(1,new Date())
    })
    await favoris.save()
    console.log(i);
}
// // ------------------- INITIAL RESERVATION

const listeHouse4= (await House.find().select({id :1})).map(value=>value.id);
const listeOwner4= (await User.find().select({id :1})).map(value=>value.id);
for (const element of listeHouse4) {
    const reserv= new Reserv({
        validated : false,
        // created:Date("1990-01-1T10:06:21.854+00:00"),
        house_id:element,
        user_id:faker.random.arrayElement(listeOwner4),
        start_date:Date("1990-1-1"), 
        end_date:Date("1990-1-2"),
        price:0
    })
    await reserv.save()
    // console.log();
}
console.log('done !');
}

