const express = require('express');
const app = express();
const models = require('../models');

app.use(express.json());

app.get('/', async (req, res) => {
    res.send('Foxpoll API v1');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Input validation in future

    const user = await models.User.findOne({
        username,
        password
    });

    if (user) {
        return res.json({ 'message': 'Successfully logged in.' });
        // JWT token stuff
    } else {
        return res.json({ 'message': 'Invalid username/password.' });
    }
});

app.post('/signup', async (req, res) => {
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
    } else {
        return res.json({ 'message': 'Failed to register user.' });
    }
});

app.get('/surveys', async (req, res) => {
    // Check if authenticated

    const surveys = await models.Survey.findAll();
    return res.json(surveys);
});

app.get('/surveys/:id', async (req, res) => {
    // Check if authenticated

    const id = req.params.id;
    const survey = await models.Survey.findOne({ id }); // Populate questions
    
    if (survey) {
        return res.json(survey);
    } else {
        return res.status(404).json({ 'message': 'Survey not found' });
    }
});

app.delete('/surveys/:id', async (req, res) => {
    // Check if authenticated and owner of survey

    const id = req.params.id;
    const survey = await models.Survey.findOne({ id });
    
    if (await survey.destroy()) {
        return res.json({ 'message': 'Successfully deleted survey' });
    } else {
        return res.status(404).json({ 'message': 'Problem with deleting survey' });
    }
});

app.get('/surveys/:id/responses', async (req, res) => {
    // Check if owner of survey

    const id = req.params.id;
    const responses = await models.Response.findAll({ survey: id }); // Populate

    if (responses) {
        return res.json(responses);
    } else {
        return res.status(404).json({ 'message': 'Survey/responses not found' });
    }
});

module.exports = app;