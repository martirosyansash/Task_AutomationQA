const LoginPage = require('../po/pages/login.page');
const credentials = require('../data/credentials');
const logger = require('../utils/logger');

describe('SauceDemo Login Success Tests', () => {

    beforeEach(() => {
        LoginPage.open();
        logger.info('Opened login page');
    });

    it('should login with valid credentials', () => {
        LoginPage.login(credentials.validUser.username, credentials.validUser.password);
        expect(browser).toHaveTitle('Swag Labs');
        logger.info('Logged in with valid credentials and checked the title');
    });

});
