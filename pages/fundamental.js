const {expect} = require ("@playwright/test")
const path = require("path")


exports.fundamental = class fundamental{
    constructor(page){
        this.page = page

        this.nameField = page.locator("//input[@id='name']")
        this.genderSelection = page.locator("//input[@id='male']")
        this.daysSelection = page.locator('//*[@id="sunday"]')
        this.countrySelction = page.locator("//select[@id='country']")
        this.colorSelect = page.locator("//select[@id='colors']//option[5]")
        this.dynamicStartBtn = page.locator("//button[@name='start']")
        this.dynamicEndBtn = page.locator("//button[@name='stop']")
        this.simpleAlert = page.locator("//button[@id='alertBtn']")
        this.confirmAlert = page.locator("//button[@id='confirmBtn']")
        this.promptAlert = page.locator("//button[@id='promptBtn']")
        this.copyFrom = page.locator("//input[@id='field1']")
        this.copyTo = page.locator("//input[@id='field2']")
    }

    async openUrl(url){
        await this.page.goto(url)
        await this.page.waitForTimeout(2000)
    }

    async completeAllField(){
        await this.nameField.fill("Test User")
        await this.page.waitForTimeout(1000)

        await this.genderSelection.click()

        await this.daysSelection.click()

        /*First option dropdown by arrow button
        /*await this.countrySelction.click()
        for (let i = 0; i <5; i++){
            await this.page.keyboard.press("ArrowDown")
        }
        await this.page.keyboard.press("Enter")
        await this.page.waitForTimeout(9000)*/

        //2nd option of dropdown selection 
        /*await this.countrySelction.selectOption({label :"Canada"})
        await this.page.waitForTimeout(9000)*/

        //3rd option select dropdowm
        await this.countrySelction.selectOption({index: 3})
        

        await this.colorSelect.click()
        await this.page.waitForTimeout(3000)

        //Dynamic Button
        await this.dynamicStartBtn.click()
        await this.page.waitForTimeout(1000)

        await this.dynamicEndBtn.click()
        await this.page.waitForTimeout(5000)
        
        
    }
    //Alert Accept
    async handleAlert() {
        this.page.once('dialog', async dialog => {
            console.log("Alert Text:", dialog.message());
            await dialog.accept();
        });

        await this.simpleAlert.click();
        await this.page.waitForTimeout(5000);
    }

    async copyPaste(){
        await this.copyFrom.click()

        await this.page.keyboard.press("Control+A")
        await this.page.keyboard.press("Control+C")
        await this.page.waitForTimeout(2000)

        await this.copyTo.click()
        await this.page.keyboard.press("Control+V")
        await this.page.waitForTimeout(2000)
    }
}