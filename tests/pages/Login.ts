import { type Page } from "@playwright/test";

export async function doLogin(page:Page,username: string,password:string){


    await page.locator('[data-test-id="login-email-input"]').fill(username);

    await page.locator('[data-test-id="login-password-input"]').fill(password);
    await page.locator('[data-test-id="login-submit-button"]').click();
}