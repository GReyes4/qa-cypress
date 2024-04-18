/*function generarCorreoAleatorio() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let correo = 'usuario' // Parte fija del correo electrónico
  
    // Agregar caracteres aleatorios al correo electrónico
    for (let i = 0; i < 5; i++) {
      correo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
  
    // Agregar el dominio de correo electrónico
    correo += '@example.com';
  
    return correo;
  }*/

const correo = "conchita@pandulce.com";
const password = "123456"

describe('Probar página de compras', () => {
    beforeEach(() => {
      cy.visit('http://www.automationpractice.pl/index.php')
    })
  
    it('Revisar categoría', () => {
        cy.get('.sf-menu > :nth-child(3) > a').click()
        cy.get('.ajax_block_product:visible').should('have.length.gte', 1)
    })

    it('Revisar stock de producto', () => {
        cy.get('.sf-menu > :nth-child(3) > a').click()
        cy.get('.ajax_block_product:visible').should('have.length.gte', 1)
        cy.get('.lnk_view > span').click()
        cy.get('#availability_value').should('be.visible')
    })

    it('Cambiar talla y checar stock', () => {
        cy.get('.sf-menu > :nth-child(3) > a').click()
        cy.get('.ajax_block_product:visible').should('have.length.gte', 1)
        cy.get('.lnk_view > span').click()
        cy.get('#group_1').select('L')
        cy.get('#availability_value').should('have.text', 'In stock')
    })

    it('Login', () => {
        cy.get('.login').click()
        cy.get('#email').type(correo)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin > span').click()
        cy.get('.sf-menu > :nth-child(3) > a').click()
        cy.get('.lnk_view > span').click()
        cy.get('#group_1').select('L')
        cy.get('.exclusive > span').click()
        cy.get('.layer_cart_product > h2').should('be.visible')
        cy.get('.button-medium > span').click()
        cy.get('.cart_navigation > .button > span').click()
    })
  })