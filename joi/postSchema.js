import Joi from 'joi';

const postSchema = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    content: Joi.string().min(5).required(),
    image: Joi.string().uri().optional,
    
});

export default postSchema;