const { LoginPage } = require('../pageobjects/LoginPage');
const { HomePage } = require('../pageobjects/HomePage');
const { AppHomePage } = require('../pageobjects/AppHomePage');
const {HelperUtility} = require('../pageobjects/HelperUtility');
const { AppsettingsPage } = require('./AppSettingPage');
const { TablesPage } = require('./TablesPage');

class POManager {
    constructor(page)
    {
     this.page = page;
     this.loginPage = new LoginPage(this.page);
     this.homePage =  new HomePage(this.page);
     this.appHomePage =  new AppHomePage(this.page);
     this.appSettingsPage = new AppsettingsPage(this.page);
     this.helperUtilityPage = new HelperUtility(this.page);
     this.tablesPage = new TablesPage(this.page);
    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getHomePage()
    {
        return this.homePage;
    }

    getAppHomePage()
    {
        return this.appHomePage;
    }

    getHelperUtilityPage()
    {
        return this.helperUtilityPage;
    }

    getAppSettingsPage()
    {
        return this.appSettingsPage;
    }

    getTablesPage(){
        return this.tablesPage;
    }



}

module.exports = {POManager};