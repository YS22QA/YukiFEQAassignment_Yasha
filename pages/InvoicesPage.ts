import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class InvoicesPage extends BasePage {
    readonly table: Locator;
    readonly invoiceRows: Locator;
    readonly summaryRow: Locator;
    readonly allInvoiceAmountCells: Locator;
    readonly summaryAmountCell: Locator;

    constructor(page: Page) {
        super(page);
        this.table = page.locator('table');
        // Select all rows in table body that are NOT the summary row
        this.invoiceRows = this.table.locator('tbody tr:not(.summary-row)');
        this.summaryRow = this.table.locator('tr.summary-row');
        this.allInvoiceAmountCells = this.invoiceRows.locator('.number-cell');
        this.summaryAmountCell = this.summaryRow.locator('.number-cell');
    }

    async getAllInvoiceAmounts(): Promise<number[]> {
        const amountTexts = await this.allInvoiceAmountCells.allInnerTexts();
        return amountTexts.map((text) => this.parseCurrency(text));
    }

    async getSummaryTotal(): Promise<number> {
        const text = await this.summaryAmountCell.innerText();
        return this.parseCurrency(text);
    }

    private parseCurrency(text: string): number {
        // Remove " EUR" and parse float
        return parseFloat(text.replace(' EUR', '').trim());
    }

    async getInvoiceAmount(id: string): Promise<string> {
        // Locate the row that contains the ID, then find the currency cell within that row
        const row = this.invoiceRows.filter({ hasText: id });
        return await row.locator('.number-cell').innerText();
    }


}
