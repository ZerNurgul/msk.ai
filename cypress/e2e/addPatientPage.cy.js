/// <reference types = 'cypress' />

//const faker = require('faker');
// { internet } from 'faker';
describe("dashboard page test case",()=>{

    it("as a user ,I shoul be able to click add patient button",()=>{
        
        //cy.url().should('contain','patient-list')
    
        cy.visit("https://dashboard-staging.myrecovery.ai/")
        cy.get(':nth-child(3) > .veevalidated-input > .has-label > .form-control').click().type("nurgul.zerenturk.qa@test.mr")
        cy.get(':nth-child(4) > .veevalidated-input > .has-label > .form-control').click().type("qaengineer")
        cy.get('#login').click()
        cy.get('[data-cy="invite-patient-btn"]').click()
        cy.get('.globalpage__header-title.float-left').should('be.visible')

        
    })
    
    it("as a user ,I shoul be able to add patient ",()=>{
        

        
        //const randomEmail = cy.faker.internet.email();
cy.login(Cypress.env('validEmail'),Cypress.env('validPassword'))
cy.get('.ui > span').click()
cy.get('[data-cy="patient-firstname"]').click()
    .type('Hay')
cy.get('[data-cy="patient-lastname"]').click()
    .type('Kara')
cy.get('[data-cy="patient-email"]').click()
.type('hayaldir@test.com')
   //cy.get('[data-cy="patient-email"]').click()
   //cy.get('[data-cy="patient-email"]').type(randomEmail);
   cy.get('.vue-tel-input > input').click().type('07448436765')
   cy.get('[data-cy="team-lead"]').click().contains('Nurgul Zerenturk').should('be.visible')
   //cy.get('#team-details-form > :nth-child(1) > :nth-child(1) > .spaced > .mr > .text').click().contains('Nurgul Zerenturk').should('be.visible')
   cy.get('[data-cy="team-provider"]').click().contains('Charing Cross Hospital').click()

   cy.get(':nth-child(3) > .field > :nth-child(1) > .spaced > .mr').click().contains('msk.ai: Knee Replacement').click()
   cy.get('[value="Save"]').click()



   
})

it("as a user ,I shoul be able see new patient ",()=>{
    
cy.login(Cypress.env('validEmail'),Cypress.env('validPassword'))
cy.get('.ui > span').click()
cy.get('[data-cy="patient-firstname"]').click()
.type('Michael')
cy.get('[data-cy="patient-lastname"]').click()
.type('Kara')
cy.get('[data-cy="patient-email"]').click()
.type('zerdali@test.com')
cy.get('.vue-tel-input > input').click().type('07448436765')

cy.get(':nth-child(2) > :nth-child(1) > .spaced > .mr').click().contains('Charing Cross Hospital').click()

cy.get(':nth-child(3) > .field > :nth-child(1) > .spaced > .mr').click().contains('msk.ai: Knee Replacement').click()
cy.get('[value="Save"]').click({force: true})


cy.url().should('contain','patient-list')
cy.get('[data-cy="list-filter"]').click().type('Michael')
cy.get(':nth-child(1) > .listcell__fullname > .listcell-name > .wrapper > div').click()
        cy.url().should('contain','patients/14651')
})

it("as a user ,I shoul be not able to add patient with the same username ",()=>{
    
cy.login(Cypress.env('validEmail'),Cypress.env('validPassword'))
cy.get('.ui > span').click()
cy.get('[data-cy="patient-firstname"]').click()
.type('Hasan')
cy.get('[data-cy="patient-lastname"]').click()
.type('Kara')
cy.get('[data-cy="patient-email"]').click()
.type('hasankara@test.com')
cy.get('.vue-tel-input > input').click().type('07448436765')
cy.get('#team-details-form > :nth-child(1) > :nth-child(1) > .spaced > .mr').contains('Nurgul Zerenturk').should('be.visible')
cy.get(':nth-child(2) > :nth-child(1) > .spaced > .mr').click().contains('Charing Cross Hospital').click()

cy.get(':nth-child(3) > .field > :nth-child(1) > .spaced > .mr').click().contains('msk.ai: Knee Replacement').click()
cy.get('[value="Save"]').click()

cy.wait(5000) // wait for the pop-up to appear


// Locate the pop-up using a CSS selector
cy.get('.header').contains('User with username')

// Perform actions on the pop-up
//cy.get('.header').find('.close-button').click()
//
//cy.get('.mr.ur.icon.message.error').click().contains('User with username')
//cy.get('[data-layer="Content"]').click().contains('User with username')
})
//     it("as a user ,I shoul not be able to add patient without name",()=>{
    
//         cy.login(Cypress.env('validEmail'),Cypress.env('validPassword'))
//         cy.get('.ui > span').click()
//        cy.get(':nth-child(3) > [data-v-1c9c3d41=""] > .veevalidated-input > .has-label > .form-control').click()
    
//    cy.get(':nth-child(4) > [data-v-1c9c3d41=""] > .veevalidated-input > .has-label > .form-control').click()
    
//     cy.get('.label-section > .invalid-feedback').should('be.visible')
    
//     })




})