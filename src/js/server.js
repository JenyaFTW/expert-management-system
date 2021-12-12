const express = require('express');
const app = express();
const models = require('./models');

const surveysRouter = require('./routes/surveys');

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
    }
    
    return res.json({ 'message': 'Invalid username/password.' });
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
    }

    return res.json({ 'message': 'Failed to register user.' });
});

// app.get('/surveys', async (req, res) => {
//     // Check if authenticated

//     const surveys = await models.Survey.findAll();
//     return res.json(surveys);
// });

// app.post('/surveys', async (req, res) => {
//     // Check if authenticated

//     const { user } = 0; // ID of authenticated user
//     const { name, description, open, close } = req.data;

//     const survey = await models.Survey.create({ name, description, open, close, user });

//     if (survey) {
//         return res.json(survey);
//     }

//     return res.json({ 'message': 'Failed to create survey.' });
// });

// app.get('/surveys/:id', async (req, res) => {
//     // Check if authenticated

//     const id = req.params.id;
//     const survey = await models.Survey.findOne({ id }); // Populate questions
    
//     if (survey) {
//         return res.json(survey);
//     }
    
//     return res.status(404).json({ 'message': 'Survey not found' });
// });

// app.delete('/surveys/:id', async (req, res) => {
//     // Check if authenticated and owner of survey

//     const id = req.params.id;
//     const survey = await models.Survey.findOne({ id });
    
//     if (await survey.destroy()) {
//         return res.json({ 'message': 'Successfully deleted survey' });
//     }

//     return res.status(404).json({ 'message': 'Problem with deleting survey' });
// });

// app.get('/surveys/:id/responses', async (req, res) => {
//     // Check if owner of survey

//     const id = req.params.id;
//     const responses = await models.Response.findAll({ survey: id }); // Populate

//     if (responses) {
//         return res.json(responses);
//     }

//     return res.status(404).json({ 'message': 'Survey/responses not found' });
// });

app.get('/reports', async (req, res) => {
    // Check if authenticated

    const reports = await models.Report.findAll();

    if (reports) {
        return res.json(reports);
    }
    
    returnres.json({ 'message': 'Failed to find reports' });
});

// app.post('/surveys/:id/reports', async (req, res) => {
//     // Check if authenticated

//     const id = req.params.id;
//     const { text, date } = req.data;

//     const user = 0; // Authenticated user ID

//     const report = await models.Report.create({
//         text,
//         date,
//         survey: id,
//         user
//     });

//     if (report) {
//         return res.json(report);
//     }

//     return res.json({ 'message': 'Failed to create report' });
// });

// app.delete('/surveys/:sid/reports/:id', async (req, res) => {
//     const { id, sid } = req.params;
//     const report = await models.Report.findOne({
//         survey: sid,
//         id
//     });

//     if (await report.destroy()) {
//         return res.json({ 'message': 'Successfully deleted report' });
//     }

//     return res.status(404).json({ 'message': 'Problem with deleting report' });
// });

app.use('/surveys', surveysRouter);

module.exports = app;