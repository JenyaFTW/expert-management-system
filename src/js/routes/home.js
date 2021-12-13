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
    .get(homeController.homeGreeting);

homeRouter.route('/reports')
    .get(homeController.getAllReports)

module.exports = homeRouter;