const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

    Given('Pencarian data berhasil', () => {
      cy.get('#searchTerm').type('istilah penelusuran');
      cy.get('#searchButton').click();
      cy.url().should('include', '/search.html');
      cy.get('.search-results').should('contain', 'istilah penelusuran');
    });
  
    When('Istilah penelusuran kosong', () => {
      cy.get('#searchButton').click();
      cy.get('.search-results').should('contain', 'Istilah pencarian diperlukan');
    });
  
    Then('Tidak ditemukan hasil penelusuran', () => {
      cy.get('#searchTerm').type('istilah penelusuran yang tidak ada');
      cy.get('#searchButton').click();
      cy.url().should('include', '/search.html');
      cy.get('.search-results').should('contain', 'Tidak ada hasil pencarian yang ditemukan untuk "istilah penelusuran"');
    });