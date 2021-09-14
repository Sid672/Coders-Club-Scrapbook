import express from 'express';

const router = express.Router();
import {
    authUser,
    getAllUsers,
    getUserByUsername,
    getUserProfile,
    registerUser,
    updateUserProfile,
} from '../controllers/usersController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(getAllUsers);
router.post('/login', authUser);
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

router.route('/profile/:username').get(getUserByUsername);
export default router;
