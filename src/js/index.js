const dotenv = require('dotenv');
const { User, Role, Survey, Expert, Question, Response } = require('./models');
const db = require('./lib/db');

dotenv.config(); // Load .env

(async () => {
  try {
    await User.sync();
    await Role.sync();
    await Survey.sync();
    await Expert.sync();
    await Question.sync();
    await Response.sync();

    const analystRole = await Role.create({ name: 'analyst' });
    const expertRole = await Role.create({ name: 'expert' });

    const user = await User.create({
      username: 'User',
      email: 'email@email.com',
      password: 'password',
      role: 1,
    });

    console.log(user);

    await db.drop();
  } catch (e) {
    console.log(e);
  }
})();
