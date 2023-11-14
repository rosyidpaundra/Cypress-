describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')

    //login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()

    //detail product
    cy.get('#item_4_title_link > .inventory_item_name').click()

    //add to cart
    cy.get('.btn_primary').click()

    //Remove Product
    cy.get('.btn_secondary').click()
    
    //Back to Dashboard
    cy.get('.inventory_details_back_button').click({ force: true })
    


  })
})