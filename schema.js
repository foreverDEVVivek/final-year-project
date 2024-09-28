const Joi = require('joi');

const querySchema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    number: Joi.string().pattern(/^[0-9]+$/).min(10).max(12).required(), // Ensures number is digits-only
    email: Joi.string().email().required(), // Validates email format
    message: Joi.string().min(5).max(255).required(),
}).required();

const testimonialSchema= Joi.object({
    comment:Joi.string().min(3).max(255).required(),
    rating:Joi.string().min(1).max(5).required(),
    author:Joi.string().min(5).max(255).required()
}).required();

const watchReviewSchema= Joi.object({
    comment:Joi.string().min(3).max(255).required(),
    rating:Joi.string().min(1).max(5).required(),
    author:Joi.string().min(5).max(255).required()
}).required();

const signInSchema=Joi.object({
    username:Joi.string().required(),
    password:Joi.string().alphanum().min(8).max(255).required(),
    email:Joi.string().email().required(), // Validates email format
}).required();


module.exports = {querySchema,testimonialSchema,watchReviewSchema,signInSchema};
