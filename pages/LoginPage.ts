import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.page.getByLabel('Email:').fill(email);
    await this.page.getByLabel('Password:').fill(password);
    await this.page.getByRole('button', { name: 'Log in' }).click();
  }

  async verifyLoginSuccess() {
    await expect(this.page.getByText('Log out')).toBeVisible();
    await expect(this.page).toHaveURL(/\/$/);
  }
}