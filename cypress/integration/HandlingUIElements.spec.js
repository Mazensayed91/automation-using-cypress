describe('UI Elements', () => {
    it("Hobbies check box", () => {
        cy.visit("http://demo.automationtesting.in/Register.html");

        cy.get('#checkbox1').check().should("be.checked").and('have.value', 'Cricket')
        cy.get('#checkbox2').check().should("be.checked").and('have.value', 'Movies')
        cy.get('#checkbox3').check().should("be.checked").and('have.value', 'Hockey')

        cy.get('#checkbox1').uncheck().should("not.be.checked");
        cy.get('#checkbox2').uncheck().should("not.be.checked");
        cy.get('#checkbox3').uncheck().should("not.be.checked");

        cy.get('input[type=checkbox]').check(['Cricket', 'Movies']);

    })
})