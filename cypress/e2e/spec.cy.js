describe('Amazon Navigation Tests', () => {
  
  beforeEach('Visit Amazon Website', () => {
    cy.visit("/");
  });

  // it("Click on ALL and check Digital Content & Devices", () => {
  //   cy.get('#nav-hamburger-menu').should('exist').click({ force: true });
  //   cy.get('#hmenu-content').should('be.visible');
  //   cy.contains('Digital Content & Devices').should('have.class', 'hmenu-item').should('be.visible');
  //   cy.get('a[data-menu-id="2"]').should('be.visible');
  //   cy.get('a[data-menu-id="3"]').should('be.visible');
  //   cy.get('[data-menu-id="4"]').should('be.visible');
  // });

  // it('Check Kindle E-readers & Books', () => {
  //   cy.get('#nav-hamburger-menu').should('exist').click({ force: true });
  //   cy.get('a[data-menu-id="3"]').should('be.visible').click();
  //   cy.get('ul[data-menu-id="3"]').children('li').eq(1).contains('Kindle E-readers & Books').should('be.visible').click();
  //   cy.contains('Kindle Kids').should('have.class', 'hmenu-item').should('be.visible');
  //   cy.get(':nth-child(31) > :nth-child(4) > .hmenu-item').should('be.visible');
  // });

  // it('Visit Amazon Appstore Menu Bar', () => {
  //   cy.get('#nav-hamburger-menu').should('exist').click({ force: true });
  //   cy.get('a[data-menu-id="4"]').should('be.visible').click();
  //   cy.contains('All Apps and Games').should('have.class', 'hmenu-item').should('be.visible');
  //   cy.contains('Games').should('be.visible');
  //   cy.contains('Amazon Coins').should('have.class', 'hmenu-item').should('be.visible');
  //   cy.contains('Download Amazon Appstore').should('have.class', 'hmenu-item').should('be.visible');
  //   cy.contains('Amazon Apps').should('have.class', 'hmenu-item').should('be.visible');
  //   cy.contains('Your Apps and Subscriptions').should('have.class', 'hmenu-item').should('be.visible');
  //   cy.get('a[data-ref-tag="nav_em_1_4_BT_0_main_menu"]').eq(0).should('exist').click({ force: true });
  // });
});
