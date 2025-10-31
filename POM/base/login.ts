import {test, Page, expect} from '@playwright/test';

export class classLogin{
    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async loginIolis(){
        await this.page.goto('https://sta.iolis.solutions/login');
        await this.page.locator('#emailzz').fill('admin');
        await this.page.locator('#passwordzz').fill('lis@@2023$');
        await this.page.locator('//button[@type="submit"]').click();

        try {
          await this.page.waitForSelector("//p[text()='Tiếp nhận bệnh nhân']", {timeout:2000});
        }
        catch {
          await this.page.goto('https://sta.iolis.solutions/login');
          await this.page.locator('#emailzz').fill('admin');
          await this.page.locator('#passwordzz').fill('lis@@2023$');
          await this.page.locator('//button[@type="submit"]').click();
        }

    }
}