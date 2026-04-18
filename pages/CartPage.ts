import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async acceptTermsAndCheckout() {
    const termsCheckbox = this.page.locator('#termsofservice');
    const checkoutBtn = this.page.getByRole('button', { name: 'Checkout' });

    await expect(termsCheckbox).toBeVisible();
    await termsCheckbox.check();

    await expect(checkoutBtn).toBeVisible();
    await checkoutBtn.click();
  }
}