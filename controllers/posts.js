import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import Post from "../models/Post.js";

export const getPosts = asyncHandler( async(req, res, next) =>{
    const posts = await Post.find();

    res.status(200).json(posts);
});

export const createPost = asyncHandler( async (req, res, next) =>{

    const { title , content, image } = req.body;

    const newPost = await Post.create({ title, content, image, author: req.user._id });
    res.status(200).json(newPost);
});

export const getPost = asyncHandler( async (req, res, next) =>{

    const post = await Post.findById(req.params.id)

    if (!post) throw new ErrorResponse("Post not found!", 404);

    res.status(200).json(post)
});

export const updatePost = asyncHandler(async (req, res, next) => {
    
    const { title, content, image } = req.body;

    const post = await Post.findById(req.params.id);

    if (!post) throw new ErrorResponse('Post not found!', 404);

    if (post.author.toString() !== req.user._id.toString()) {
        return next(new ErrorResponse('Not authorized to update this post', 401));
    }

    post.title = title || post.title;
    post.content = content || post.content;
    post.image = image || post.image;

    await post.save();

    res.status(200).json(post);
});

export const deletePost = asyncHandler(async (req, res, next) =>{

    const post = await Post.findById(req.params.id);

    if (!post) throw new ErrorResponse('Post not found!', 404);

    if (post.author.toString() !== req.user._id.toString()) {
        return next(new ErrorResponse('Not authorized to delete this post', 401));
    }

    await post.remove();


    res.status(200).json({ message: 'Post deleted successfully' });

});