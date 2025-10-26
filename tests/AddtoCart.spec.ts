import {expect ,test} from "@playwright/test";
import * as Products from './pages/Products.ts';
import * as Carts from './pages/Cart.ts';

import * as Checkout from './pages/Checkout.ts';

test("select product and add to card and verify product and its price", async({page})=>{

    await page.goto('https://valentinos-magic-beans.click');

   const addProduct=await Products.addProductToCart(page,0);

    await page.locator('[data-test-id="header-cart-button"]').getByRole('button').click();

    Carts.CartPageAssertion(page,addProduct.firstProductText!)

    const  cartsPage=await Carts.checkSubTotal(page);
    
    const expectedPrice = addProduct.price;

    await expect(cartsPage.actualPriceInDollar).toBe(expectedPrice);

    console.log('this is the expected price  '+expectedPrice)

})

test('add product to cart and check out',async({page})=>{

    await page.goto('https://valentinos-magic-beans.click');

   const addProduct=await Products.addProductToCart(page,0);

    await page.locator('[data-test-id="header-cart-button"]').getByRole('button').click();

    Carts.CartPageAssertion(page,addProduct.firstProductText!)

    const  cartsPage=await Carts.checkSubTotal(page);
    
    const expectedPrice = addProduct.price;

    await expect(cartsPage.actualPriceInDollar).toBe(expectedPrice);

    console.log('this is the expected price  '+expectedPrice);

    await page.getByRole('button',{name:'Proceed to Checkout'}).click();

    await Checkout.fillupContactInfo(page)

    await Checkout.fillupShippingAddress(page);

    await Checkout.fillupPaymentInformation(page);
    await Checkout.placeOrder(page);

    
const orderId=await Checkout.clickOnTrackOrder(page);

await Checkout.trackYourOrder(page,orderId.id);

const firstOrder=await page.getByText(addProduct.firstProductText!);

await expect(firstOrder).toBeVisible();

   // await page.pause()
})