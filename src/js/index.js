const dotenv = require('dotenv');
const { User, Role, Survey, Expert, Question, Response, Report } = require('./models');
const server = require('./lib/server');

dotenv.config();

(async () => {
  try {
    [User, Role, Survey, Expert, Question, Response, Report].forEach(async model => await model.sync());
    
    const EXPRESS_PORT = process.env.EXPRESS_PORT || 8080;
    
    server.listen(EXPRESS_PORT, () => {
      console.log(`Server listening on http://localhost:${EXPRESS_PORT}`);
    });
  } catch (error) {
    throw error;
  }
})();
