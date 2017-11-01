

import BasePage from './BasePage';

class Logout extends BasePage {

    async logout() {
        await this.page.click('.radius > i');
        await this.page.waitForNavigation();
    }

}
module.exports = Logout;
