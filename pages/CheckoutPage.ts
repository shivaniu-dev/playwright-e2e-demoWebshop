import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  //Locators
  billingDropdown = this.page.locator('#billing-address-select');

  continueBilling = this.page.locator('#billing-buttons-container input[type="button"]');
  continueShippingAddress = this.page.locator('#shipping-buttons-container input[type="button"]');
  continueShippingMethod = this.page.locator('.shipping-method-next-step-button');
  continuePaymentMethod = this.page.locator('.payment-method-next-step-button');
  continuePaymentInfo = this.page.locator('.payment-info-next-step-button');
  confirmOrderBtn = this.page.locator('.confirm-order-next-step-button');

  successMessage = this.page.locator('.section.order-completed');
  finalContinueBtn = this.page.locator('.order-completed-continue-button');

  //Billing (fixed with dropdown selection)
  async completeBilling() {
    await expect(this.billingDropdown).toBeVisible();

    // Select 3rd option (index = 2)
    await this.billingDropdown.selectOption({ index: 2 });

    await expect(this.continueBilling).toBeVisible();
    await this.continueBilling.click();
  }

  //Shipping Address
  async completeShippingAddress() {
    await expect(this.continueShippingAddress).toBeVisible();
    await this.continueShippingAddress.click();
  }

  //Shipping Method
  async selectShippingMethod() {
    const ground = this.page.locator('#shippingoption_0');

    await expect(ground).toBeVisible();
    await ground.check();

    await expect(this.continueShippingMethod).toBeVisible();
    await this.continueShippingMethod.click();
  }

  //Payment Method
  async selectPaymentMethod() {
    const cod = this.page.locator('#paymentmethod_0');

    await expect(cod).toBeVisible();
    await cod.check();

    await expect(this.continuePaymentMethod).toBeVisible();
    await this.continuePaymentMethod.click();
  }

  //Payment Info
  async confirmPaymentInfo() {
    await expect(this.continuePaymentInfo).toBeVisible();
    await this.continuePaymentInfo.click();
  }

  //Confirm Order
  async confirmOrder() {
    await expect(this.confirmOrderBtn).toBeVisible();
    await this.confirmOrderBtn.click();
  }

  //Success Validation
  async verifyOrderSuccess() {
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toContainText('Your order has been successfully processed!');
  }

  //Final Redirect
  async goToHomeFromSuccess() {
    await expect(this.finalContinueBtn).toBeVisible();
    await this.finalContinueBtn.click();
  }
}