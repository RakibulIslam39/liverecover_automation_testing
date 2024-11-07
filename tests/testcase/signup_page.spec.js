// SignUp page UI Elements check

const { test, expect } = require('@playwright/test');
const SignUpPage = require('../pages/signup_page');

test('Verify that different elements should be clearly visible.', async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  await signUpPage.goToSignUpPage();

  await signUpPage.verifyElementsVisibility();

  await signUpPage.verifyCreateAccountSectionVisibility();

  await signUpPage.verifyAlreadyAccountSectionVisibility();
  
});
