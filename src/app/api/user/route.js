const express = require('express');
const router = express.Router();
const User = require('../../models/user');

// create a user
router.post('/user', async (req, res) => {
    try {
        const user = await User.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// update a user
router.put('/user/:id', async (req, res) => {
    try {
        const user = await User.updateUser(req.params.id, req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get a user
router.get('/user/:id', async (req, res) => {
    try {
        const user = await User.getUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// login a user
router.post('/user/login', async (req, res) => {
    try {
        const user = await User.loginUser(req.body.email, req.body.password);
        res.status(200).json(user);
    } catch (error) {
        if (error.message === 'User not found') {
            res.status(404).json({ error: error.message });
        } else if (error.message === 'Invalid password') {
            res.status(401).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
});

// logout a user
router.post('/user/logout', async (req, res) => {
    try {
        await User.logoutUser();
        res.status(200).json({ message: 'User logged out' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get user by email using model function
router.get('/user/email/:email', async (req, res) => {
    try {
        const user = await User.getUserByEmail(req.params.email);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;


