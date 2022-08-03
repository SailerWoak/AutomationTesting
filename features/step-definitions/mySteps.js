const { Given, When, Then} = require('@wdio/cucumber-framework');

Given ('open page {string}', async (page) => {
    await browser.url(`http://www.uitestingplayground.com/${page}`);
    // await browser.url("http://www.uitestingplayground.com/dynamicid" + page + "asdfasdfasd" + page + "asdfadsfdsaf");
    // await browser.url(`http://www.uitestingplayground.com/dynamicid${page}asdfasdfasd${page}asdfadsfdsaf${page}`);

});
When ('click on', async() => {
    await $(`[class="btn btn-primary"]`).click();
});

Then ('checking dynamic ID', async () =>{
    const dynamicId = await $(`[class="btn btn-primary"]`).getText();
    console.log("Dynamic ID value: ",dynamicId);
});

When ('primary click', async() => {
    await $(`[class*="btn-primary btn-test"]`).click(); // class* - containe
});

Then ('close alert', async() => {
    await browser.pause(1000);
    await browser.acceptAlert(); // click OK appeared alert
});

When ('success click', async() => {
    await browser.pause(1000);

    await $(`[class="btn btn-success"]`).click();
});

Then ('change style', async() =>{
    await browser.pause(1000);

    await browser.execute((elementId) => { // execute help read env like from browser console
        document.getElementById(elementId).style.setProperty("display","none"); // the way how enter new style in to the element
    }, `blueButton`)
    await browser.pause(1000);
});

Then ('warning', async() => {
    await browser.pause(1000);
    const warning = await $(`[class*="bg-warning"]`).getText();
    console.log("Error message: ", warning);
});


