// Create an Account 

class CreateAccountPage {
    constructor(page) {
      this.page = page;
    }
  
    async open() {
      await this.page.goto('https://revibe-web-client-voyage-sms-voyagesms.vercel.app/account/signup/info');
    }
  
    async inputEmail(email) {
      await this.page.fill('input[placeholder="Enter your email"]', email);
    }
  
    async inputName(firstName, lastName) {
      await this.page.fill('input[placeholder="First Name"]', firstName);
      await this.page.fill('input[placeholder="Last Name"]', lastName);
    }
  
    async inputCompanyName(companyName) {
      await this.page.fill('input[placeholder="Company Name"]', companyName);
    }
  
    async inputStoreURL(storeURL) {
      await this.page.fill('input[placeholder="Store URL (store.com)"]', storeURL);
    }
  
    async clickGetStartedButton() {
      await this.page.click('//div[normalize-space()="Get Started"]');
    }
  
    async inputNewPassword(password) {
      await this.page.fill('input[placeholder="New Password"]', password);
    }
  
    async clickNextButton() {
      await this.page.click('//button[contains(@type,"submit")]');
    }
  }
  
  module.exports = CreateAccountPage;
  