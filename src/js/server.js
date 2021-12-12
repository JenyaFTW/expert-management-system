const express = require('express');
const app = express();

const authRouter = require('./routes/auth');
const surveysRouter = require('./routes/surveys');

app.use(express.json());

app.use('/', homeRouter);
app.use('/auth', authRouter);
app.use('/surveys', surveysRouter);

module.exports = app;