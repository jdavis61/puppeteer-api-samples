import {BasePage} from './BasePage';

export class Login extends BasePage {

    async gotoPage() {
        await this.page.goto('http://the-internet.herokuapp.com/login');
    }

    async enterUsername(username) {
        const usernameSelector = 'input[name=\'username\']';

        await this.page.focus(usernameSelector);

        this.page.type(usernameSelector, username);
    }

    async enterPassword(password) {
        const passwordSelector = 'input[name=\'password\']';

        await this.page.focus(passwordSelector);

        this.page.type(passwordSelector, password);
    }

    async submitLoginForm() {
        this.page.click('#login > button');

        await this.page.waitForNavigation();
    }

}
