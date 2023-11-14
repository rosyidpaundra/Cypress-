describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')

    //Login  
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()

    //add to cart
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get('.fa-layers-counter').click()

    //Back to Dashboard
    cy.get('.cart_footer > .btn_secondary').click()

     //Add to cart
    cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
    cy.get('.fa-layers-counter').click()

    //Remove Product
    cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .btn_secondary').click()

    //Checkout Proses
    cy.get('.btn_action').click()

    //info alamat
    cy.get('[data-test="firstName"]').type("Mahfud")
    cy.get('[data-test="lastName"]').type('Amin')
    cy.get('[data-test="postalCode"]').type("123456")

    //Cancel order or re-chek product
    cy.get('.cart_cancel_link').click()

    //Checkout Proses
    cy.get('.btn_action').click()

     //Submit User's Address
    cy.get('[data-test="firstName"]').type("Mahfud")
    cy.get('[data-test="lastName"]').type('Amin')
    cy.get('[data-test="postalCode"]').type("123456")

    //Cancle  order
    cy.get('.btn_primary').click()
    cy.get('.cart_cancel_link').click()

  })
})