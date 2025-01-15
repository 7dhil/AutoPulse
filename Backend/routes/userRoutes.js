import express from 'express';
import User from '../models/UserModel.js';

const router = express.Router();

// Registration endpoint
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate key error (email already exists)
            res.status(400).json({ message: 'Email already in use' });
        } else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});

export default router;
