/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://localhost:8080/')
    cy.get('#signup-firstname').type('Gustavo')
    cy.get('#signup-lastname').type('Guaresi')
    cy.get('#signup-email').type('Gustavo@teste.com')
    cy.get('#signup-phone').type('1234')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})