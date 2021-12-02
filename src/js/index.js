const dotenv = require('dotenv');
const { User, Role } = require('./models');
const { sequelize } = require('./models/user');

dotenv.config(); // Load .env

(async () => {
    try {
        await User.sync();
        await Role.sync();

        const analystRole = await Role.create({ name: 'analyst' });
        const expertRole = await Role.create({ name: 'expert' });

        const user = await User.create({
            username: 'User',
            email: 'email@email.com',
            password: 'password',
            role: 1
        });

        console.log(user);

        await sequelize.drop();
    } catch (e) {
        console.log(e);
    }
})();