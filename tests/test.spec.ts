import { test, expect , Page} from '@playwright/test';
import { classLogin } from '../POM/login';

test.describe('IOLIS Login Tests', () => {
    test('Login to IOLIS', async ({ page }) => {
        const loginPage = new classLogin(page);
        await loginPage.loginIolis();
    });

    test('', async({page}) => {
            
    })
})