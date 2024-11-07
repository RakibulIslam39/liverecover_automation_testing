// Verify Signup page UI

class SignUpPage {
    constructor(page) {
      this.page = page;
    }
  
    async goToSignUpPage() {
      await this.page.goto('https://revibe-web-client-voyage-sms-voyagesms.vercel.app/account/signup/info');
    }
  
    async verifyElementsVisibility() {
      await this.page.waitForSelector('(//img[@class="invert dark:invert-0"])[1]');
      await this.page.waitForSelector('//h1[contains(text(),"Recover up to 30% of abandoned checkouts with Live")]');
      await this.page.waitForSelector('//p[normalize-space()="Up to 20x ROI"]');
      await this.page.waitForSelector('//p[normalize-space()="Only pay when we perform"]');
      await this.page.waitForSelector('//p[normalize-space()="Real Humans"]');
      await this.page.waitForSelector('//p[normalize-space()="Team of 20+ expert live agents"]');
      await this.page.waitForSelector('//p[normalize-space()="Works alongside SMS marketing"]');
      await this.page.waitForSelector('//p[normalize-space()="With P2P we reach a new audience"]');
      await this.page.waitForSelector('//p[normalize-space()="6.5x more recovered sales"]');
      await this.page.waitForSelector('//p[normalize-space()="Reach a new audience with P2P"]');
      await this.page.waitForSelector('//p[@class="text-sm font-bolder text-off"]');
    }
  
    async verifyCreateAccountSectionVisibility() {
        await this.page.waitForSelector('//p[@class="text-lg font-bold text-off"]');
        await this.page.waitForSelector('(//p[@class="text-md font-normal text-grey-2"])[1]');
    }
  
    async verifyAlreadyAccountSectionVisibility() {
        await this.page.waitForSelector('//p[normalize-space()="Already have an account?"]');

    }
  }
  
  module.exports = SignUpPage;
  