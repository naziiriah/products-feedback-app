describe("it renders a homepage", () => {
    it("renders correctly", () => {
        cy.visit("/")
        cy.get(".header").should("exist")
    })
    it("allows the sort function to be used", () => {
        cy.visit("/")
    })
})