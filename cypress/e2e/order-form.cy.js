describe("Sipariş Formu Testi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("Form elemanları görünür olmalı", () => {
    cy.contains("Position Absolute Acı Pizza");
    cy.get('input[name="size"]').should("have.length", 3);
    cy.get('select[name="dough"]').should("exist");
    cy.get('input[type="checkbox"]').should("exist");
    cy.get('textarea[name="notes"]').should("exist");
    cy.get('button[type="submit"]').should("exist");
  });
});
