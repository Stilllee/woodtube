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

  it("키워드로 비디오 검색", () => {
    cy.findByPlaceholderText("검색").type("백종원");
    cy.findByRole("button").click();
    cy.findByText(
      "[백종원의 님아 그 시장을 가오_EP.40_부안] 이 집에는 짬뽕보다 강력한 한방이 있습니다"
    ).should("exist");
  });

  it("디테일 페이지로 이동", () => {
    cy.findAllByRole("listitem").first().click();
    cy.findByTitle(
      "어쩌고 선정🏆 이 입담으로 유튜브해 줬으면 하는 배우 1위💥 최민식 자기님 #highlight#유퀴즈온더블럭 | YOU QUIZ ON THE BLOCK EP.231"
    ).should("exist");
    cy.findByText(
      "어쩌고 선정🏆 이 입담으로 유튜브해 줬으면 하는 배우 1위💥 최민식 자기님 #highlight#유퀴즈온더블럭 | YOU QUIZ ON THE BLOCK EP.231"
    ).should("exist");
    cy.findByText(
      "[백종원의 님아 그 시장을 가오_EP.40_부안] 이 집에는 짬뽕보다 강력한 한방이 있습니다"
    ).should("exist");
  });
});
