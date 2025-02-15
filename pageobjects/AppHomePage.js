const{expect} = require('@playwright/test');

class AppHomePage
{
constructor(page)
{
  this.page = page;

  this.appsettings = page.locator("//div[text()='App settings']");

}

// Navigate to the APP settings 
async selectAppSettings()
{
    await this.appsettings.click();
}

}

module.exports = {AppHomePage};