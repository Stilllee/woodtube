/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";

describe("Youtube App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("렌더링", () => {
    cy.findByText("WoodTube").should("exist");
  });
});
