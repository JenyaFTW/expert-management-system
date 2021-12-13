'use strict';

const express = require('express');

const homeController = require('../controllers/home');
const homeRouter = express.Router();

/**
 * 
 * /... 
 * 
 */

homeRouter.route('/')
    .post(homeController.homeGreeting);

homeRouter.route('/reports')
    .get(homeController.getAllReports)

module.exports = homeRouter;