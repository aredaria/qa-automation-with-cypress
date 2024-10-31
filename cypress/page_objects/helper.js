import globalElements from "../fixtures/globalElements.json"

class Helper{
    get acceptCookiesBtn(){
        return cy.get(`#${globalElements.acceptCookiesBntId}`);
    }

    clickAcceptCookiesBtn(){
        this.acceptCookiesBtn.click();
    }
}

export default new Helper();