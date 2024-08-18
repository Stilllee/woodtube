/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";

describe("Youtube App", () => {
  beforeEach(() => {
    cy.intercept("GET", /(mostPopular)/g, {
      fixture: "popular.json",
    });
    cy.intercept("GET", /(search)/g, {
      fixture: "search.json",
    });
    cy.viewport(1200, 800);
    cy.visit("/");
  });

  it("렌더링", () => {
    cy.findByText("WoodTube").should("exist");
  });

  it("처음에는 popular 비디오 목록을 보여준다.", () => {
    cy.findByText("혹시 포토샵 해본 적 있나?").should("exist");
  });
});
