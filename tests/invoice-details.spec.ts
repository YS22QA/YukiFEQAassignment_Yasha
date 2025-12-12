import { test, expect } from '../fixtures/base';
import { APP_URLS } from '../utils/urls';

test('verify specific invoice amount', async ({ invoicesPage }) => {
    await invoicesPage.page.goto(APP_URLS.BASE + APP_URLS.INVOICES);

    const amountText = await invoicesPage.getInvoiceAmount('I634');
    expect(amountText).toBe('423.99 EUR');
});
