const express=require('express');
const Router=express.Router();
const {getSignInPage,postSignInRequest,getLogInPage,postLoginRequest}=require('../controller/userController.js');
const {validateUser,isLoggedIn}=require('../middleware.js');
const passport=require('passport');
const wrapAsync=require('../utils/wrapAsync.js');

Router.route('/')
.get(getSignInPage)
.post(validateUser,wrapAsync(postSignInRequest))

Router.route('/login')
.get(getLogInPage)
.post(passport.authenticate('local', {
    failureRedirect: '/users/login',
    failureFlash:true,
    failureMessage: 'Authentication failed, please try again.'
}),wrapAsync(postLoginRequest));

Router.route('/login/:id',isLoggedIn,(req,res)=>{
    res.json(
    {
        "test":"test"
    }
    );
})


module.exports=Router;