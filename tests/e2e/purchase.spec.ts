import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { config } from '../../utils/config';

test('Registered user checkout flow', async ({ page }) => {
  const login = new LoginPage(page);
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  //Login
  await login.navigate();
 await login.login(
  config.credentials.email,
  config.credentials.password
);

  // Validate login success
  await expect(page.getByText('Log out')).toBeVisible();
  await expect(page.locator('#small-searchterms')).toBeVisible();

  //Search Product
  await home.searchAndSelectFourthOption(); // "Simple Computer"

  //Product Page
  await product.selectProcessor();
  await product.addToCartAndGoToCart();

  //Cart Page
  await cart.acceptTermsAndCheckout();

  //Checkout
  await checkout.completeBilling();
  await checkout.completeShippingAddress();
  await checkout.selectShippingMethod();
  await checkout.selectPaymentMethod();
  await checkout.confirmPaymentInfo();
  await checkout.confirmOrder();

  //Order Success Validation
  await checkout.verifyOrderSuccess();

  //Back to home
  await checkout.goToHomeFromSuccess();
  await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
});