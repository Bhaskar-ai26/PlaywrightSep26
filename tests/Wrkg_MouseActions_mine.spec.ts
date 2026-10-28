import {test, expect} from '@playwright/test'

test('Mouse Actions', async ({page})=>{

    await page.goto("https://api.jquery.com/dblclick/");
    await page.locator("div.demo.code-demo").scrollIntoViewIfNeeded();

    let myFrme = page.frameLocator("div.demo.code-demo iframe");

    myFrme.locator("//span[text()='Double click the block']").dblclick()
   await page.waitForTimeout(5000);

    await myFrme.locator("div").dblclick();
});

test("Mouse Right Click", async ({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    
    await page.locator("//span[text()='right click me']").click({button: "right"});
    await page.waitForTimeout(3000)
    
    await page.goto("https://www.jqueryscript.net/demo/Simple-jQuery-Right-Click-Menu-Plugin/");
    await page.locator("div#box").click({button: 'right'});
    await page.waitForTimeout(3000)
   
});

test('Mouse Hover', async ({page})=>{

    await page.goto("https://api.jquery.com/hover/");

    let frmHover = page.frameLocator("div#example-0 iframe");
    await frmHover.getByText("Milk").hover();
    await page.waitForTimeout(2000)
    await frmHover.getByText("Bread").hover()
    await page.waitForTimeout(2000)
    await frmHover.getByText("Chips").hover()
    await page.waitForTimeout(2000)

    let frm2 =  page.frameLocator("div#example-1-0 iframe");
    await frm2.getByText("Milk").hover();
    expect(frm2.getByText("White")).toBeVisible()
    await page.waitForTimeout(3000)
    await frm2.getByText("Carrots").hover();
    expect(frm2.getByText("Orange")).toBeVisible()
    await page.waitForTimeout(3000)
    await frm2.getByText("Broccoli").hover();
    expect(frm2.getByText("Green")).toBeVisible()
    await page.waitForTimeout(3000)
   
});

test('Mouse Drag and Drop', async ({page})=>{
    await page.goto("https://jqueryui.com/droppable/");

    let dragFrm = page.frameLocator("iframe.demo-frame");

    await dragFrm.locator("#draggable").dragTo (dragFrm.locator("#droppable"));
});


