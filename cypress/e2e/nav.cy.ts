describe('navigation', () => {
    beforeEach(() => {
        cy.visit('/')
      });
    it('Should navigate to books page', () => {
        cy.get('a[href*="books"]').click()
        cy.url().should('include', '/books')
    })
    it('should show "Login" button when user is not logged in', () => {
        cy.get('[data-cy=authDropdown-logged-out]').then($element => {
            const isCookieUser = $element.data('cy').includes('logged-in') ? true : false;

            expect(isCookieUser).to.be.false;
            cy.get('[data-cy=authDropdown-logged-out]').within(() => {
                cy.contains('Login').click();
            });
            cy.contains('Login').click()

            cy.url().should('include', '/login')
        });
    });
    // it('Should login and show success message', () => {
    //     cy.visit('/login')
    //     cy.get('input[type="text"]').type('admin@admin.com');
    //     cy.get('input[type="password"]').type('test123');

    //     cy.get('form').within(() => {
    //         cy.contains('Login').click();
    //     });
    //     cy.get('[data-cy=success]').should('be.visible')

    //     cy.get('[data-cy=authDropdown-logged-in]').then($element => {
    //         const isCookieUser = $element.data('cy').includes('logged-in') ? true : false;
    //         expect(isCookieUser).to.be.true;
    //     });
    // })
})