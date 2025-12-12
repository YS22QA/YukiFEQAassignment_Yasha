import { test, expect } from '../fixtures/base';
import { APP_URLS } from '../utils/urls';

test('navigate to all pages', async ({ page, invoicesPage }) => {
    // Start at home
    await page.goto(APP_URLS.BASE);
    await expect(page).toHaveTitle(/Home Page/);

    // Navigate to Invoices
    await invoicesPage.navigateToMenu('Invoices');
    await expect(page).toHaveTitle(/Invoices/);
    await expect((page).getByRole('heading', { name: 'Invoices' })).toBeVisible();

    // Navigate to Privacy
    await invoicesPage.navigateToMenu('Privacy');
    await expect(page).toHaveTitle(/Privacy Policy/);
    await expect((page).getByRole('heading', { name: 'Privacy Policy' })).toBeVisible();

    // Navigate back to Home
    await invoicesPage.navigateToMenu('Home');
    await expect(page).toHaveTitle(/Home Page/);
});
