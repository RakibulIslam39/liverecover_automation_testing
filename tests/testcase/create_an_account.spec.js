// Create an Account

const { test, expect } = require('@playwright/test');
const CreateAccountPage = require('../pages/create_an_account');

test('Successfully create an account.', async ({ page }) => {
  const createAccountPage = new CreateAccountPage(page);

  // Open the signup page
  await createAccountPage.open();

  // Input details
  await createAccountPage.inputEmail('qa.rakibul.voyage@gmail.com');
  await createAccountPage.inputName('Rakibul', 'Islam');
  await createAccountPage.inputCompanyName('Zaimah Technologies Limited');
  await createAccountPage.inputStoreURL('personalportfolio.com');
  await createAccountPage.clickGetStartedButton();
  await createAccountPage.inputNewPassword('voyageSMS321');
  await createAccountPage.clickNextButton();

});
