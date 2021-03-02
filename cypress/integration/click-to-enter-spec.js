describe("Click To Enter component", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8080")
  })

  it("Should contain text and an input in the header", () => {
    cy
      .get("header").get("h1").contains("VUENIVERSE").should("be.visible")
      .get("header").get("input").should("be.visible")
      .get("header").get("p").contains("Expand your Vue.").should("be.visible")
  })

  it("Should contain a blast-off link and additional text", () => {
    cy
      .get("main").get("a").eq(2).contains("🚀 🛰 CLICK HERE TO ENTER 🛰 🚀").should("be.visible");
  })

  it("Should contain a footer with component links", () => {
    cy
      .get("footer a").contains("About").should("be.visible");
  })
})