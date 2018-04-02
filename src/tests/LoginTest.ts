import * as puppeteer from 'puppeteer';
import * as test from 'tape';
import {Login} from '../pages/Login';
import {Logout} from '../pages/Logout';

let browser;
let page;
let loginPage;
let logoutPage;

test('Login Setup', async (assert) => {
    console.log('1');
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();

    loginPage = new Login(page);
    logoutPage = new Logout(page);
    assert.end();
});

test('Login', async (assert) => {
    console.log('2');
    await loginPage.gotoPage();

    await loginPage.enterUsername('tomsmith');
    await loginPage.enterPassword('SuperSecretPassword!');
    await page.screenshot({ path: 'test-screenshots/screenshot1.png' });

    const loginButton = await page.evaluate(() => document.querySelector('div.example h2'));
    console.log(loginButton.textContent);

    await loginPage.submitLoginForm();
    await page.screenshot({ path: 'test-screenshots/screenshot2.png' });

    await logoutPage.logout();
    await page.screenshot({ path: 'test-screenshots/screenshot3.png' });

    await loginPage.enterUsername('codertest');
    await page.screenshot({ path: 'test-screenshots/screenshot4.png' });
    assert.equal(1, 1);
    assert.end();
});

test('Teardown', async (assert) => {
    console.log('3');
    browser.close();
    assert.end();
});

// "tslint": "^5.8.0",
//     "typescript": "^2.5.3"
