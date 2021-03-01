describe("About component", () => {

  beforeEach(() => {
    cy
      .visit("http://localhost:8080")
      .get("footer").get('a[href="/about"').click()
  })

  it("Should show a description of the site when going to About page", () => {
    cy.get("main").get("article").get("h2").contains("🚀 👽 About the Vueniverse 👽 🚀").should("be.visible")
  })

  it("Should contain links to the API used and the inspiration for the site", () => {
    cy
      .get("main")
      .get("article")
      .get("p:last > a:first")
      .should("have.attr", "href", "https://apod.nasa.gov/apod/astropix.html")
      .get("main")
      .get("article")
      .get("p:last > a:last")
      .should("have.attr", "href", "https://api.nasa.gov/index.html")
  })
})