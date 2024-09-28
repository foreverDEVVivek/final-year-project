const mongoose=require('mongoose');
const watchSchema=require('../models/watchSchema.js')
require('dotenv').config();
const data=require('./data.js')
const mongoUrl="mongodb+srv://admin:admin@cluster0.7qjwp.mongodb.net/";

async function connectDB() {
    return await mongoose.connect(mongoUrl);
}

connectDB().then(() => {
    console.log("Connected to DB Successfully...")
}).catch((err) => {
    console.log("Some Error Occurred")
});

async function initDB() {
    return await watchSchema.insertMany(data.data)
}
initDB().then(()=>{
    console.log("Data was initialized....")
}).catch((err)=>{
    console.log("SOme Error Occurred")
})
