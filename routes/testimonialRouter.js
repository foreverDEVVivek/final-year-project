const express=require('express');
const router=express.Router();
const {getTestimonial,postTestimonial,deleteTestimonial,editTestimonial,editTestimonialPage}=require('../controller/testimonialController.js');
const {validateTestimonial}=require('../middleware.js');
const wrapAsync=require('../utils/wrapAsync.js')
//Root Testimonial routes
router.route('/')
.get(wrapAsync(getTestimonial))
.post(validateTestimonial,wrapAsync(postTestimonial));

//Edit Testimonial Page
router.route('/:reviewId/edit')
.get(wrapAsync(editTestimonialPage));

//Review related request
router.route('/:reviewId')
.put(validateTestimonial,wrapAsync(editTestimonial))
.delete(wrapAsync(deleteTestimonial));


module.exports=router;