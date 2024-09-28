const mongoose=require('mongoose');

const ReviewSchema=mongoose.Schema({
        comment : {
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            default:3,
            min:1,
            max:5,
        },
        createdAt:{
            type:Date,
            default:Date.now(),
        },
        author:{
            type:String,
            required:true,
        }
})

const Review=mongoose.model("Review",ReviewSchema);

module.exports=Review;
