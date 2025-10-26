import {test} from "@playwright/test";

import {EmailUtils} from './util/EmailUtils';
import * as SignUpPage from './pages/SignUp.ts'

import * as LoginPage from './pages/Login.ts'

test('Sign up', async ({page})=>{
    const emailUtils = new EmailUtils()
    const inbox = await emailUtils.createInbox();

    await page.goto('/signup')

    await SignUpPage.signUp(page, inbox.emailAddress)

    const email = await emailUtils.waitForLatestEmail(inbox.id)

     const code = /([0-9]{6})$/.exec(email?.body!)![1];

    await SignUpPage.addConfirmationCode(page,code);

    await page.goto('/login')

    await LoginPage.doLogin(page,inbox.emailAddress,SignUpPage.signUpData.pass);
    //await page.pause();
})


