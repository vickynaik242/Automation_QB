const{expect} = require('@playwright/test');

class AppsettingsPage {
constructor(page){
    this.page = page;
    this.appsettingsHeader = page.locator("//span[@class='ResponsiveText']");
    this.tables = page.locator("//a[@id='appSettingsNav_tables']");
    this.appsettingstableheader = page.locator("//div[@class='TitleGroup']//div");

}

// validate if the app settings page is loaded
async verifyAppSettingPageloaded(appsettingsname){
   var appsettingheader =  await this.appsettingsHeader.textContent();
   expect.soft(appsettingheader).toEqual(appsettingsname);
}

// select tables and verify if the table page is loaded 
async selectTablesPage()
{
  await this.tables.click();
  var tableheader = await this.appsettingstableheader.textContent();
  expect.soft(tableheader).toEqual("Tables");
}

}

module.exports = {AppsettingsPage};