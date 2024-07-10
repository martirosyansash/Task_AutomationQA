const Page = require('./page');

class LoginPage extends Page {
    get inputUsername () { return $('//input[@id="user-name"]'); }
    get inputPassword () { return $('//input[@id="password"]'); }
    get btnLogin () { return $('//input[@id="login-button"]'); }
    get errorMessage () { return $('//h3[@data-test="error"]'); }

    open () {
        return super.open();
    }

  login(username, password) {
        
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnLogin.click();
    }

    clearInputs () {
        this.inputUsername.clearValue();
        this.inputPassword.clearValue();
    }
}

module.exports = new LoginPage();
