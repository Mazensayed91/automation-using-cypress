describe('Locating elements', () => {
    it("Verify locators type", () => {
        cy.visit("https://demo.nopcommerce.com/");

        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch");

        cy.get("#small-search-box-form > .button-1").click();

        cy.get(".product-box-add-to-cart-button").click();

        cy.get("#product_enteredQuantity_4").clear().type("2");

        cy.get("#add-to-cart-button-4").click();

        cy.wait(5000); // to give it a chance to add to cart

        cy.get(".cart-label").click();

        cy.wait(3000); // to give it a chance reload the cart

        cy.get(".product-unit-price").contains("$1,800.00");

    })
})