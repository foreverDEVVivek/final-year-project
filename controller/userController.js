const User=require('../models/userSchema.js');


const getSignInPage=(req,res)=>{
    res.render('ejsFiles/signIn.ejs');
}

const postSignInRequest=async(req,res)=>{
    try{
        let{username,password,email}=req.body;
        const newUser=await User({username,email});
        let registeredUser=await User.register(newUser,password);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err)
            }
            else{
               req.flash("success","User Registered Successfully!");
               res.redirect('/watchs');
            }
        });
        
    }
    catch(err){
        req.flash("success",err.message);
        res.redirect("/watchs");
    }
}


const getLogInPage=(req,res)=>{
    res.render('ejsFiles/login.ejs');
}

const postLoginRequest=async(req,res)=>{
    req.flash("success","Welcome Back ");
}


module.exports={getSignInPage,postSignInRequest,getLogInPage,postLoginRequest};