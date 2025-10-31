import {Page, test} from '@playwright/test';
import { classLogin } from '../../base/login';

export class classDanhSachXetNghiem extends classLogin {

    xpathDroplist: string = '.col-6 > div > .form-select2 > .select2-selection__control > .select2-selection__value-container';
    inforXN = {
        maXN: '',
        tenXN: '',
        chuyenNganh: '',
        trangin: '',
        loaiMau: '',
        phuongPhap: '',
    }

    constructor(page: Page) {
        super(page);
    };

    async gotoDanhSachXN() {
        await this.page.locator("//span[text()='Cấu hình danh mục']").click();
        await this.page.locator("//a[text()='Xét nghiệm']").click();
    };

    async addDanhSachXN(inforXN: any) {
        await this.page.getByRole('button', {name: 'Thêm mới'}).click();
        await this.page.getByRole('textbox', {name: 'Mã QL*'}).fill(inforXN.maXN);
        await this.page.getByRole('textbox', {name: 'Tên Xét Nghiệm*'}).fill(inforXN.tenXN);
        await this.page.locator(this.xpathDroplist).first().click();
        await this.page.locator('.select2-selection__option', { hasText: `${inforXN.chuyenNganh}`}).click();
        await this.page.locator(this.xpathDroplist).nth(1).click();
        await this.page.locator('.select2-selection__option', { hasText: `${inforXN.trangin}`}).click();
        await this.page.locator(this.xpathDroplist).nth(2).click();
        await this.page.locator('.select2-selection__option', { hasText: `${inforXN.loaiMau}`}).click();
        // await this.page.locator(this.xpathDroplist).nth(3).click();
        // await this.page.locator('.select2-selection__option', { hasText: '[DT146] - NIPT 5 NST - TEST *'}).click();
        // await this.page.getByRole('textbox', { name: 'TT H.thị'}).fill('');
        // await this.page.locator('#testMethodselect-customasync > .select2-selection__control > .select2-selection__value-container').click();
        // await this.page.locator('div').filter({ hasText: /^test1$/ }).nth(1).click();
        await this.page.getByRole('button', { name: 'Ghi lại'}).click();
    };

    async updateDanhSachXN() {

    };

    async searchDanhSachXN(){

    };

    async reloadDanhSachXN(){

    };

    async filterDanhSachXN(){

    };

    async importDanhSachXN(){

    };

    async exportDanhSachXN(){

    };

    async deleteDanhSachXN(){
        await this.page.locator('.btn-group .mdi.mdi-chevron-down').click();
        await this.page.locator("//button[@type='button' and @class='dropdown-item']").click();
        await this.page.locator("//button[@type='button' and @class='btn btn-info save-user button-width']").click();
    };
}