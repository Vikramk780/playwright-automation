import {expect,test,type Page} from "@playwright/test";

export const signUpData = {
    firstName: 'someFirstName',
    lastName: 'someLastName',
    pass: '1232A@ffdvf323f'
}

export async function signUp(page: Page,email:string){
 await page.locator('[data-test-id="signup-firstname-input"]').fill(signUpData.firstName);
 await page.locator('[data-test-id="signup-lastname-input"]').fill(signUpData.lastName);
 await page.locator('[data-test-id="signup-email-input"]').fill(email);
 await page.locator('[data-test-id="signup-password-input"]').fill(signUpData.pass);
 await page.locator('[data-test-id="signup-submit-button"]').click();
}

export async function addConfirmationCode(page:Page , code: string){

    await page.locator('input[inputmode="numeric"]').fill(code);

    await page.getByRole('button',{name:'Confirm Account'}).click();

}