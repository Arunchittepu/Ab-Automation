class admin{
    adminElements={
checkadminoption: () => cy.get('[href="/web/index.php/admin/viewAdminModule"]').click(),
checkAdminUrl: () => cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers'),
clickUserManagment: () => cy.get('.oxd-topbar-body-nav-tab-item').eq(0).click(),
checkDropdown: () => cy.get('[role="menuitem"]').should('be.visible').click(),
checkUserName: () => cy.get('.oxd-input.oxd-input--active').should('be.visible'),
CheckUserRole: () => cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click().select(0),
hints: () => cy.get('[placeholder="Type for hints..."]'),
Status: () => cy.get('.oxd-select-text-input').select('Enabled').click(),
searchSubmit: () => cy.get('[type="submit"]').click(),
AddUser: () => cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary').eq(1).click(),
checkAddUserUrl: () => cy.url(),
password: () => cy.get('[type="password"]').eq(0).type('Admin567'),
confirmpassword: () => cy.get('[type="password"]'),
save: () => cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click(),
addUserRole: () => cy.get('.oxd-select-text-input'),
addHints: () => cy.get('[placeholder="Type for hints..."]'),
addStatus: () => cy.get('.oxd-select-text-input').eq(1).select('Enabled'),
addUserName: () => cy.get('.oxd-input.oxd-input--active')

    }

    AdminOption(){
        this.adminElements.checkadminoption();
    }
    urlChecking(){
        this.adminElements.checkAdminUrl();
    }
    userManagmentclicking(){
        this.adminElements.clickUserManagment();
    }
    dropdownUser(){
        cy.get('[role="menuitem"]').should('be.visible').click();
        //this.adminElements.checkDropdown();
    }
    usernameChecking(){
        cy.fixture("AdminRelated").then((data3) => {
        this.adminElements.checkUserName().eq(0).type(data3.hintsName);
    })
    }

    checkUserRole(){
    this.adminElements.CheckUserRole();
    }
    checkHints(){
        cy.fixture("AdminRelated").then((data2) => {
        this.adminElements.hints().type(data2.checkUserName);
    })
}
    seeStatus(){
        this.adminElements.Status();
    }
    okButton(){
        this.adminElements.searchSubmit();
    }
    userAdding(){
        this.adminElements.AddUser();
    }
    AddusersUrl(){
        cy.fixture("AdminRelated").then((data1) => {
        this.adminElements.checkAddUserUrl().should('eq',data1.AddUserUrl);
    })
    }

addRole(){
    this.adminElements.addUserRole().eq(0).select('Admin');
}
addHint(){
    cy.fixture("AdminRelated").then((data6) => {
    this.adminElements.addHints().type(data6.HintAdd);
})
}
statusAdd(){
this.adminElements.addStatus();
}
usernameadd(){
    cy.fixture("AdminRelated").then((data7) => {
    this.adminElements.addUserName().eq(1).type(data7.UsernameAdd);
})
}
    typePassword(){
        cy.fixture("AdminRelated").then((data4) => {
        this.adminElements.password().eq(0).clear().type(data4.password);
    })
}
    passwordConfirm(){
        cy.fixture("AdminRelated").then((data5) => {
        this.adminElements.confirmpassword().eq(1).clear().type(data5.confirmpassword);
    })
}
    addSave(){
        this.adminElements.save();
    }



}
module.exports=new admin();