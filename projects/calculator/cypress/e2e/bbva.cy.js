describe('Suite de pruebas para banco BBVA', () => {
    beforeEach(() => {
      cy.visit('http://zero.webappsecurity.com')
    })
  
    it('Validar pagina de inicio', () => {
        cy.get('.active > img').should("be.visible")
        cy.get('.active > .custom > h4').contains("Online Banking")
    })

    it('Prueba de transferencia de fondos', () => {
        cy.get('#signin_button').click()
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('#user_remember_me').click()
        //cy.get('.btn').click()
        //cy.wait(1000)
        cy.visit('http://zero.webappsecurity.com/index.html')  
    })

    it('Validar pagina de inicio', () => {
        cy.get('#feedback > div > strong').click()
        cy.get('#name').type('Username')
        cy.get('#email').type('name@gmail.com')
        cy.get('#subject').type('asunto')
        cy.get('#comment').type('comentariooooos')
        cy.get('.btn-signin').click()
        cy.get('.page-header').contains('Feedback')
    })
    
  })

