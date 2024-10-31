class HomePage{
    get titleInput(){
        return cy.get("#homepage #search_typeahead"); 
    }
    get locationInput(){
        return cy.get("#homepage #location-typeahead");
    }
    get searchBtn(){
        return cy.get("#search-button");
    }

    typeInTitle(text) {
        this.titleInput.type(text);
    }

    typeInLocation(location){
        this.locationInput.type(location);
    }

    clickSearchBtn(){
        this.searchBtn.click();
    }
}
export default new HomePage();