'use strict';
const { getMaxListeners } = require("superagent");
const request = require("supertest");
const app = require("../server.js");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test the reports", () => {
  test("It should report", async () => {
    const response = await request(app).get("/reports");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test the auth", () => {
  test("It should authenticate log in", async () => {
    const response = await request(app).post("/auth/authLogin", {
      username: 'artem', password: 1234
    });
    expect(response.data).toBe({ 'message': 'Successfully logged in.' });
  });
  test("It should authenticate signup", async () => {
    const response = await request(app).post("/auth/authSignup", {
      email: 'artem@gmail.com',
      username: 'artem',
      password: 1234,
      role: 1
  });
    expect(response.data).toBe({ 'message': 'Successfully registered user.' });
  });
});

describe("Test the surveys", () => {
  test("It should find all surveys", async () => {
    const response = await request(app).get("/surveys/getAllSurveys");
    expect(response.statusCode).toBe(200);
  });
  test("It should create survey", async () => {
    const response = await request(app).get("/surveys/createSurvey", { 
      name: 'artem', 
      description: asdasd, 
      open: 123, 
      close: 123, 
      user: 1
    });
    expect(response.statusCode).toBe(200);
  });
  test("It should find survey by id", async () => {
    const response = await request(app).get("/surveys/getSurveyById", { id: 1 });
    expect(response.statusCode).toBe(200);
  });
  test("It should delete survey by id", async () => {
    const response = await request(app).get("/surveys/deleteSurveyById", { id: 1 });
    expect(response.data).toBe({ 'message': 'Successfully deleted survey' });
  });
  test("It should find survey responses", async () => {
    const response = await request(app).get("/surveys/getSurveyResponses", { survey: 1 });
    expect(response.statusCode).toBe(200);
  });
  test("It should create a survey report", async () => {
    const response = await request(app).get("/surveys/createSurveysReport", {
      text: '123',
      date: '123123',
      survey: 1,
      user: 1
  });
    expect(response.statusCode).toBe(200);
  });
  test("It should delete a survey report by id", async () => {
    const response = await request(app).get("/surveys/deleteSurveyReportById", {
      survey: 12,
      id: 1
  });
    expect(response.data).toBe({ 'message': 'Successfully deleted report' });
  });
});

describe("Test the home", () => {
  test("It should ", async () => {
    const response = await request(app).get("/home/homeGreeting");
    expect(response.data).toBe('Foxpoll API v1');
  });
  test("It should get all reports", async () => {
    const response = await request(app).get("/home/getAllReports");
    expect(response.statusCode).toBe(200);
  });
});