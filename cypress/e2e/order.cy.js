describe('Sipariş Sayfası Testi', () => {
  it('Sipariş formu elemanları eksiksiz görünüyor', () => {
    cy.visit('http://localhost:5173/order');

    // Başlık
    cy.contains('Position Absolute Acı Pizza').should('be.visible');

    // Boyut Seç (radio)
    cy.get('input[type="radio"][name="size"]').should('have.length', 3);

    // Hamur Seç (select)
    cy.get('select[name="dough"]').should('be.visible');

    // Ek Malzemeler (checkbox)
    cy.get('input[type="checkbox"][name="toppings"]').should('have.length.greaterThan', 0);

    // Sipariş Notu
    cy.get('textarea[name="notes"]').should('be.visible');

    // Adet seçme butonları
    cy.contains('+').should('be.visible');
    cy.contains('-').should('be.visible');

    // Sipariş Ver butonu
    cy.get('button[type="submit"]').should('contain', 'Sipariş Ver');
  });
});
