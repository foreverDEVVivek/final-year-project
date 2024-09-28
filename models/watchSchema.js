const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const watchSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    description:{
      type:String,
    },
    price:{
        type:Number,
        required:true,
    },
    review:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'WatchReview',
        },
    ]
})

const Watches=mongoose.model('Watch',watchSchema);

module.exports=Watches;