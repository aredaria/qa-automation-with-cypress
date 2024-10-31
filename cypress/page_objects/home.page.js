class HomePage{
    get titleInp(){
        return cy.get("#homepage #search_typeahead"); 
    }
    get locationInp(){
        return cy.get("#homepage #location-typeahead");
    }
    get searchBtn(){
        return cy.get("#search-button");
    }

    typeInTitle(text) {
        this.titleInp.type(text);
    }

    typeInLocation(location){
        this.locationInp.type(location);
    }

    clickSearchBtn(){
        this.searchBtn.click();
    }
}
export default new HomePage();