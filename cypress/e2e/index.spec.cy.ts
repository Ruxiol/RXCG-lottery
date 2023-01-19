describe('conmplete e to e test', () => {
  it('e to e test', () => {
    cy.visit('/')

    cy.contains('Login with Metamask').click()
    cy.contains('Loading the RXCG Crypto Lottery...')

    cy.contains('Buy 1 ticket for 1 RXCG', { timeout: 20000 }).click()
    cy.contains('Buying your RXCG tickets...')

  })
})
