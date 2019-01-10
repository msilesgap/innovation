describe('My First test', function() {
  it('Click an Element', function() {
      cy.visit('http://example.cypress.io')
      cy.contains('type').click()

      cy.url()
        .should('include', '/commands/actions')

      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
  })
})
