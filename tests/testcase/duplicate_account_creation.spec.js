// Duplicate Account Creation

const { test, expect } = require('@playwright/test');
const DuplicateAccountCreationPage = require('../pages/duplicate_account_creation');

test('Ensure duplicate account creation is prevented.', async ({ page }) => {
  const duplicateAccountPage = new DuplicateAccountCreationPage(page);

  await duplicateAccountPage.open();

  await duplicateAccountPage.inputEmail('rakibul.zaimahtech@gmail.com');
  await duplicateAccountPage.inputFirstName('Rakibul');
  await duplicateAccountPage.inputLastName('Islam');
  await duplicateAccountPage.inputCompanyName('Zaimah Technologies Limited');
  await duplicateAccountPage.inputStoreURL('personalportfolio.com');
  await duplicateAccountPage.clickGetStartedButton();

  await duplicateAccountPage.isErrorMessageVisible();
});
