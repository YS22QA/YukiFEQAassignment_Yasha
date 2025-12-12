import { test as base } from '@playwright/test';
import { InvoicesPage } from '../pages/InvoicesPage';

type MyFixtures = {
  invoicesPage: InvoicesPage;
};

export const test = base.extend<MyFixtures>({
  invoicesPage: async ({ page }, use) => {
    await use(new InvoicesPage(page));
  },
});

export { expect } from '@playwright/test';
