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

        // Chờ chuyển trang (tối đa 10s)
        await this.page.waitForTimeout(4000); // chờ app render

        let currentUrl = this.page.url();
        console.log('🔹 URL sau login:', currentUrl);

      // Kiểm tra: nếu vẫn ở trang login hoặc giao diện trắng
      const isBlank = await this.page.evaluate(() => document.body.innerText.trim() === '');
      const stillLogin = currentUrl.includes('/login');
    
      if (isBlank || stillLogin) {
        console.log('⚠️ Trang trắng hoặc chưa redirect — thử lại...');
        await this.page.reload();
        await this.page.waitForTimeout(3000);
      }
    
      // Nếu vẫn trắng, thử login lại lần 2
      if (await this.page.evaluate(() => document.body.innerText.trim() === '')) {
        console.log('🔁 Reload vẫn trắng — thử login lại lần 2...');
        await this.page.goto('https://sta.iolis.solutions/login');
        await this.page.locator('#emailzz').fill('admin');
        await this.page.locator('#passwordzz').fill('lis@@2023$');
        await this.page.locator('//button[@type="submit"]').click();
      }
    
      // Đợi thành công: PatientVisit
      await this.page.waitForURL('**/PatientVisit', { timeout: 15000 });
      await expect(this.page).toHaveURL(/PatientVisit/);
      console.log('🎉 Đăng nhập thành công!');
    }
}