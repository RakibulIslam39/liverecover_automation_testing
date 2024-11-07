// Shopify store with an invalid store domain

const { test, expect } = require('@playwright/test');
const ShopifyStorePage = require('../pages/Shopify_store_with_an_invalid_store_domain');

test('Verify that it’s not possible to link a Shopify store with an invalid store domain', async ({ page }) => {
    const shopifyStorePage = new ShopifyStorePage(page);
    await shopifyStorePage.goToSignUpPage();
    await shopifyStorePage.signInButton();
    await shopifyStorePage.signIn('rakibul.cse.bubt@gmail.com', 'voyageSMS321');
    await shopifyStorePage.navigateToIntegrations();
    await shopifyStorePage.connectToShopify('invalidstoredomain');
    await shopifyStorePage.verifyErrorMessage();
});
