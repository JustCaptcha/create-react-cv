const puppeteer = require('puppeteer');
// const {person} = require('./person');
// import { person } from './person';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.pdf({path: `./pdf/myCV.pdf`, format: 'A4', printBackground: true});
    await browser.close();
})()