/// <reference types = 'cypress' />


describe("dashboard page test case",()=>{

    it("as a user ,I shoul be able to login with correct credential",()=>{

        
       cy.login(Cypress.env('validEmail'),Cypress.env('validPassword'))
       cy.get('[href="#/settings"] > .nav-wrapper > .nav-img').click()

       cy.get('.globalpage__header-title.float-left').should('contain','Account settings')
       
    
    
    })
//As a user I want to edit my details from Account Settings so that I can update my profile.
    it("as a user ,I shoul be able to edit account settings ",()=>{

        
        
       cy.login(Cypress.env('validEmail'),Cypress.env('validPassword'))
       cy.get('[href="#/settings"] > .nav-wrapper > .nav-img').click({force:true})
       cy.get('.globalpage__header-title.float-left').click()
       cy.get('[data-cy="user-firstname"]').click().clear()
       .type('Nurgul', {delay: 100})
       
       cy.get('[data-cy="user-lastname"]').click().clear().wait(200)
       
       .type('Zerenturk',{delay: 100})
       cy.get('#settings-form-submit').click()
       cy.get('.name').should('have.text','Nurgul Zerenturk ')


    })

     it("as a user ,I shoul not be able to edit name with emoji ",()=>{

    const emojiName = '😀Nurgul' 
    cy.login(Cypress.env('validEmail'),Cypress.env('validPassword'))
    cy.get('[href="#/settings"] > .nav-wrapper > .nav-img').click({force:true})
    cy.get('.globalpage__header--row > :nth-child(1) > :nth-child(1) > .globalpage__header-title').click()
    cy.get('[data-cy="user-firstname"]').click().clear()
    .type('Nurgul😃', {delay: 100})
    
    cy.get('[data-cy="user-lastname"]').click().clear().wait(200)
    
    .type('Zerenturk',{delay: 100})
    cy.get('#settings-form-submit').click()
    cy.get('.name').should('not.contain','Nurgul 😃Zerenturk ')


 })
    it("as a user ,I shoul be able to edit account settings ",()=>{

        
        
        cy.login(Cypress.env('validEmail'),Cypress.env('validPassword'))
        cy.get('[href="#/settings"] > .nav-wrapper > .nav-img').click({force:true})
        cy.get('.globalpage__header--row > :nth-child(1) > :nth-child(1) > .globalpage__header-title').click()
        cy.get('[data-cy="user-firstname"]').click().clear()
        .type('Nurgul', {delay: 100})
        
        cy.get('[data-cy="user-lastname"]').click().clear().wait(200)
        
        .type('Zerenturk',{delay: 100})
        cy.get('#settings-form-submit').click()
        cy.get('.name').should('have.text','Nurgul Zerenturk ')
 
 
     })


    it("as a user ,I shoul be able to change password ",()=>{

        
        
       cy.login(Cypress.env('validEmail'),Cypress.env('validPassword'))
       cy.get('[href="#/settings"] > .nav-wrapper > .nav-img').click()
       cy.get('[data-cy="user-password"]').click()
       cy.get('[data-cy="user-password"]').type('qaengineer')
       cy.get('[data-cy="user-new-password"]').type('Istanbul12345%')
       cy.get('[data-cy="show-password-btn"]').click()
       cy.get('[data-cy="user-confirm-new-password"]').type('Istanbul12345%')
       cy.get('[data-cy="show-confirm-password-btn"]').click()
       cy.get('#change-password-form > .ui').click()
       cy.get('#notify').contains('Details could not be saved')




    })

})