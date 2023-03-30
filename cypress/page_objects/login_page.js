class LoginPage {
    get email() {
        return cy.get("input[type='email']")
    };
    get password() {
        return cy.get("input[type='password']")
    };
    get submitBtn() {
        return cy.get("button[type='submit']")
    }
    get mainHeader() {
        return cy.get("h1")
    }

    loginInfo(email, password) {
        this.email.type(email);
        this.password.type(password);
        this.submitBtn.click()
    }

    get addNew() {
        return cy.contains("Add New")
    }
    get newOrganizaton() {
        return cy.contains("Add Organization")
    }

    get organizatonTitle(){
        return cy.get ("input[name='name']")
    }
get nextBtn (){
    return cy.get ("button[name='next_btn']")
}

get newOrganizationTitle(){
    return cy.contains ("Organization Name *")
}

get imeOrganizacija(){
    return cy.contains (this.imeOrganizacija)
}

}


export const loginPage = new LoginPage()