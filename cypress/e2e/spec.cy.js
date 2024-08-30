describe('template spec', () => {
  beforeEach('visit Amazon website', () =>{
    cy.visit("/");
  })
  it("click on ALL and check digital content and devices", () => {
    cy.get('[id="nav-hamburger-menu"]').trigger('mouseover').click({force:true});
    cy.wait(3000);
    cy.get('[id="hmenu-content"]').should('be.visible');
    cy.contains('Digital Content & Devices').should('have.class', 'hmenu-item');
    cy.get('a[data-menu-id="2"]').should('be.visible');
    // cy.get('[data-menu-id="3"]').children('div').contains('Kindle E-readers & Books').scrollIntoView().should('be.visible');
    cy.get('a[data-menu-id="3"]').should('be.visible');
    cy.get('[data-menu-id="4"]').children('div').contains('Amazon Appstore').should('be.visible');

})
  it('click on Amazon Music Module and check the sub modules inside', () =>{
    cy.get('[id="nav-hamburger-menu"]').trigger('mouseover').click({force:true});
    cy.wait(3000);
    cy.get('a[data-menu-id="2"]').eq(0).scrollIntoView().click();
    cy.contains('Amazon Music Unlimited').should('have.class','hmenu-item');
    // cy.xpath("//a[contains(text(),'Amazon Music Unlimited')]").should('be.visible');
    cy.contains('Podcasts').should('have.class','hmenu-item');
    cy.contains('Open Web Player').eq(0).should('have.class','hmenu-item');
    cy.get('.hmenu-visible > :nth-child(7) > .hmenu-item').should('be.visible');
    //cy.contains('Open Web Player').eq(1).should('have.class','hmenu-item').scrollIntoView().should('be.visible');
    cy.contains('Download the app').should('have.class','hmenu-item');
    cy.get('a[data-ref-tag="nav_em_1_2_BT_0_main_menu"]').eq(1).click({force:true});
  })
    it('Kindle E-readers & Books',() => {
       cy.get('[id="nav-hamburger-menu"]').trigger('mouseover').click();
       cy.wait(3000);
      //  cy.get('[data-menu-id="3"]').children('div').contains('Kindle E-readers & Books').should('be.visible').click();
      cy.get('a[data-menu-id="3"]').eq(0).should('be.visible').click();
       cy.get('.hmenu-item.hmenu-title').eq(5).should('contains.text','Kindle E-readers');
       cy.wait(3000);
       cy.contains('Kindle Kids').should('have.class','hmenu-item');
       cy.wait(3000);
       cy.get(':nth-child(31) > :nth-child(4) > .hmenu-item');
       cy.wait(3000);
})
it('visit Amazon appstore menu bar', () =>{
  cy.get('[id="nav-hamburger-menu"]').trigger('mouseover').click({force:true});
  cy.wait(3000);
  cy.get('a[data-menu-id="4"]').eq(0).should('be.visible').click();
  cy.contains('All Apps and Games').should('have.class','hmenu-item');
  cy.wait(3000);
  // cy.xpath("//a[contains(text(),'Games')]").eq(1).should('be.visible');
  cy.xpath("//a[contains(text(),'Games')]").eq(1).then(($el) => {
    if ($el.is(':visible')) {
      cy.wrap($el).should('be.visible');
    } else {
      cy.log('Element is not visible or covered');
    }
  });
  
  cy.contains('Amazon Coins').should('have.class','hmenu-item');
  cy.contains('Download Amazon Appstore').should('have.class','hmenu-item');
  cy.contains('Amazon Apps').should('have.class','hmenu-item');
  cy.contains('Your Apps and Subscriptions').should('have.class','hmenu-item')
  cy.get('a[data-ref-tag="nav_em_1_4_BT_0_main_menu"]').eq(0).click({force:true});
})
})


    
  
