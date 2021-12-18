describe('Alerts', () => {
    it("Deal wth alert", () => {
        cy.visit("https://mail.rediff.com/cgi-bin/login.cgi");
        cy.get("input[type=submit]").click();


        cy.on('window:alert', (str) => {
        expect(str).to.equal('Please enter a vaild user name')
    })
})})
