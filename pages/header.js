'use strict';

let { I } = inject();
let assert = require('assert');

module.exports = {

    loginMenuItem: '.s-header-item__link--login',
    createNewAccountMenuItem: '.s-nav-item-signup a',
    usernameMenuItem: '.s-header-item__link--user span',

    loginForm: {
        loginFormLoginField: '.b-loginform-field .b-loginform-field__input--user',
        loginFormPasswordField: '.b-loginform-field #lj_loginwidget_password',
        loginFormLoginButton: '.b-loginform__form.pkg .b-loginform-btn--login'
    },

    openLoginFormAndSubmit(login, password) {
        I.click(this.loginMenuItem);
        I.fillField(this.loginForm.loginFormLoginField, login);
        I.fillField(this.loginForm.loginFormPasswordField, password);
        I.click(this.loginForm.loginFormLoginButton);
    },

    async getUsernameFromHeader() {
        I.waitForElement(this.usernameMenuItem,5);
        let username = await I.grabTextFrom(this.usernameMenuItem);
        return username.toUpperCase();
    }
}
