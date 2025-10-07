import {test , expect} from "@playwright/test"

import { fundamental } from "../pages/fundamental"

test("test", async ({page}) => {
    const fp = new fundamental(page)

    await fp.openUrl("https://testautomationpractice.blogspot.com/")

    await fp.completeAllField()
    
    await fp.handleAlert()

    await fp.copyPaste()
})