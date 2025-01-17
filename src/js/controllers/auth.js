'use strict';

const models = require('../models');

exports.authLogin = async (req, res) => {
    const { username, password } = req.body;

    // Input validation in future

    const user = await models.User.findOne({
        username,
        password
    });

    if (user) {
        return res.json({ 'message': 'Successfully logged in.' });
        // JWT token stuff
    }
    
    return res.json({ 'message': 'Invalid username/password.' });
}

exports.authSignup = async (req, res) => {
    const { email, username, password } = req.body;

    // Input validation in future

    const user = await models.User.create({
        email,
        username,
        password,
        role: 1
    });

    if (user) {
        return res.json({ 'message': 'Successfully registered user.' });
    }

    return res.json({ 'message': 'Failed to register user.' });
}