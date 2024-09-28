const Review=require('../models/reviewSchema.js');
const wrapAsync=require('../utils/wrapAsync.js');


const getTestimonial=async(req,res)=>{
    const allReviews= await Review.find({});
    res.render('ejsFiles/testimonial.ejs',{allReviews});
};

const postTestimonial=async(req,res)=>{
    if(req.body){
        const newReview= await new Review({
            comment:req.body.comment,
            rating:req.body.rating,
            author:req.body.author,
        })
        
     await newReview.save();
     req.flash('success',"Thank you for your valuable Feedback!");
     res.redirect("/testimonial");
    }
    else{
    req.flash('error',"Ah! Something Went Wrong");
    res.redirect('/testimonial');
}
};

const editTestimonial=async(req,res)=>{
    const updateReview= await Review.findByIdAndUpdate({_id:req.params.reviewId},{
     comment:req.body.comment,
     rating:req.body.rating,
     author:req.body.author,
    });
    req.flash("success","Your Comment has been updated!");
    res.redirect('/testimonial');
};

const deleteTestimonial=async(req,res)=>{
    const deletedReview= await Review.findByIdAndDelete(req.params.reviewId);
    req.flash("success","Your Review has been successfully deleted!");
    res.redirect('/testimonial');
};

const editTestimonialPage=async(req,res)=>{
    const editReview= await Review.findById(req.params.reviewId);
    res.render('ejsFiles/reviewForm.ejs',{editReview});
};

module.exports={getTestimonial,postTestimonial,editTestimonial,deleteTestimonial,editTestimonialPage};