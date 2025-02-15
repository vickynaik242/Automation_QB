const{expect} = require('@playwright/test');

class AppsettingsPage {
constructor(page){
    this.page = page;
    this.appsettingsHeader = page.locator("//span[@class='ResponsiveText']");
    this.tables = page.locator("//a[@id='appSettingsNav_tables']");
    this.appsettingstableheader = page.locator("//div[@class='TitleGroup']//div");

}

async verifyAppSettingPageloaded(appsettingsname){
   var appsettingheader =  await this.appsettingsHeader.textContent();
   expect.soft(appsettingheader).toEqual(appsettingsname);
}

async selectTablesPage()
{
  await this.tables.click();
  var tableheader = await this.appsettingstableheader.textContent();
  expect.soft(tableheader).toEqual("Tables");
 // expect.soft(overallcontexts[i]).toEqual(contextpulled[i]);
//  var prompt = await this.updatedFinalPrompt.textContent();
}

}

module.exports = {AppsettingsPage};