"use strict";

import BasePage from './BasePage';

class Login extends BasePage {

    async gotoPage() {
        await this.page.goto('http://localhost:9292/login');
    }

    async enterUsername(username) {
        await this.page.focus('input[name=\'username\']');
        this.page.type(username);
    }

    async enterPassword(password) {
        await this.page.focus('input[name=\'password\']');
        this.page.type(password);
    }

    async submitLoginForm() {
        this.page.click('#login > button');
        await this.page.waitForNavigation();
    }

}
module.exports = Login;