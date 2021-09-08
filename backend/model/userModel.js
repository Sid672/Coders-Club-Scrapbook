import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
            required: false,
        },

        profileImage: {
            type: String,
            required: false,
            default:'/uploads/default.png'
        },

        username: {
            type: String,
            required: true,
            unique: true,
        },

        social: {
            type: Object,
            github: {
                type: String,
                required: false,
            },
            linkedin: {
                type: String,
                required: false,
            },
            instagram: {
                type: String,
                required: false,
            },
        },

        posts:  [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post'
            }
        ],

        interests: {
            type: [String],
            
        }
    },
    {
        timestamps: true,
    }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);
export default User;
