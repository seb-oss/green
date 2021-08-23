describe('react: Button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-form-button--button'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Button!');
    });
});
