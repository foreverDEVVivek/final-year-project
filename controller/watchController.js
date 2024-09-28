const wrapAsync=require('../utils/wrapAsync.js');
const Watches=require('../models/watchSchema.js');
const watchReview=require('../models/reviewWatches.js');

const getWatches=wrapAsync(async(req,res)=>{
    const allWatchDetails=await Watches.find({});
    res.render('ejsFiles/watchs.ejs',{allWatchDetails});   
})

const showWatch=wrapAsync(async(req,res)=>{
    const watchDetail= await Watches.findById(req.params.id).populate('review');
    res.render('ejsFiles/showWatches.ejs',{watchDetail});
})

const reviewForWatch=wrapAsync(async(req,res)=>{
    const newWatchReview= await new watchReview({
       author:req.body.author,
       comment:req.body.comment,
       rating:req.body.rating,
    })
    //finding the specific listing on which review generated..
    const listing= await Watches.findById(req.params.id);
    listing.review.push(newWatchReview);
    await newWatchReview.save();
    await listing.save();
    req.flash("success","Your Feedback are valuable for us!");
    res.redirect(`/watchs/${req.params.id}`);
})

const deleteReviewOfWatch=wrapAsync(async(req,res)=>{
    await Watches.findByIdAndUpdate(req.params.id,{$pull:{review:req.params.reviewId}});
    const deletedReview= await watchReview.findByIdAndDelete(req.params.reviewId);
    req.flash('success',"Your Review has been deleted!");
    res.redirect(`/watchs/${req.params.id}`);
})

const renderEditReviewPage=wrapAsync(async(req,res)=>{
    const editReview= await watchReview.findById(req.params.reviewId);
    const watchDetail=await Watches.findById(req.params.id);
    res.render('ejsFiles/editReviewOfWatch.ejs',{editReview,watchDetail});
})

const editReviewOfWatch=wrapAsync(async(req,res)=>{
    const updateReview= await watchReview.findByIdAndUpdate(req.params.reviewId,{
        comment:req.body.comment,
        rating:req.body.rating,
        author:req.body.author,   
    });
    req.flash("success","Your Review has been shared with Owner!");
    res.redirect(`/watchs/${req.params.id}`);
    
})
module.exports={getWatches,showWatch,reviewForWatch,deleteReviewOfWatch,editReviewOfWatch,renderEditReviewPage};