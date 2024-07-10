
const LoginPage = require('./../po/pages/login.page');
const credentials = require('./../data/credentials'); 
const logger = require('./../utils/logger');


describe('SauceDemo Login Tests', () => {

    beforeEach(  () => {
        LoginPage.open();
    });

    it('should show error for empty credentials',  () => {
         LoginPage.login('test', 'test');
         LoginPage.clearInputs();
         LoginPage.btnLogin.click();
         expect(LoginPage.errorMessage).toHaveText('Username is required');
         logger.info('Checked error message for empty credentials');
    });

    it('should show error for missing password',  () => {
       LoginPage.inputUsername.setValue('test');
       LoginPage.inputPassword.setValue('test');
       LoginPage.inputPassword.clearValue();
       LoginPage.btnLogin.click();
       expect(LoginPage.errorMessage).toHaveText('Password is required');
       logger.info('Checked error message for missing password');
    });

    it('should login with valid credentials',  () => {
       LoginPage.login(credentials.validUser.username, credentials.validUser.password);
       expect(browser).toHaveTitle('Swag Labs');
        logger.info('Logged in with valid credentials and checked the title');
    });
});
