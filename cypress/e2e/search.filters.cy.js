import searchResultPage from "../page_objects/searchResult.page"
import testData from "../fixtures/testData.json"

describe("should use filters on the search page", () => {

    beforeEach(() => {
        searchResultPage.openSearchPage();
        searchResultPage.clickAcceptCookiesBtn();
    })
    it.only("should filter by Job Type", () => {
        searchResultPage.chooseJobType(testData["job type"]);
        searchResultPage.openFirstJobTile();
        searchResultPage.jobContentElement.should('contain', `${testData["job type"].split(' ')[0]}`)
        searchResultPage.jobContentElement.should('contain', `${testData["job type"].split(' ')[1]}`)
    })
})