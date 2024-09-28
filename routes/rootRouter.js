const express=require('express');
const router=express.Router();
const wrapAsync=require('../utils/wrapAsync.js')
const {validateReview}=require('../middleware.js');
const {getHomepage,postHomepage}=require('../controller/rootController.js');

router.route("/")
.get(wrapAsync(getHomepage))
.post(validateReview,wrapAsync(postHomepage));

module.exports=router;