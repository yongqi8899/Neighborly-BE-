import mongoose from 'mongoose'
const { Schema, model } = mongoose;

const postModel = new Schema({

    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type:String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
});

const Post = model('Post', postModel);
export default Post;