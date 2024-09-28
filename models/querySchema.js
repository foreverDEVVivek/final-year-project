const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const querySchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    number:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
})

const query=mongoose.model('Queries',querySchema);

module.exports=query;
