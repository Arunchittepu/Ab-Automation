class search{
    searchElement={
      searchfunction:() =>  cy.get('[class="oxd-main-menu-search"]').should('be.visible').click().type('Admin')

    }

    elememtSearch(){
        this.searchElement.searchfunction();
    }
}
module.exports=new search();