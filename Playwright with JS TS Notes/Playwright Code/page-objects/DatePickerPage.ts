import { Page, expect } from "@playwright/test";

export class DatePickerPage {

    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    async selectCommonDatePickerFromToday(numberOfDaysFromToday: number) {
        const calendarInput = this.page.getByPlaceholder('Form Picker')
        await calendarInput.click()

        let date = new Date()
        date.setDate(date.getDate() + 2)

        const expectedDate = date.getDate().toString()
        const expectedMonthShort = date.toLocaleDateString('en-us', { month: 'short' })
        const expectedMonthLong = date.toLocaleDateString('en-us', { month: 'long' })
        const expectedYear = date.getFullYear()
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`

        //Assignment - Add the logic to handle next month calendar as well.

        // await this.page.locator('[class="day-cell ng-star-inserted"]').getByText('30', {exact: true}).click()
        await this.page.locator('nb-calendar-day-cell.day-cell:not(.bounding-month)')
            .getByText(expectedDate, { exact: true }).click()
        await expect(calendarInput).toHaveValue(dateToAssert)
    }


}