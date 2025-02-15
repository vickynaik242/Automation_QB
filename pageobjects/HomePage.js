const{expect} = require('@playwright/test');

class HomePage {

constructor(page) 
{
    this.page = page;

    this.appvinayak = page.locator("//button[@aria-label='Coding Task - VINAYAK']");
    
}

async selectRequiredAPP(appname) {
    switch(appname) {
    case "Coding Task - VINAYAK":
        await this.appvinayak.click();
        break;
    default:
        console.log("Data does not match current options");
        break;
}
    
}

}


module.exports = {HomePage};