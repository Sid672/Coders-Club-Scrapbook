import User from '../model/userModel.js';
import asyncHandler from 'express-async-handler';

import generateToken from '../utils/generateToken.js';
import ErrorResponse from '../utils/errorResponse.js';

const authUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            token: generateToken(user._id),
        });
    } else {
        next(new ErrorResponse('Invalid email or password', 401));
    }
});

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, username, tags, bio, image } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

        const removeHtml = (str) => {
        return str.replace(/(<([^>]+)>)/gi, '');
    };

    const user = await User.create({
        name,
        email,
        password,
        username,
        interests: tags,
        profileImage: image,
        bio,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            token: generateToken(user._id),
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

//Private

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).populate('posts');

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            bio: user.bio,
            username: user.username,
            social: user.social,
            posts: user.posts,
            interests: user.interests,
            profileImage: user.profileImage,
        });

        console.log(user);
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

const getUserByUsername = asyncHandler(async (req, res) => {
    const user = await User.findOne({ username: req.params.username }).populate(
        'posts'
    );

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            bio: user.bio,
            username: user.username,
            social: user.social,
            posts: user.posts,
            interests: user.interests,
            profileImage: user.profileImage,
        });

        console.log(user);
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    const removeHtml = (str) => {
        return str.replace(/(<([^>]+)>)/gi, '');
    };
    if (user) {
        user.name = removeHtml(req.body.name) || user.name;
        user.profileImage = req.body.image || user.profileImage;
        user.interests = req.body.interests || user.interests;
        user.bio = removeHtml(req.body.bio) || user.bio;
        // if (req.body.password) {
        //     user.password = req.body.password;
        // }

        

        const updatedUser = await user.save();
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            interests: updatedUser.interests,
            bio: updatedUser.bio,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

export {
    authUser,
    getUserProfile,
    registerUser,
    updateUserProfile,
    getUserByUsername,
};
