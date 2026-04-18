import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  // Locators
  processorOption = this.page.locator('input[name="product_attribute_75_5_31"]');
  addToCartBtn = this.page.locator('#add-to-cart-button-75');

  successBar = this.page.locator('#bar-notification');
  successCartLink = this.successBar.locator('a[href="/cart"]');

  // Select processor
  async selectProcessor() {
    await this.processorOption.first().check(); // Slow
  }

  async addToCartAndGoToCart() {
  await this.addToCartBtn.click();

  // Wait for green success bar
  await expect(this.successBar).toBeVisible();

  // Wait specifically for the "shopping cart" link inside it
  await expect(this.successCartLink).toBeVisible();

  // Optional but safer: ensure it's clickable
  await this.successCartLink.waitFor({ state: 'visible' });

  // Click link
  await this.successCartLink.click();

  // Verify navigation
  await expect(this.page).toHaveURL(/cart/);
}
}