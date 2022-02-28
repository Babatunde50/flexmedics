import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';
import handlebars from 'handlebars';
import { reservations } from '@prisma/client';
import format from 'date-fns/format';

export async function createPDF(data: reservations) {
  const templateHtml = fs.readFileSync(
    path.join(__dirname, 'invoice.html'),
    'utf8'
  );

  const template = handlebars.compile(templateHtml);

  const html = template({
    name: data.firstName + ' ' + data.lastName,
    dob: data.dateOfBirth,
    receivedDateDay: format(data.createdAt, 'yyyy-MM-dd'),
    receivedDateTime: format(data.createdAt, 'HH-mm-ss'),
    completedDateDay: format(new Date(), 'yyyy-MM-dd'),
    completedDateTime: format(new Date(), 'HH-mm-ss'),
    passportNumber: data.passportNumber,
    gender: data.gender,
    result: data.status,
  });

  const options = {
    width: '1230px',
    headerTemplate: '<p></p>',
    footerTemplate: '<p></p>',
    displayHeaderFooter: false,
    margin: {
      top: '10px',
      bottom: '30px',
      right: '50px',
      left: '50px',
    },
    printBackground: true,
    // path: pdfPath,
    format: 'A4',
  };

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-sandbox',
    ],
  });

  const page = await browser.newPage();

  await page.goto(`data:text/html;charset=UTF-8,${html}`, {
    waitUntil: 'networkidle0',
  });

  // @ts-ignore
  const buffer = await page.pdf(options);
  await browser.close();

  return `data:application/pdf;base64,${buffer.toString('base64')}`;
}
