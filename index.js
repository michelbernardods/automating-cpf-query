const puppeteer = require('puppeteer');

const validateCpf = async (cpf) => {

    const site = await puppeteer.launch({
        // headless: false 
        // if beheaded receive true then the browser shows in the query
    });

    const page = await site.newPage()
    await page.goto('https://www.situacao-cadastral.com');
    await page.waitFor('input[name="doc"]');
    await page.type('input[name="doc"]', cpf, { delay: 185 });
    await page.keyboard.press('Enter');
    await page.waitFor('#corpo > tbody > tr:nth-child(2) > td');
    await page.screenshot({ path: `cpf - ${cpf}.png` });
    await site.close();
}


console.log('Consultando CPFs');
console.log('');
console.log('-------------------');


module.exports = validateCpf;