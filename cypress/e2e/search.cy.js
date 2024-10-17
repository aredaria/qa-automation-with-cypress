import homePage from "../page_objects/home.page";
import testData from "../fixtures/testData.json";
import searchResultPage from "../page_objects/searchResult.page";

describe("search from home page", () => {

  beforeEach(() => {
    cy.visit("");
    homePage.clickAcceptCookiesBtn();
  });

  it("should search by title/keyword", () => {
    homePage.typeInTitle(testData.title);
    homePage.clickSearchBtn();
    cy.url().should("include", `search?base_query=${testData.title}`);
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
      `search?base_query=&loc_query=${testData.location.replace(" ", "+")}`
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
    cy.url().should("include", `base_query=${testData.title}`);
    cy.url().should(
      "include",
      `loc_query=${testData.location.replace(" ", "+")}`
    );
    searchResultPage.firstJobTile
      .contains(testData.title, { matchCase: false })
      .should("be.visible");
    searchResultPage.firstJobTile
      .contains(testData.location, { matchCase: false })
      .should("be.visible");
  });
  
  it.only("should search with empty title and location fields", () => {
    homePage.clickSearchBtn();
    cy.url().should("include", `search?base_query=&loc_query=`);
    searchResultPage.jobList.children().should("not.exist");
  });
});
