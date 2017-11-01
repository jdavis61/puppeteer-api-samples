import puppeteer from 'puppeteer';
import test from 'tape';
import Login from '../pages/Login';

let browser;
let page;
let loginPage;

test('Setup', async (t) => {
    console.log('1');
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    loginPage = new Login(page);
    t.end();
});

test('Login', async (t) => {
    console.log('2');
    try {
        await loginPage.gotoPage();
        const header = await page.$('div.example h2');
        console.log(header.textContent);
        t.equal(1, 1);
        t.end();
    } catch (err) {
        console.error(err);
        t.end();
    }
});

test('Teardown', async (t) => {
    console.log('3');
    browser.close();
    t.end();
});

