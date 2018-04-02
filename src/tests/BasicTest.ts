import * as puppeteer from 'puppeteer';
import * as test from 'tape';
import {Login} from '../pages/Login';

// https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4

let browser;
let page;
let loginPage;

test('Basic Setup', async (assert) => {
    console.log('1');
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    loginPage = new Login(page);
    assert.end();
});

test('Should Login', async (assert) => {
    console.log('2');
    try {
        await loginPage.gotoPage();
        const header = await page.$('div.example h2');
        console.log(header.textContent);
        assert.equal(1, 1, 'one equals one');
        assert.end();
    } catch (err) {
        console.error(err);
        assert.end();
    }
});

test('Teardown', async (assert) => {
    console.log('3');
    browser.close();
    assert.end();
});

