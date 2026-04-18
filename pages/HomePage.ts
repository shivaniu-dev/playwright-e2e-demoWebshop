import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  // Locators
  searchBox = this.page.locator('#small-searchterms');
  searchSuggestions = this.page.locator('.ui-autocomplete li');

  async searchAndSelectFourthOption() {
    // Ensure search box visible
    await expect(this.searchBox).toBeVisible();

    // Type value
    await this.searchBox.click();
    await this.searchBox.fill('computer');

    // Wait for suggestions to appear
    await expect(this.searchSuggestions.first()).toBeVisible();

    // Click 4th option (index 3)
    await this.searchSuggestions.nth(3).click();
  }
}