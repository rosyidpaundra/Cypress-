describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')



    //empty email 
    cy.get('[data-test="username"]').clear()
    cy.get('[data-test="password"]').type('123')
      cy.get('#login-button').click()
    
    cy.get('[data-test="username"]').clear()
    cy.get('[data-test="password"]').clear()

    //empty password
    cy.get('[data-test="username"]').type('Anis_Gibmex')
    cy.get('[data-test="password"]').clear()
      cy.get('#login-button').click()

    cy.get('[data-test="username"]').clear()
    cy.get('[data-test="password"]').clear()

    //wrong email and password 
    cy.get('[data-test="username"]').type('Ganjar_Prabowo')
    cy.get('[data-test="password"]').type('123')
        cy.get('#login-button').click()

  })
})