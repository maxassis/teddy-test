/// <reference types="cypress" />

describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display an error message when submitting with an empty input", () => {
    cy.contains("Entrar").click();
    cy.contains("Campo obrigatório").should("be.visible");
  });

  it("should redirect to the dashboard and save the name in local storage on successful login", () => {
    cy.get('input[placeholder="Digite seu nome:"]').type("Max");
    cy.contains("Entrar").click();
    cy.url().should("include", "/dashboard");
    cy.window()
      .its("localStorage")
      .invoke("getItem", "name")
      .should("equal", "Max");
  });
});
