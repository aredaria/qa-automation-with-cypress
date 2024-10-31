import url from "../fixtures/urls.json";

class SearchResultPage {
  get jobList() {
    return cy.get(".job-tile-lists");
  }
  get firstJobTile() {
    return cy.get(".job-tile-lists div.job-tile").first();
  }
  get jobTypeFilter() {
    return cy.get("#desktopFilter_job_type_filter");
  }
  get jobContentElement() {
    return cy.get("#job-detail-body .content");
  }

  openSearchPage() {
    cy.visit(url.searchPage);
  }

  chooseJobType(jobType) {
    this.jobTypeFilter
      .find(".checkbox-option.btn")
      .filter((index, el) => {
        return Cypress.$(el).text().includes(jobType);
      })
      .first()
      .click();
  }

  openFirstJobTile() {
    this.firstJobTile.find("a").first().click();
  }
}

export default new SearchResultPage();
