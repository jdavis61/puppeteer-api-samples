import puppeteer from 'puppeteer';
import test from 'tape';
import Login from '../pages/Login';
import Logout from '../pages/Logout';

let browser;
let page;
let loginPage;
let logoutPage;

test('Setup', async (t) => {
    console.log('1');
    browser = await puppeteer.launch({headless: false});
    page = await browser.newPage();

    loginPage = new Login(page);
    logoutPage = new Logout(page);
    t.end();
});

test('Login', async (t) => {
    console.log('2');
    await loginPage.gotoPage();

    await loginPage.enterUsername('tomsmith');
    await loginPage.enterPassword('SuperSecretPassword!');
    await page.screenshot({path: 'screenshot1.png'});

    const loginButton = await page.evaluate(() => document.querySelector('div.example h2'));
    console.log(loginButton.textContent);

    await loginPage.submitLoginForm();
    await page.screenshot({path: 'screenshot2.png'});

    await logoutPage.logout();
    await page.screenshot({path: 'screenshot3.png'});

    await loginPage.enterUsername('codertest');
    await page.screenshot({path: 'screenshot4.png'});
    t.equal(1, 1);
    t.end();
});

test('Teardown', async (t) => {
    console.log('3');
    browser.close();
    t.end();
});

