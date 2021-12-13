'use strict';

const express = require('express');

const surveysController = require('../controllers/surveys');
const surveysRouter = express.Router();

/**
 * 
 * /surveys... 
 * 
 */

surveysRouter.route('/')
    .get(surveysController.getAllSurveys)
    .post(surveysController.createSurvey);

surveysRouter.route('/:id')
    .get(surveysController.getSurveyById)
    .delete(surveysController.deleteSurveyById);

surveysRouter.route('/:id/responses')
    .get(surveysController.getSurveyResponses);

surveysRouter.route('/:id/reports')
    .post(surveysController.createSurveysReport);

surveysRouter.route('/:sid/reports/:id')
    .delete(surveysController.deleteSurveyReportById);

module.exports = surveysRouter;