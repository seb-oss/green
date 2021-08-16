describe('react: Card component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-card--card'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Card!');
    });
});
