class LoginPage {
    
    constructor(page)
    {
        this.page = page;
        this.samlsignin = page.locator("//button[@id='samlSignin']");  
        
        this.qbsignin = page.locator("//a[text()='Sign in']");
        this.qbNonCorporate = page.locator("//button[@id='quickbaseSignin']");
        
        this.useremail = page.locator("(//input[@name='loginid'])[1]");
        this.userpassword = page.locator("//input[@name='password']");
        this.signinbutton = page.locator("//button[contains(text(),'Sign in')]");   
    }

    // Launch the application based on the environment
    async launchURL(environment)
    {
    if(environment == 'DEV'){
        await this.page.goto('https://team.quickbase.com/db/main?a=signin');
    }
    }

    // Login to the application
    async loginMethod(useremail, password)
    {
       // await this.qbsignin.click();
        await this.qbNonCorporate.click();
        await this.useremail.fill(useremail);
        await this.userpassword.fill(password);
        await this.signinbutton.click();

    }
  

}

module.exports = {LoginPage};