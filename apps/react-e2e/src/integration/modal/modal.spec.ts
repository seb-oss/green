describe('react: Modal component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-modal--default-story'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Modal!');
    });
});
