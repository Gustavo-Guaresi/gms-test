/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `gustavo${Date.now()}@teste.com`
    cy.preencherCadastro('Gustavo', 'Teste', email, '123321', 'Teste@123')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
  
  it.only('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Gustavo20', 'Teste', 'gustavo@teste.com', '123321', 'Teste@123')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
  })
})