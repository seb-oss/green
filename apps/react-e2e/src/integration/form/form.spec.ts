describe('react: Form component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=form--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Form!');
    });
});
