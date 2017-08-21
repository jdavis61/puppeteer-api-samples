"use strict";

import BasePage from './BasePage';

class Logout extends BasePage {

    constructor(page) {
        super(page);
    }

    async logout() {
        await this.page.click('#content > div > a');
        await this.page.waitForNavigation();
    }

}
module.exports = Logout;