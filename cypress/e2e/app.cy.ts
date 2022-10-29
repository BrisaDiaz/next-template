describe('Theme', () => {
  it('should toggle dark mode', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    const storedTheme = window?.localStorage?.getItem('theme')

    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    const defaultDark =
      storedTheme === 'dark' || (storedTheme === null && prefersDark)

    const currentTheme = defaultDark ? 'dark' : 'light'

    const toChangeTheme1 = currentTheme === 'light' ? 'dark' : 'light'

    cy.get('[data-testid="theme switch"]')
      .as('themeSwitch')
      .invoke('attr', 'aria-label')
      .should('contain', `switch to ${toChangeTheme1} mode`)

    const toChangeTheme2 = toChangeTheme1 === 'light' ? 'dark' : 'light'

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
