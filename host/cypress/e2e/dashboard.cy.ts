/// <reference types="cypress" />

describe("Dashboard Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('input[placeholder="Digite seu nome:"]').type("Max");
    cy.contains("Entrar").click();
  });

  it("should open and close the sidebar", () => {
    cy.get('img[alt="Menu"]').click();
    cy.get("#close-sidebar").should("be.visible");

    cy.get("#close-sidebar").click();
    cy.get("#close-sidebar").should("not.exist");
  });

  it("should navigate to clients page from sidebar", () => {
    cy.get('img[alt="Menu"]').click();

    cy.contains("span", "Clientes").click();

    cy.get("#close-sidebar").should("not.exist");
    cy.contains("clientes encontrados").should("be.visible");
  });

  it("should navigate to selected clients page from sidebar", () => {
    cy.get('img[alt="Menu"]').click();

    cy.contains("span", "Clientes selecionados").click();

    cy.get("#close-sidebar").should("not.exist");
    cy.contains("Clientes selecionados:").should("be.visible");
  });

  it("should navigate to clients page from header", () => {
    cy.get("header").contains("span", "Clientes").click();

    cy.contains("clientes encontrados").should("be.visible");
  });

  it("should navigate to selected clients page from header", () => {
    cy.get("header").contains("span", "Clientes selecionados").click();

    cy.contains("Clientes selecionados:").should("be.visible");
  });

  it("should log out, clear local storage, and redirect to login", () => {
    cy.window()
      .its("localStorage")
      .invoke(
        "setItem",
        "selected-cards-storage",
        '[{"id":1,"name":"Test Card"}]'
      );

    cy.get("header").contains("span", "Sair").click();

    cy.window().its("localStorage").invoke("getItem", "name").should("be.null");

    cy.url().should("not.include", "/dashboard");
    cy.get('input[placeholder="Digite seu nome:"]').should("be.visible");
  });

  it("should open and close the create client modal", () => {
    cy.get("header").contains("span", "Clientes").click();

    cy.contains("button", "Criar cliente").click();

    cy.contains("span", "Criar cliente:").should("be.visible");

    cy.get("#close-modal-create").click();

    cy.get("dialog").should("not.be.visible");
  });

  it("should show error messages for empty fields in create client modal", () => {
    cy.get("header").contains("span", "Clientes").click();

    cy.contains("button", "Criar cliente").click();

    cy.contains("span", "Criar cliente:").should("be.visible");

    cy.get("dialog").contains("button", "Criar cliente").click();

    cy.contains("p", "O nome do cliente é obrigatório.").should("be.visible");
    cy.contains("p", "O salário é obrigatório e deve ser um número.").should(
      "be.visible"
    );
    cy.contains(
      "p",
      "O valor da empresa é obrigatório e deve ser um número."
    ).should("be.visible");

    cy.get("#close-modal-create").click();

    cy.get("dialog").should("not.be.visible");
  });

  it("should add a client to the selected list and show a success toast", () => {
    cy.get("header").contains("span", "Clientes").click();

    cy.get('img[alt="Plus"]').first().click();

    cy.contains("Cliente selecionado com sucesso!").should("be.visible");
  });

  it("in the card select delete client and open modal to delete", () => {
    cy.get("header").contains("span", "Clientes").click();

    cy.get('img[ alt="Trash"]').first().click();

    cy.get("dialog")
      .contains("Você está prestes a excluir o cliente:")
      .should("be.visible");

    cy.get("#close-modal-delete").click();
    cy.get("dialog").should("not.be.visible");
  });

  it("should delete a client and show a success toast", () => {
    cy.get("header").contains("span", "Clientes").click();

    cy.get('img[alt="Trash"]').first().click();

    cy.get("dialog").contains("button", "Excluir").click();

    cy.wait(500);

    cy.contains("Cliente deletado com sucesso!").should("be.visible");
  });

  it("in the card select edit client and open modal to edit", () => {
    cy.get("header").contains("span", "Clientes").click();

    cy.get('img[alt="Pen"]').first().click();

    cy.get("dialog").contains("Editar cliente:").should("be.visible");
    cy.wait(500);

    cy.contains("dialog", "Editar cliente:").within(() => {
      cy.get('input[placeholder="Digite o nome"]').should("be.visible").clear();
      cy.get('input[placeholder="Digite o salário"]')
        .should("be.visible")
        .clear();
      cy.get('input[placeholder="Digite o valor da empresa"]')
        .should("be.visible")
        .clear();

      cy.contains("button", "Editar cliente").click();

      cy.get('input[placeholder="Digite o nome"]').should(
        "have.class",
        "!border-red-500"
      );
      cy.get('input[placeholder="Digite o salário"]').should(
        "have.class",
        "!border-red-500"
      );
      cy.get('input[placeholder="Digite o valor da empresa"]').should(
        "have.class",
        "!border-red-500"
      );

      cy.get("p.text-red-500").should("exist");
    });

    cy.contains("dialog", "Editar cliente:").find('img[alt="Close"]').click();
    cy.get("dialog").should("not.be.visible");
  });

  it("should select a card and navigate to selected clients page", () => {
    cy.get("header").contains("span", "Clientes").click();

    cy.get('img[alt="Plus"]').first().click();

    cy.get("header").contains("span", "Clientes selecionados").click();

    cy.contains("Clientes selecionados:").should("be.visible");
  });

  it("should delete a selected client and show a success toast", () => {
    cy.get("header").contains("span", "Clientes").click();

    cy.get('img[alt="Plus"]').first().click();

    cy.get("header").contains("span", "Clientes selecionados").click();

    cy.get('img[alt="Remove"]').first().click();

    cy.contains("Cliente removido com sucesso!").should("be.visible");
  });

  it("should clear all selected clients and show a success toast", () => {
    cy.get("header").contains("span", "Clientes").click();

    cy.get('img[alt="Plus"]').first().click();

    cy.get("header").contains("span", "Clientes selecionados").click();

    cy.contains("button", "Limpar todos").click();

    cy.contains("Todos os clientes foram removidos com sucesso!").should("be.visible");
  });
});
