import searchResultPage from "../page_objects/searchResult.page"
import testData from "../fixtures/testData.json"
import helper from "../page_objects/helper";

describe("should use filters on the search page", () => {

    beforeEach(() => {
        searchResultPage.openSearchPage();
        helper.clickAcceptCookiesBtn();
    })
    it.only("should filter by Job Type", () => {
        searchResultPage.chooseJobType(testData["job type"]);
        searchResultPage.openFirstJobTile();
        searchResultPage.jobContentElem.should('contain', `${testData["job type"].split(' ')[0].toLowerCase()}`)
        searchResultPage.jobContentElem.should('contain', `${testData["job type"].split(' ')[1].toLowerCase()}`)
    })
})