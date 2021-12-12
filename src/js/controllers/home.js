'use strict';

const models = require('../models');

// GET
exports.homeGreting = async (req, res) => {
    res.send('Foxpoll API v1');
}

// GET
exports.getAllReports = async (req, res) => {
    // Check if authenticated

    const reports = await models.Report.findAll();

    if (reports) return res.json(reports);
    returnres.json({ 'message': 'Failed to find reports' });
}