'use strict';

const models = require('../models');

// GET
exports.getAllSurveys = async (req, res) => {
    // Check if authenticated

    const surveys = await models.Survey.findAll();
    return res.json(surveys);
}

// POST
exports.createSurvey = async (req, res) => {
    // Check if authenticated

    const { user } = 0; // ID of authenticated user
    const { name, description, open, close } = req.data;

    const survey = await models.Survey.create({ name, description, open, close, user });

    if (survey) return res.json(survey);
    return res.json({ 'message': 'Failed to create survey.' });
}

// GET
exports.getSurveyById = async (req, res) => {
    // Check if authenticated

    const id = req.params.id;
    const survey = await models.Survey.findOne({ id }); // Populate questions
    
    if (survey) return res.json(survey);
    return res.status(404).json({ 'message': 'Survey not found' });
}

// DELETE
exports.deleteSurveyById = async (req, res) => {
    // Check if authenticated and owner of survey

    const id = req.params.id;
    const survey = await models.Survey.findOne({ id });
    
    if (await survey.destroy()) {
        return res.json({ 'message': 'Successfully deleted survey' });
    }

    return res.status(404).json({ 'message': 'Problem with deleting survey' });
}

// GET
exports.getSurveyResponses = async (req, res) => {
    // Check if owner of survey

    const id = req.params.id;
    const responses = await models.Response.findAll({ survey: id }); // Populate

    if (responses) return res.json(responses);
    return res.status(404).json({ 'message': 'Survey/responses not found' });
}

// POST
exports.createSurveysReport = async (req, res) => {
    // Check if authenticated

    const id = req.params.id;
    const { text, date } = req.data;

    const user = 0; // Authenticated user ID

    const report = await models.Report.create({
        text,
        date,
        survey: id,
        user
    });

    if (report) return res.json(report);
    return res.json({ 'message': 'Failed to create report' });
}

// DELETE
exports.deleteSurveyReportById = async (req, res) => {
    // Check if authenticated
    
    const { id, sid } = req.params;
    const report = await models.Report.findOne({
        survey: sid,
        id
    });

    if (await report.destroy()) {
        return res.json({ 'message': 'Successfully deleted report' });
    }

    return res.status(404).json({ 'message': 'Problem with deleting report' });
}