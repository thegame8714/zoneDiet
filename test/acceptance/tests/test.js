module.exports = {
  "Test of a test": browser => {
    browser
      .url("http://localhost:4000")
      .expect.element("div#root")
      .text.to.contain("Hello World")

    browser.end()
  }
}
