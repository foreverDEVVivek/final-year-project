const express=require('express');
const router=express.Router();
const contactController=require('../controller/contactController.js');

router.route('/')
.get(contactController)

module.exports=router;