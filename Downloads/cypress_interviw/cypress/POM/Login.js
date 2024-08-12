class login{
    elements={

   username: ()=> cy.get('[name="username"]').should('be.visible').click().type('Admin'),
   password:() => cy.get('[type="password"]').should('be.visible').type('admin123'),
   submit:() => cy.get('[type="submit"]').click()

}

name(){
    this.elements.username();
}
passwords(){
    this.elements.password();
}
submitbutton(){
    this.elements.submit();
}

}
module.exports=new login();