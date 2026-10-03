const { test, expect } = require('@playwright/test');

test.skip('alert with ok', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async dialog => {
    await expect(dialog.type()).toContain('alert');
    await expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();
  });

  await page.getByText('Simple Alert').click();
});

test.skip('dialog handling for confirmation', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async dialog => {
    await expect(dialog.type()).toContain('confirm');
    await expect(dialog.message()).toContain('Press a button!');
    await dialog.accept();
  });

  await page.getByText('Confirmation Alert').click();
  await expect(page.getByText('You pressed OK!')).toHaveText('You pressed OK!');

  await page.waitForTimeout(2000)
});

test('dialog handling for prompt', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async dialog => {
    await expect(dialog.type()).toContain('prompt');
    await expect(dialog.message()).toContain('Please enter your name:');

    await expect(dialog.defaultValue()).toContain('Harry Potter')
    await dialog.accept('John');

  });

  await page.getByText('Prompt Alert').click();
  await expect(page.getByText('Hello John! How are you today?')).toHaveText('Hello John! How are you today?');

  await page.waitForTimeout(2000)
});