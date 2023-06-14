const Reviews =require('../../model/Reviews');
const House =require('../../model/House');


module.exports=async function(req){

    try{
        const test = await House.findById(req.params.id);
        if(!test) return {error : 'Maison introuvable ....'};

        const review=new Reviews({
            user_id : req.user.id,
            house_id : req.params.id,
            comment :{
                rating :req.body.rating,
                text : req.body.text,
                time : new Date().toISOString()
            }
        });
        const result = await review.save();
        if(!result) return {error : 'Review non cree'};
        return result;
    }catch(err){
        console.log(err.message);
    }

}