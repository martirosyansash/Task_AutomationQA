const LoginPage = require('../po/pages/login.page');
const logger = require('../utils/logger');
const credentials = require('../data/credentials');

describe('SauceDemo Login Error Tests', () => {

    beforeEach(() => {
        LoginPage.open();
        logger.info('Opened login page');
    });
     it('should show error for empty credentials', () => {
         LoginPage.login(credentials.emptyUser.username, credentials.emptyUser.password);
         LoginPage.clearInputs();
         LoginPage.btnLogin.click();
         expect(LoginPage.errorMessage).toHaveText('Username is required');
         logger.info('Checked error message for empty credentials');
    });

    it('should show error for missing password', () => {
       LoginPage.login(credentials.missingPassword.username, credentials.missingPassword.password);
       LoginPage.btnLogin.click();
       expect(LoginPage.errorMessage).toHaveText('Password is required');
       logger.info('Checked error message for missing password');
    });


    it('should show error for invalid credentials', () => {
       LoginPage.login(credentials.invalidUser.username, credentials.invalidUser.password);
       expect(LoginPage.errorMessage).toHaveTextContaining('Epic sadface');
       logger.info('Checked error message for invalid credentials');
    });

});
