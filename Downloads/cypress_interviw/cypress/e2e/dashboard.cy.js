import dashboard from "../../cypress/POM/dashboard.js"
import login from "../../cypress/POM/Login.js"



// const dashboardDetail =new dashboard();


describe('template spec', () => {
  before('visit url', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    login.name();
    login.passwords();
    login.submitbutton();
  })

  it('once after login,check the dashboard header and tab  ', () =>{
    dashboard.check_url();
    dashboard.check_header();
    dashboard.check_header();
  })
})