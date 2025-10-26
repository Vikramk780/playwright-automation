import { type Page ,expect} from "@playwright/test";

export async function CartPageAssertion(page: Page,heading:string){
//const firstProductHeading=await page.getByRole('heading',{name:addProduct.firstProductText!});
const firstProductHeading=await page.getByRole('heading',{name:heading});
    console.log('first product heading  '+firstProductHeading);

    await expect(firstProductHeading).toBeVisible();

}


export async function checkSubTotal(page:Page){


     const actualPrice=await page.getByText('Subtotal').locator('..').locator('.font-semibold').textContent();

    const actualPriceInDollar = Number(actualPrice?.substring(1));
    console.log('this is the actual price  '+actualPriceInDollar);

    return{
        actualPriceInDollar:actualPriceInDollar
    }
}