import{type Page} from '@playwright/test'
import test from 'node:test';


export const  testValues={

    firstName: 'vikram',
    lastName: 'kamble',
    email: 'vkamble@gmail.com',
    address: 'a/p pattankodoli t phata',
    city:'kolhapur',
    zipCode:'41622',
    country:'india',
    payment:{
        nameOnCart:'vikram',
        cardNumber:'2323 2323 2323 2323',
        expiryDate:'01/10',
        cvv:'523'
    }

}

  export async function fillupContactInfo(page:Page){
await page.getByLabel('First Name').fill(testValues.firstName);
await page.getByLabel('Last Name').fill(testValues.lastName);
await page.getByLabel('Email').fill(testValues.email);

    }

    export async function fillupShippingAddress(page: Page){

        await page.getByLabel('Address').fill(testValues.address);
        await page.getByLabel('City').fill(testValues.city);
        await page.getByLabel('ZIP Code').fill(testValues.zipCode);
        await page.getByLabel('Country').clear();
         await page.getByLabel('Country').fill(testValues.country);


    }

    export async function fillupPaymentInformation(page: Page){

        await page.getByLabel('Name on Card').fill(testValues.payment.nameOnCart);
        await page.getByLabel('Card Number').fill(testValues.payment.cardNumber);
        await page.locator('[data-test-id="checkout-cardexpiry-input"]').fill(testValues.payment.expiryDate);
        await page.getByLabel('CVC').fill(testValues.payment.cvv);
    }


    export async function placeOrder(page: Page){
await page.getByRole('button',{name:'Place Order'}).click();
    }

    export async function clickOnTrackOrder(page: Page){
const orderIdWrapper =await page.getByText('Your Order ID is:').locator('..')

    const orderId=await page.getByRole('paragraph').nth(2).textContent();

    console.log('this is the orderid  '+orderId);

    await page.getByRole('button',{name:'Track Your Order'}).click();

    return{
        id:orderId
    }

    }

    export async function trackYourOrder(page: Page,orderIdd: any){

        await page.getByLabel('Order ID').fill(orderIdd);
        await page.getByLabel('Email Address').fill(testValues.email);
        await page.getByRole('button',{name:'Track Order'}).click();



    }
