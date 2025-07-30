describe('Pizza Sipariş Formu', () => {
  beforeEach(() => {
    cy.visit('/order'); // form sayfasına git
  });

  it('İsim inputuna metin girilebilmeli', () => {
    cy.get('input[name="isim"]').type('Burak').should('have.value', 'Burak');
  });

  it('Malzemelerden birden fazlası seçilebilmeli', () => {
    cy.get('input[type="checkbox"]').check(['Zeytin', 'Peynir']);
    cy.get('input[value="Zeytin"]').should('be.checked');
    cy.get('input[value="Peynir"]').should('be.checked');
  });

  it('Form doğru doldurulduğunda gönderilebilmeli', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 201,
      body: { id: 123 },
    }).as('postPizza');

    cy.get('input[name="isim"]').type('Burak');
    cy.get('input[type="radio"][value="Orta"]').check();
    cy.get('select[name="pizzaType"]').select('Sucuklu');
    cy.get('input[type="checkbox"]').check(['Zeytin', 'Peynir']);
    cy.get('textarea[name="notlar"]').type('Bol peynirli olsun');

    cy.get('button[type="submit"]').click();

    cy.wait('@postPizza').its('response.statusCode').should('eq', 201);
  });
});
