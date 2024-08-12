
import  search from "../../cypress/POM/search.js";
import login from "../../cypress/POM/Login.js";


// const searchDetail = new search();


describe('template spec', () => {
  before('visit url', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    login.name();
    login.passwords();
    login.submitbutton();
  })

  it('verify the search function',() =>{
    search.elememtSearch();
})

})