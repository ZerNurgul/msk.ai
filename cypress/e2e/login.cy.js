

/// <reference types = 'cypress' />


describe("dashboard page test case",()=>{

    it("as a user ,I shoul be able to login with correct credential",()=>{

        
       cy.login(Cypress.env('validEmail'),Cypress.env('validPassword'))
        cy.url().should('contain','patient-list')
    
        
    })
    
    
    it("as a user ,I shoul not be able to login without @ sign",()=>{
        cy.visit("https://dashboard-staging.myrecovery.ai/")
        cy.get('[data-cy="login-email"]').click().type("nurgul.zerenturk.qatest.mr")
        cy.get('[data-cy="login-password"]').click().type("qaengineer")
        cy.get('#login').click({force: true})
        cy.get('.invalid-feedback').should('be.visible')
       

        
    
    })
    
    it("as a user ,I shoul be able to search patient name",()=>{
    
        cy.visit("https://dashboard-staging.myrecovery.ai/")
        cy.get(':nth-child(3) > .veevalidated-input > .has-label > .form-control').click().type("nurgul.zerenturk.qa@test.mr")
        cy.get(':nth-child(4) > .veevalidated-input > .has-label > .form-control').click().type("qaengineer")
        cy.get('#login').click()
        cy.url().should('contain','patient-list')
        
       cy.get('[data-cy="list-filter"]').click().type('Michael')
        cy.get('.wrapper > div').should('be.visible')


    })

    it("as a user ,I shoul be able to search patient name",()=>{
    
        cy.visit("https://dashboard-staging.myrecovery.ai/")
        cy.get(':nth-child(3) > .veevalidated-input > .has-label > .form-control').click().type("nurgul.zerenturk.qa@test.mr")
        cy.get(':nth-child(4) > .veevalidated-input > .has-label > .form-control').click().type("qaengineer")
        cy.get('#login').click()
        cy.url().should('contain','patient-list')
        //cy.get('input').click().type('Asli')
       // cy.get('input[placeholder="Search for a patient"]').click().type('Michael')
       cy.get('[data-cy="list-filter"]').click().type('Michael')
       
        cy.get('div[data-v-a3995ff8]').contains('Michael')
       // cy.get('div[data-v-a3995ff8]').click()
        //cy.url().should('contain','patients/14651')


    })
    
    
    
    })
    