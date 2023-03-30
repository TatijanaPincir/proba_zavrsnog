/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'
import { loginPage } from '../page_objects/login_page'
const userData = require('../fixtures/user.json')
describe('Login', () => {

    it('successful login', () => {
        cy.visit("/login")
        loginPage.mainHeader.should('have.text', 'Log in with your existing account')
        loginPage.loginInfo(userData.userEmail, userData.password)
        loginPage.email.should('have.value', userData.userEmail)
        loginPage.password.should('have.value', userData.password)
        cy.url().should('eq', 'https://cypress.vivifyscrum-stage.com/my-organizations')
        loginPage.mainHeader.should('not.exist')
    });

    it('creat new organization', () => {
        var imeOrganizacija = faker.name.firstName()
        cy.visit("/login")
        loginPage.loginInfo(userData.userEmail, userData.password)
        loginPage.addNew.click()
        loginPage.newOrganizaton.click()
        loginPage.newOrganizationTitle.should("be.visible")
        loginPage.organizatonTitle.type(imeOrganizacija)
        //loginPage.organizatonTitle.should("contain", imeOrganizacija)
        loginPage.nextBtn.click()
        loginPage.nextBtn.click()

    })

    it.only('test bekenda', () => {
        
        cy.request({
            methgitod: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login',
            body: {
                email: "tatianapintir+peckovski@gmail.com",
                password: "Nova.sifra1234",
                "g-recaptcha-response":""
            }
        }).then((response) => {
            cy.log(response);
            expect(response.status).eq(200)

        })
    })




})

