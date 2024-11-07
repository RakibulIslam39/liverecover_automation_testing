// Shopify store with an invalid store domain

class ShopifyStorePage {
    constructor(page) {
        this.page = page;
    }

    async goToSignUpPage() {
        await this.page.goto('https://revibe-web-client-voyage-sms-voyagesms.vercel.app/account/signup/info');
    }

    async signInButton(email, password) {
        await this.page.click('//div[normalize-space()="Sign in"]');
    }

    async signIn(email, password) {
        // await this.page.click('//div[normalize-space()="Sign in"]');
        await this.page.fill('//input[@placeholder="Email or Phone"]', email);
        await this.page.fill('//input[@placeholder="Password"]', password);
        await this.page.click('(//button[@type="button"])[1]');
    }

    async navigateToIntegrations() {
        await this.page.click('//button[@class="sc-bYMpWt eyYVWX"]//div[@class="sc-gswNZR eoPDTb"]//*[name()="svg"]');
        await this.page.click('//p[normalize-space()="Integrations"]');
    }

    async connectToShopify(storeDomain) {
        await this.page.click('//button[@class="sc-bYMpWt eYQwJm sc-ckLdoV hhLuFr sc-ckLdoV hhLuFr"]//div[@class="sc-gswNZR eoPDTb"]//*[name()="svg"]//*[name()="path" and contains(@fill,"currentCol")]');
        await this.page.click('//input[@class="sc-jOiSOi xfTOB sc-hjjlnc kwGJhZ sc-hjjlnc kwGJhZ"]');
        await this.page.fill('//input[@class="sc-jOiSOi xfTOB sc-hjjlnc kwGJhZ sc-hjjlnc kwGJhZ"]', storeDomain);
        await this.page.click('//p[@class="sc-ipEyDJ hjtavf"]');
    }

    async verifyErrorMessage() {
        await this.page.waitForSelector('text="Sorry, this shop is currently unavailable."', { state: "visible" });
    }
}

module.exports = ShopifyStorePage;
