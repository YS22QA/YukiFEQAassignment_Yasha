import { test, expect } from '../fixtures/base';
import { APP_URLS } from '../utils/urls';

test('verify invoice sum', async ({ invoicesPage }) => {
    await invoicesPage.page.goto(APP_URLS.BASE + APP_URLS.INVOICES);

    const amounts = await invoicesPage.getAllInvoiceAmounts();
    const calculatedSum = amounts.reduce((a, b) => a + b, 0);
    console.log('Calculated invoice sum is: ' + calculatedSum);

    // Floating point precision handling (round to 2 decimals)
    const roundedSum = Math.round(calculatedSum * 100) / 100;

    const displayedSum = await invoicesPage.getSummaryTotal();
    console.log('Displayed invoice sum is: ' + displayedSum);

    expect(roundedSum).toBe(displayedSum);
});
