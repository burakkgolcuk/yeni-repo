describe('Sipariş Akışı Testi', () => {
  it('Form doldurulup sipariş başarıyla veriliyor', () => {
    cy.visit('http://localhost:5173/order');

    // Boyut ve hamur seç
    cy.get('input[type="radio"][value="Orta"]').check({ force: true });
    cy.get('select[name="dough"]').select('İnce');

    // Ek malzeme seç
    cy.get('input[type="checkbox"][value="Mısır"]').check({ force: true });
    cy.get('input[type="checkbox"][value="Sucuk"]').check({ force: true });

    // Not ekle
    cy.get('textarea[name="notes"]').type('Lütfen kenarları bol peynirli olsun.');

    // Adet arttır
    cy.contains('+').click();

    // Sipariş ver
    cy.get('button[type="submit"]').click();

    // Onay sayfası geldi mi?
    cy.url().should('include', '/success');
    cy.contains('TEBRİKLER!').should('be.visible');
    cy.contains('SİPARİŞİNİZ ALINDI').should('be.visible');
  });
});
