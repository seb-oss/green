describe('react-charts: ReactCharts component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reactcharts--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ReactCharts!');
    });
});
