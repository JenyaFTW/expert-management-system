'use strict';

const express = require('express');

const authController = require('../controllers/auth');
const authRouter = express.Router();

/**
 * 
 * /auth... 
 * 
 */

authRouter.route('/login')
    .post(authController.authLogin);

authRouter.route('/signup')
    .post(authController.authSignup)

module.exports = authRouter;
