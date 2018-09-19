describe('test', () => {
  it('should load the browser', browser => {
    browser
      .url('http://localhost:4000')
      .expect.element('div#root')
      .text.to.contain('Hello World')
  })
})
