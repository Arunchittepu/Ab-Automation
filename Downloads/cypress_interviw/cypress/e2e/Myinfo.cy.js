import MyInfo from "../../cypress/POM/MyInfo.js";
import login from "../../cypress/POM/Login.js";

// const infoDetail = new MyInfo();


describe('template spec', () => {
  before('visit url', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    login.name();
    login.passwords();
    login.submitbutton();
  })

  it('check myinfo', () => {
    MyInfo.detailsOfInfo();
  })
})