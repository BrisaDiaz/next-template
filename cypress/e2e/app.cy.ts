describe('Theme', () => {
  it('should toggle dark mode', () => {
    // Start from the index page

    const startTheme = 'dark'

    cy.visit('/', {
      onBeforeLoad(win) {
        localStorage.setItem('theme', startTheme)
        cy.stub(win, 'matchMedia')
          .withArgs(`(prefers-color-scheme: ${startTheme})`)
          .returns({
            matches: true
          })
      }
    })

    const toChangeTheme1 = startTheme === 'dark' ? 'light' : 'dark'

    cy.get('[data-testid="theme switch"]')
      .as('themeSwitch')
      .invoke('attr', 'aria-label')
      .should('contain', `switch to ${toChangeTheme1} mode`)

    const toChangeTheme2 = startTheme

    cy.get('@themeSwitch').click()

    // set the theme mode to component
    cy.get('[data-testid="theme switch"]')
      .as('themeSwitch')
      .invoke('attr', 'data-theme')
      .should('contain', toChangeTheme1)

    cy.get('@themeSwitch')
      .invoke('attr', 'aria-label')
      .should('contain', `switch to ${toChangeTheme2} mode`)
  })
})
