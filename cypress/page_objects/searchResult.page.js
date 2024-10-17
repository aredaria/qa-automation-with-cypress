class SearchResultPage{
    get jobList(){
        return cy.get(".job-tile-lists");
    }
    get firstJobTile(){
        return cy.get(".job-tile-lists div.job-tile").first();
    }
}

export default new SearchResultPage();