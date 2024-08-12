import admin from "../../cypress/POM/Admin.js";


describe('template spec', () => {

  before('visit url', () => {
    cy.loginPage();
  })

  
  it('checkUserManagement and search and add users', () =>{
    admin.AdminOption();
    admin.urlChecking();
    admin.userManagmentclicking();
    admin.dropdownUser();
    admin.usernameChecking();
    admin.checkHints();
    admin.okButton();
    cy.wait(3000);
    admin.userAdding();
    admin.AddusersUrl();
    admin.addHint();
    admin.usernameadd();
    admin.typePassword();
    admin.passwordConfirm();

  })
});