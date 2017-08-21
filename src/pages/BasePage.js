"use strict";

class BasePage {
    
    constructor(page) {
        this.page = page;
    }

    hello(name = 'coder') {
        console.log(`Hello ${name}`);
    }
    
}
module.exports = BasePage;