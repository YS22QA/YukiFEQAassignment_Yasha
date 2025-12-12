import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  readonly navBar: Locator;

  constructor(public page: Page) {
    this.navBar = page.locator('.navbar');
  }

  async getTitle() {
    return this.page.title();
  }

  async navigateToMenu(name: string) {
    // Look for ID based on the name (e.g. "Home" -> "home")
    const id = `nav-item-link-${name.toLowerCase()}`;
    await this.navBar.locator(`#${id}`).click();
  }
}
