import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please add some description'],
            trim: true,
        },

        tags: {
            type: [String],
        },

        userInfo: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Post', PostSchema);
