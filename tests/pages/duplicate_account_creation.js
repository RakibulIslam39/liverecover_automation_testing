// Duplicate Account Creation

class DuplicateAccountCreationPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://revibe-web-client-voyage-sms-voyagesms.vercel.app/account/signup/info');
  }

  async inputEmail(email) {
    await this.page.click('input[placeholder="Enter your email"]');
    await this.page.fill('input[placeholder="Enter your email"]', email);
  }

  async inputFirstName(firstName) {
    await this.page.click('input[placeholder="First Name"]');
    await this.page.fill('input[placeholder="First Name"]', firstName);
  }

  
  async inputLastName(lastName) {
    await this.page.click('input[placeholder="Last Name"]');
    await this.page.fill('input[placeholder="Last Name"]', lastName);
  }

  async inputCompanyName(companyName) {
    await this.page.click('input[placeholder="Company Name"]');
    await this.page.fill('input[placeholder="Company Name"]', companyName);
  }

  async inputStoreURL(storeURL) {
    await this.page.click('input[placeholder="Store URL (store.com)"]');
    await this.page.fill('input[placeholder="Store URL (store.com)"]', storeURL);
  }

  async clickGetStartedButton() {
    await this.page.click('button:has-text("Get Started")');
  }

  async isErrorMessageVisible() {
    await this.page.waitForSelector('text="An account with this email already exists"', { state: "visible" });
  }
}

module.exports = DuplicateAccountCreationPage;
