import { type Page } from '@playwright/test';

export async function addProductToCart(page: Page,index:number){
const firstProductDive =await page.locator('.p-6').nth(index)

    const firstProductText = await firstProductDive.getByRole('heading').first().textContent();
    console.log(firstProductText);

    const price = await firstProductDive.locator('.font-bold').textContent();
    console.log(price);


    const addToCartButtons = await page.getByRole('button',{name:'Add to Cart',exact:true});

    await addToCartButtons.first().click();

    return{
        firstProductText:firstProductText,
          price:Number(price?.substring(1))
    }

}