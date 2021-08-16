describe('react: Alert component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-alert--alert'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Alert!');
    });
});
