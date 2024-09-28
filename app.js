if(process.env.NODE_ENV!="production"){
    require('dotenv').config();
} 
const express=require('express');
const app=express();
const path=require('path');
const ejsMate=require('ejs-mate');
const flash=require('connect-flash');
const mongoose=require('mongoose');
const session=require('express-session')
const methodOverride=require("method-override");
const rootRouter=require('./routes/rootRouter.js');
const watchRouter=require('./routes/watchRouter.js');
const contactRouter=require('./routes/contactRouter.js');
const aboutRoute=require("./routes/aboutRouter.js");
const testimonialRouter=require("./routes/testimonialRouter.js");
const userRouter=require('./routes/userRouter.js');
const passport=require('passport');
const LocalStrategy=require('passport-local');
const User=require('./models/userSchema.js');
const{isLoggedIn}=require('./middleware.js');

const mongoUrl=process.env.MONGO_DB_URL;
async function connectDb() {
    return await mongoose.connect(mongoUrl);
}

connectDb().then(() => {
    console.log("Connected to DB Successfully ........")
}).catch((err) => {
    console.log(err)
});

//session options
const sessionOptions={
    secret:process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:true,
    cookie:{
        secure:false,
        maxAge:1000*60*60*24,
    },
}

//ejs related stuff.
app.engine('ejs',ejsMate);
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

//set static folder
app.use(express.static(path.join(__dirname,'/public')))

//setting urlencoded data
app.use(express.urlencoded({extended:true}));

//method Override
app.use(methodOverride('_method'));

//setting up session
app.use(session(sessionOptions));

//setting up flash middleware
app.use(flash());

//setting up a middleware that stores flash message to res.locals object
app.use((req,res,next)=>{
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    next();
})
//Passport JS related stuff...
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* Here we are modularizing all routes with the help of middleware...*/

// Root Route...
app.use("/",rootRouter);

//Watch Route...
app.use('/watchs',watchRouter);

//contact Route...
app.use('/contact',contactRouter);

//about Route...
app.use('/about',aboutRoute);

//testimonial Route...
app.use('/testimonial',testimonialRouter);

//User Route...
app.use('/users',userRouter)

//Test Route...
app.use('/test',isLoggedIn,(req,res)=>{
    res.send("Authentication Done! ");
})

//Error Handling Middleware
app.use((err,req,res,next)=>{
    let {message="Something Went Wrong!",status=550}=err;
    res.status(status).render("ejsFiles/error.ejs",{message,status})
});

//Running Server on Port No: 80
app.listen(80,()=>{
    console.log("Server Running Successfully...")
});