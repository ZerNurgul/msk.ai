/// <reference types = 'cypress' />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//declare namespace Cypress {
    //interface Chainable<Subject = any> {
      //login(email:string, password:string): Chainable<void>;
    //}}
    // Cypress.Commands.add('login', (email, password) => {
    //     cy.visit("https://dashboard-staging.myrecovery.ai/")
    //     cy.get(':nth-child(3) > .veevalidated-input > .has-label > .form-control').click().type("nurgul.zerenturk.qa@test.mr")
    //     cy.get(':nth-child(4) > .veevalidated-input > .has-label > .form-control').click().type("qaengineer")
    //     cy.get('#login').click()
        
    //   })
      //Cypress.Commands.add('login', (email, pw) => {login(email, pw) })
      //Cypress.Commands.add('visitBaseURL',(URL)=>{  visitBaseURL()}
     
      Cypress.Commands.add('login', (username, password) => {
        cy.visit(Cypress.env('baseURL') )// replace with your login page URL
        cy.get(':nth-child(3) > .veevalidated-input > .has-label > .form-control').type(username)
        cy.get(':nth-child(4) > .veevalidated-input > .has-label > .form-control').type(password)
        cy.get('#login').click()
      })
       
  
      
     