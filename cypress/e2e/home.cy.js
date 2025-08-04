describe('Anasayfa Testi', () => {
  it('Anasayfa başarıyla yükleniyor ve başlık görünüyor', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Teknolojik Yemekler').should('be.visible');
  });
});
