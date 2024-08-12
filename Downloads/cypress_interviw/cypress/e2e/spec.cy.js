
import login from "../../cypress/POM/Login.js"


// const homePage =new login();


describe('template spec', () => {
  before('visit url', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  })

    it('login  ', () =>{

      login.name();
      login.passwords();
      login.submitbutton();
      cy.wait(3000);
    })
  })