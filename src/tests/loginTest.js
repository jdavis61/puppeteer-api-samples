import puppeteer from 'puppeteer';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import test from 'tape';

let browser, page, loginPage, logoutPage;

test('Setup', async t => {
    console.log('1');
    browser = await puppeteer.launch();
    page = await browser.newPage();
    loginPage = new Login(page);
    logoutPage = new Logout(page);
    t.end();
})

test('Login', async t => {
    console.log('2');

    await loginPage.gotoPage();
    loginPage.hello('programmer');
    logoutPage.hello();
    await loginPage.enterUsername('tomsmith');
    await loginPage.enterPassword('SuperSecretPassword!');
    await page.screenshot({path: 'screenshot1.png'});
    
    await loginPage.submitLoginForm();
    await page.screenshot({path: 'screenshot2.png'});

    await logoutPage.logout();
    await page.screenshot({path: 'screenshot3.png'});

    await loginPage.enterUsername('codertest');
    await page.screenshot({path: 'screenshot4.png'});
    
    t.end();
});

test('Teardown', async t => {
    console.log('3');
    browser.close();
    t.end();
})
