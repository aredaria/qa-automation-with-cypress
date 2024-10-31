import homePage from "../page_objects/home.page";
import testData from "../fixtures/testData.json";
import searchResultPage from "../page_objects/searchResult.page";
import helper from "../page_objects/helper";
import urls from "../fixtures/urls.json"

describe("search from home page", () => {

  beforeEach(() => {
    cy.visit("");
    helper.clickAcceptCookiesBtn();
  });

  it("should search by title/keyword", () => {
    homePage.typeInTitle(testData.title);
    homePage.clickSearchBtn();
    cy.url().should("include", `${urls["searchByTitle/Description"]}${testData.title}`);
    searchResultPage.firstJobTile
      .contains(testData.title, { matchCase: false })
      .should("be.visible");
  });

  it("should search by location", () => {
    homePage.typeInLocation(testData.location);
    homePage.clickSearchBtn();
    cy.waitForStableDOM();
    homePage.clickSearchBtn();
    cy.url().should(
      "include",
      `${urls.searchByLocation}${testData.location.replace(" ", "+")}`
    );
    searchResultPage.firstJobTile
      .contains(testData.location, { matchCase: false })
      .should("be.visible");
  });

  it("should search by title and location", () => {
    homePage.typeInTitle(testData.title);
    homePage.typeInLocation(testData.location);
    homePage.clickSearchBtn();
    cy.waitForStableDOM();
    homePage.clickSearchBtn();
    cy.url().should("include", `${urls["searchByTitle/Description"]}${testData.title}`);
    cy.url().should(
      "include",
      `${urls.searchByLocation}${testData.location.replace(" ", "+")}`
    );
    searchResultPage.firstJobTile
      .contains(testData.title, { matchCase: false })
      .should("be.visible");
    searchResultPage.firstJobTile
      .contains(testData.location, { matchCase: false })
      .should("be.visible");
  });

  it("should search with empty title and location fields", () => {
    homePage.clickSearchBtn();
    cy.url().should("include", `${urls["searchByTitle/Description"]}&${urls.searchByLocation}`);
    searchResultPage.jobLst.children().should("exist");
  });
});
