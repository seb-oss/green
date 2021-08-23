describe('react: Text component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=text--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Text!');
    });
});
