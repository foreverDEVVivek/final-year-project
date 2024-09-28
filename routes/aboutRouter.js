const express=require('express');
const router=express.Router();
const aboutController=require('../controller/aboutController.js');

router.route('/')
.get(aboutController);

module.exports=router;