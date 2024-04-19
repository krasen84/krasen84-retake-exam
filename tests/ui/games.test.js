const { test, expect } = require('@playwright/test');

test('Check games page', async ({ page }) => {
    await page.goto('https://krasen84-retake-exam.onrender.com/games');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  