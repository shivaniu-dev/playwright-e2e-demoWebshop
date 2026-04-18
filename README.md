# Playwright E2E Automation – Demo Web Shop

This project contains an end-to-end (E2E) automation test using **Playwright + TypeScript** for:

https://demowebshop.tricentis.com/

It simulates a real user purchasing a product from login to order confirmation.

---

# Test Scenario Covered

The automation performs the following steps:

1. Login with a registered user
2. Verify successful login
3. Search for product (`computer`)
4. Select **4th suggestion (Simple Computer)**
5. Configure product (select processor)
6. Add product to cart
7. Wait for success notification
8. Click **"shopping cart" link from green notification bar**
9. Accept terms and proceed to checkout
10. Complete checkout flow:

* Billing (select existing address)
* Shipping Address
* Shipping Method
* Payment Method
* Payment Info

11. Confirm order
12. Verify success message
13. Navigate back to home page

---

# 🏗️ Project Structure

```bash
playwright-e2e-demo/
│
├── pages/
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── HomePage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   └── OrderConfirmationPage.ts
│
├── tests/
│   └── e2e/
│       └── purchase.spec.ts
│
├── utils/
│   ├── config.ts
│   ├── helper.ts
│   ├── logger.ts
│   └── testData.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

---

# Design Pattern

This project uses **Page Object Model (POM)**:

* Each page = separate class
* Each class contains:

  * Locators
  * Actions (methods)

### Benefits:

* Clean code
* Easy maintenance
* Reusable components

---

# Setup Instructions

## 1. Install dependencies

```bash
npm install
```

## 2. Install Playwright browsers

```bash
npx playwright install
```

## 3. Run tests

```bash
npx playwright test
```

## 4. View report

```bash
npx playwright show-report
```

---

#Test Credentials

`text
Email: qa.user123@mailinator.com
Password: Engineer@09876


# Key Implementation Details

### Search Handling

* Uses auto-suggestion dropdown
* Selects **4th item dynamically**

---

### Add to Cart Flow

* Waits for green success notification (`#bar-notification`)
* Clicks **shopping cart link inside notification**
* Avoids flaky navigation

---

### Checkout Flow

* Handles multi-step checkout
* Uses stable locators:

  * IDs
  * Roles
  * Scoped selectors

---

### Stability Practices

* No hard waits (`waitForTimeout`)
* Uses `expect().toBeVisible()` before actions
* Avoids strict mode locator conflicts
* Handles async UI updates

---

# Challenges Solved

* Dynamic search suggestions
* AJAX add-to-cart behavior
* Multiple similar "Continue" buttons
* Timing issues between steps
* Strict mode locator errors

---

# Best Practices Used

* Page Object Model (POM)
* Reusable methods
* Clear test structure
* Stable locators
* Minimal duplication

---

# Future Enhancements

* Data-driven testing
* Negative test scenarios
* API validations
* Allure reporting
* CI/CD integration

---

# Final Note

This project demonstrates a **real-world Playwright automation flow** with focus on:

* Stability
* Readability
* Maintainability

---

If any test fails:
Check error, Locator, Auto-wait
Fix locator
Avoid Hard -waits, if not needed
Avoid rewriting everything