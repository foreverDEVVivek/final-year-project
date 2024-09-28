const wrapAsync=require("../utils/wrapAsync.js");
const Watches=require('../models/watchSchema.js');
const Query=require('../models/querySchema.js');

const getHomepage=async(req,res)=>{
    const allWatchDetails=await Watches.find();
    res.render('ejsFiles/index.ejs',{allWatchDetails});
}

const postHomepage=async(req,res)=>{
    const newQuery= await new Query({
        name:req.body.name,
        number:req.body.number,
        email:req.body.email,
        message:req.body.message,
    })
    await newQuery.save();
    req.flash('success',"Your response shared with Owner!");
    res.redirect('/');
    
};

module.exports={getHomepage,postHomepage};