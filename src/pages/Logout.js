

import BasePage from './BasePage';

class Logout extends BasePage {

    async logout() {
        await this.page.click('#content > div > a');
        await this.page.waitForNavigation();
    }

}
module.exports = Logout;
