import asyncHandler from 'express-async-handler';

import Post from '../model/postModel.js';
import User from '../model/userModel.js';
import ErrorResponse from '../utils/errorResponse.js';

export const getPosts = asyncHandler(async (req, res, next) => {
    const posts = await Post.find().sort({createdAt: 'desc'}).populate('userInfo', {
        username: 1,
        name: 1,
        profileImage: 1
    });
    res.status(200).json({
        success: true,
        count: posts.length,
        data: posts,
    });

});

//*******************NOT REQUIRED FOR NOW****************** */

export const getPost = asyncHandler(async (req, res, next) => {
    const post = await Post.findById(req.params.id);
    res.status(200).json({
        success: true,
        msg: `Display post ${req.params.id}`,
    });
    if (!post) {
        next(
            new ErrorResponse(`Post not found with id of ${req.params.id}`, 404)
        );
    }
});

// export const createPost = asyncHandler(async (req, res, next) => {
//     const { text, tags } = req.body;
//     const userId = req.user._id;

//     let post = new Post({
//         text,
//         tags,
//         userId,
//     });

//     // console.log(post._id);
//     // const founduser = await User.findById(userId);

//     // console.log(founduser.posts);
//     // post.save().then(() => {
//     //     Post.populate(post, { path: 'user', select: 'username' }).then(() => {
//     //         res.status(200).json({
//     //             success: true,
//     //             data: post,
//     //         });
//     //     });
//     // });

//     await post.save()
//     await Post.populate(post, { path: 'user', select: 'username' })

//     res.status(200).json({
//         success: true,
//         data: post,
//     });
// });

export const createPost = asyncHandler(async (req, res, next) => {
    const { text, tags } = req.body;
    const userId = req.user._id;

    const post = await Post.create({
        text,
        tags,
        userInfo: userId,
    });

    const user = await User.findById(userId);
    await user.posts.push(post._id);
    await user.save();

    const postToPopulate = await Post.findById(post._id).populate('userInfo', {
        username: 1,
        name: 1,
    });
    console.log(postToPopulate);
    await postToPopulate.save();

    // console.log(founduser.posts);
    // post.save().then(() => {
    //     Post.populate(post, { path: 'user', select: 'username' }).then(() => {
    //         res.status(200).json({
    //             success: true,
    //             data: post,
    //         });
    //     });
    // });

    // await post.save();
    // await Post.populate(post, { path: 'user', select: 'username' });

    res.status(200).json({
        success: true,
        data: postToPopulate,
    });
});

export const updatePost = asyncHandler(async (req, res, next) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!post) {
        return next(
            new ErrorResponse(`Post not found with id of ${req.params.id}`, 404)
        );
    }
    res.status(200).json({
        success: true,
        data: post,
    });
});

export const deletePost = asyncHandler(async (req, res, next) => {

    // const post = await Post.findByIdAndDelete(req.params.id);
    // if (!post) {
    //     return next(
    //         new ErrorResponse(`Post not found with id of ${req.params.id}`, 404)
    //     );
    // }
    // res.status(200).json({
    //     success: true,
    //     data: {},
    // });
});
