const{expect} = require('@playwright/test');
const { count } = require('console');
const expectedLeftPanelHeaders =   JSON.parse(JSON.stringify(require('../utils/tablesidepanelheaders.json')));
const expectedLeftPanelSubHeaders =   JSON.parse(JSON.stringify(require('../utils/tablesidepanelsubheaders.json')));
const expectedTableValues =   JSON.parse(JSON.stringify(require('../utils/tablecreationdata.json')));

class TablesPage {

    constructor(page){
    this.page =page;
    this.leftpanelheaders = page.locator("//div[@id='tabsLeftSideMenu']//header");
    this.leftpanelsubheaders = page.locator("//div[@id='tabsLeftSideMenu']//a");
    this.newtablebutton = page.locator("//button[@id='newTableMenuButton']");
    this.designFromScratchOption = page.locator("(//div[@id='tableFromscratch'])[2]");
    this.newTableHeader = page.locator("//div[@id='newTableDialogTitle']");
    this.tableNameTextField = page.locator("//input[@aria-label='Table name']");
    this.singleRecordTextField = page.locator("//input[@data-test-id='SingleRecordInput']");
    this.tableDescriptionTextField = page.locator("//textarea[@data-test-id='TableDescription']");
    this.createTableButton = page.locator("//button[text()='Create table']");
    this.cancelButtonNewFieldsPopup = page.locator("//button[text()='Cancel']");
    this.tableFieldValues = page.locator("//form[@id='topLevelSettingsForm']/div[1]/div//input");
    this.exitSettings = page.locator("//span[text()='Exit Settings']");
    this.testTable1 = page.locator("(//a[text()='Test-Table1'])[3]");
    this.deleteButtonTestTable = page.locator("((//a[text()='Test-Table1'])[3]/../..)//a[@title='Permanently delete this table']");
    this.confirmDeleteTable = page.locator("//input[@id='typeYesField']");
    this.deleteTableButton = page.locator("//button[text()='Delete Table']");
    }

    async validateLeftPanelHeaders(){
      //  console.log("Expected values are "+expectedLeftPanelHeaders);
      //  const expectedvalues = ['Basics', 'User Interface', 'Advanced Features'];
        var displayedvalues = await this.leftpanelheaders.allTextContents();
        for (let i=0; i < expectedLeftPanelHeaders.length; i++) {
            expect.soft(displayedvalues[i]).toEqual(expectedLeftPanelHeaders[i]);
            console.log(displayedvalues[i] + " left panel header matches with " +expectedLeftPanelHeaders[i]);
        }
    }

    async validateLeftPanelSubHeaders(){
        var displayedvalues = await this.leftpanelsubheaders.allTextContents();
        for (let i=0; i < expectedLeftPanelSubHeaders.length; i++) {
            expect.soft(displayedvalues[i]).toEqual(expectedLeftPanelSubHeaders[i]);
            console.log(displayedvalues[i] + " left panel subheader matches with " +expectedLeftPanelSubHeaders[i]);
        }
    }

    async clickNewTableButton(){
        await this.page.waitForTimeout(3000);
        await this.newtablebutton.click();
    }

    async selectDesignFromScratch(){
        await this.designFromScratchOption.click();
        await this.page.waitForTimeout(3000);
    }

    async verifyNewTableHeader() {
        await expect(this.newTableHeader).toHaveText('New table');

    }

    async enterNewTableDetails() {
        await this.tableNameTextField.fill(expectedTableValues[0]);
        await this.singleRecordTextField.fill(expectedTableValues[1]);
        await this.tableDescriptionTextField.fill(expectedTableValues[2]);
    }

    async createNewTableAndVerifySuccess(){
        const [resp]= await Promise.all([
            this.page.waitForResponse(resp => resp.url().includes('/ui/api-pipe/db') && resp.status() === 200),
            //API2 ,
            await this.createTableButton.click(), 
           ]);
           console.log("The Table is created successfully!");
    }

    async cancelNewFieldsPopup(){
        await this.cancelButtonNewFieldsPopup.click();
    }

    async verifyTablefields(){
   
   //   const tableFieldValues = this.page.locator("//form[@id='topLevelSettingsForm']/div[1]/div");
    //      var displayedvalues = await this.tableFieldValues.evaluateAll(fields => {
    //       return fields.map(field => field.value);
    //      });

          for (let i=1; i < expectedTableValues.length; i++) {
            const value = await this.tableFieldValues.nth(i).inputValue();
            console.log("The values of the table are "+ value);
            expect.soft(value).toEqual(expectedTableValues[i-1]);
            console.log(value + " left panel header matches with " +expectedTableValues[i-1]);
        }

    }

    async exitTableSettings(){
        await this.exitSettings.click();

    }

    async selectTestTable1(){
        await this.testTable1.click();
        await this.page.waitForTimeout(3000);
    }

    async deleteCreatedTestTableAndVerify(){
        await this.deleteButtonTestTable.click()
        await this.confirmDeleteTable.fill("YES");

        const [resp]= await Promise.all([
            this.page.waitForResponse(resp => resp.url().includes('QBI_DeleteTable') && resp.status() === 200),
            //API2 ,
            await this.deleteTableButton.click(), 
           ]);
           console.log("The Table is deleted successfully!");
  
    }

}
module.exports = {TablesPage};