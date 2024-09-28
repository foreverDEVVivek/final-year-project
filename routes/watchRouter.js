const express=require('express');
const router=express.Router();
const {getWatches,showWatch,reviewForWatch,deleteReviewOfWatch,renderEditReviewPage,editReviewOfWatch}=require('../controller/watchController');
const {validateWatchReview}=require('../middleware.js');

//Get Watches page
router.route('/')
.get(getWatches);

//Show Particular Watch
router.route('/:id')
.get(showWatch)
.post(validateWatchReview,reviewForWatch)

// Delete Review for particular Watch
router.route('/:id/review/:reviewId')
.put(validateWatchReview,editReviewOfWatch)
.delete(deleteReviewOfWatch);

//Rendering Edit Page of Review
router.route('/:id/review/:reviewId/edit')
.get(renderEditReviewPage);

module.exports=router;