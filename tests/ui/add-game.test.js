const { test, expect } = require('@playwright/test');

test('Check add game page', async ({ page }) => {
    await page.goto('https://krasen84-retake-exam.onrender.com/add-game');
    const form = await page.$('input');
    expect(form).toBeTruthy();
  });
  