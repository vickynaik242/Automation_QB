const{expect} = require('@playwright/test');
class HelperUtility{

    constructor(page){
        this.page = page;

    }

    async setCookies(){
     const cookies = await context.cookies();
     console.log('Cookies:', cookies);  // Print cookies

  //save cookies to a file
     const fs = require('fs');
     fs.writeFileSync('cookies.json', JSON.stringify(cookies));
    }

    async loadCookies(context){
        // Load cookies from a file or variable
     const fs = require('fs');
     const cookies = JSON.parse(fs.readFileSync('cookies.json', 'utf-8'));
 
     // Set cookies in the new context
     await context.addCookies(cookies);
 
  //   console.log('Cookies:', cookies);
       }

}
module.exports = {HelperUtility};