import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import UserModel from '../models/UserModel.js';

const UserLogin = async (req, res) => {
    const { dtoken } = req.body;
    try {
        // Find the user by token
        const user = await UserModel.findOne({ 'token': dtoken });

        if (!user) {
            // If user doesn't exist, create a new user
            const newUser = new UserModel({ token: dtoken });
            await newUser.save();
        }

        // Send a response indicating success and redirect URL
        res.json({success:true})
    } catch (error) {
        console.error('Error handling user login:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

export { UserLogin };
