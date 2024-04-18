describe('Probar la funcionalidad de la página greencart', () => {

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      })

      it('probar que al escribir ca se muestran 4 elementos', () => {
        cy.get('.search-keyword').type('ca')
        cy.wait(1000)
        // Está tmb funciona pero no es la manera limpia
        //cy.get('.products').find('.product-image').should('have.length', 4)
        cy.get('.product:visible').should('have.length', 4)
        cy.get(':nth-child(2) > .product-action > button').click()
        cy.get('.cart-icon > img').click()
        cy.get('.cart-preview > [style="position: relative; overflow: hidden; width: 360px; height: 320px;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -15px; margin-bottom: -15px;"] > .cart-items > .cart-item').should('have.length', 1)
      })

      it('comprar 4 papas y hacer checkout', () => {
        cy.get('.search-keyword').type('pot')
        cy.wait(100)
        cy.get('.product-action > button').click()
        cy.get('.product-action > button').click()
        cy.get('.product-action > button').click()
        cy.get('.product-action > button').click()
        cy.get('.cart-icon > img').click()
        cy.get('.cart-preview > .action-block > button').click()
        cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click()
        cy.get('select').select('Mexico')
        cy.get('.chkAgree').click()
        cy.get('button').click()
      })
    

})