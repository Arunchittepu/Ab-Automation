class MyInfo{
    infoelements={

   Myinfodetail: ()=> cy.get('[href="/web/index.php/pim/viewMyDetails"]').should('be.visible').click(),
   
}
detailsOfInfo(){
    this.infoelements.Myinfodetail();
}
}
module.exports=new MyInfo();