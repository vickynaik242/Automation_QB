const{expect, test} = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const { table } = require('console');
//const { table } = require('console');
const dataset =   JSON.parse(JSON.stringify(require('../utils/testdataflow1.json')));

test.describe('Test scenarios while creating new table', () => {

test('Verify whether user is able to create new table from scratch ', async({browser}) =>{

    let context = await browser.newContext();

    const page = await context.newPage();

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const homePage =  poManager.getHomePage();
    const appHomePage =  poManager.getAppHomePage();
    const appSettingPage = poManager.getAppSettingsPage();
    const helperUtility = poManager.getHelperUtilityPage();
    const tablesPage = poManager.getTablesPage();
    
    await helperUtility.loadCookies(context);

    const environ = "DEV";

    // Launch Digital launchpad and login to the application.
    await loginPage.launchURL(environ);
    await loginPage.loginMethod(dataset.useremail, dataset.password);

   // await helperUtility.setCookies();

    await homePage.selectRequiredAPP(dataset.appname);

    await appHomePage.selectAppSettings();

    await appSettingPage.verifyAppSettingPageloaded(dataset.appsettingname);
    await appSettingPage.selectTablesPage();

    await tablesPage.clickNewTableButton();
    await tablesPage.selectDesignFromScratch();
    await tablesPage.verifyNewTableHeader();
    await tablesPage.enterNewTableDetails();
    await tablesPage.createNewTableAndVerifySuccess();
    await tablesPage.cancelNewFieldsPopup();
//   await tablesPage.selectTestTable1();

    await appHomePage.selectAppSettings();

    await appSettingPage.verifyAppSettingPageloaded(dataset.appsettingname);
    await appSettingPage.selectTablesPage();
    await tablesPage.selectTestTable1();

    await tablesPage.verifyTablefields();

});

test('Verify whether user is able to delete new table created ', async({browser}) =>{

    let context = await browser.newContext();

    const page = await context.newPage();

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const homePage =  poManager.getHomePage();
    const appHomePage =  poManager.getAppHomePage();
    const appSettingPage = poManager.getAppSettingsPage();
    const helperUtility = poManager.getHelperUtilityPage();
    const tablesPage = poManager.getTablesPage();
    
    await helperUtility.loadCookies(context);

    const environ = "DEV";

    // Launch Digital launchpad and login to the application.
    await loginPage.launchURL(environ);
    await loginPage.loginMethod(dataset.useremail, dataset.password);

   // await helperUtility.setCookies();

    await homePage.selectRequiredAPP(dataset.appname);

    await appHomePage.selectAppSettings();

    await appSettingPage.verifyAppSettingPageloaded(dataset.appsettingname);
    await appSettingPage.selectTablesPage();

  //  await tablesPage.selectTestTable1();

    await tablesPage.deleteCreatedTestTableAndVerify();

});

});