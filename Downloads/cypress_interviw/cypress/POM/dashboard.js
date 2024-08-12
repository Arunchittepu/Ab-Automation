class dashboard{
    dasboardelements={
        
url:() => cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'),
header:() => cy.get('[class="oxd-topbar-header-breadcrumb"]').should('be.visible'),
checkdasboard:() =>cy.get('[href="/web/index.php/dashboard/index"]').should('be.visible')

    }
    check_url(){
        this.dasboardelements.url();
    }
    check_header(){
        this.dasboardelements.header();
    }
    clickDashboard(){
        this.dasboardelements.checkdasboard();
    }
}
module.exports=new dashboard();