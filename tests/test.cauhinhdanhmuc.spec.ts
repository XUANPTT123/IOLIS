import { test, expect , Page} from '@playwright/test';
// import { classLogin } from '../POM/login';
import { classDanhSachXetNghiem } from '../POM/Cau-hinh-danh-muc/Xet-nghiem/Danh-sach-xet-nghiem';

test.describe('Cấu hình danh mục - Danh sách xét nghiệm', () => {
    let loginPage: any;
    const inforXN = { maXN: 'Ma01', tenXN: 'TenXN', chuyenNganh: 'DỊ ỨNG', trangin: 'Thường Quy', loaiMau: 'Dịch âm đạo', phuongPhap: 'test1'} 

    test.beforeEach('Goto Danh sách XN', async ({ page }) => {
        loginPage = new classDanhSachXetNghiem(page);
        await loginPage.loginIolis();
        await loginPage.gotoDanhSachXN();
    });

    test.afterEach('Delete Xet nghiem', async({page}) => {
        await loginPage.deleteDanhSachXN();
    })

    test('Thêm mới xét nghiệm thành công', async({page}) => {
        await loginPage.addDanhSachXN(inforXN);

        //verify

    })
})