const mongoose=require('mongoose');

const reviewWatches=mongoose.Schema({
    author:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    comment:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        default:3,
        min:1,
        max:5,
    },
})

const watchReview=mongoose.model("WatchReview",reviewWatches);

module.exports=watchReview;