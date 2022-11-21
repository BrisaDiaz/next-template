import { createStyle, combineCustomStyles } from './createStyles'
import { theme, CustomStyle } from '@common/utils'
import { breakpoints } from './themeSchemas'
const className = 'jadlkadgj'
test('should generate correct styles when pass a single object', () => {
  const styles = createStyle(
    {
      selector: '.title',
      css: { fontSize: { md: '2rem' } }
    },
    className
  ).styles

  expect(styles).toContain(`@media (min-width: ${breakpoints['md']}px)`)
  expect(styles).toContain(`.title`)
  expect(styles).toContain(`font-size:2rem;`)
})
test('should generate correct styles when pass custom props names', () => {
  const styles = createStyle(
    {
      selector: '.title',
      css: { px: '2rem', bgColor: 'blue' }
    },
    className
  ).styles

  expect(styles).toContain(`.title`)
  expect(styles).toContain(`padding-inline-start:2rem;`)
  expect(styles).toContain(`padding-inline-end:2rem;`)
  expect(styles).toContain(`background-color:blue;`)
})
test('should generate correct styles when pass an array of objects', () => {
  const styles = createStyle(
    [
      {
        selector: '.btn',
        css: { backgroundColor: 'blue' }
      },
      {
        selector: '.btn:hover',
        css: { backgroundColor: 'violet' }
      },
      {
        selector: '.btn',
        css: { fontSize: { xs: '1rem', md: '1.5rem' } }
      }
    ],
    className
  ).styles
  expect(styles).toContain(`.btn:hover`)
  expect(styles).toContain(`.btn`)
  expect(styles).toContain(`@media (min-width: ${breakpoints['md']}px)`)
  expect(styles).toContain(`font-size:1.5rem;`)
  expect(styles).toContain(`background-color:blue;`)
  expect(styles).toContain(`background-color:violet;`)
})
test('should generate correct styles when pass a custom breakpoint', () => {
  const styles = createStyle(
    {
      selector: '.title',
      css: { fontSize: { 500: '1.25rem' } }
    },
    className
  ).styles

  expect(styles).toContain(`@media (min-width: 500px)`)
  expect(styles).toContain(`.title`)
  expect(styles).toContain(`font-size:1.25rem;`)
})
test(' combineCustomStyles() combines props in a single object when selector is found repeated', () => {
  const oldStyles = {
    selector: '.box',
    css: {
      mt: theme.space['4'],
      maxW: theme.size['container-md'],
      w: theme.size.full,
      minH: theme.size['72'],
      fontWeight: theme.fontWeight.bold,
      bgColor: theme.paletteColor['red-300'],
      pl: { sm: '45px', 545: '15px' }
    }
  }
  const newStyles = [
    {
      selector: '.box',
      css: {
        pl: theme.space['2'],
        bgColor: theme.paletteColor['pink-300']
      }
    },
    {
      selector: '.box:hover',
      css: {
        bgColor: theme.paletteColor['green-300']
      }
    }
  ]
  const expectCombined = {
    selector: '.box',
    css: {
      bgColor: 'var(--colors-pink-300)',
      fontWeight: 'var(--fontWeights-bold)',
      maxW: 'var(--sizes-container-md)',
      minH: 'var(--sizes-72)',
      mt: 'var(--space-4)',
      pl: 'var(--space-2)',
      w: 'var(--sizes-full)'
    }
  }
  const result = combineCustomStyles(oldStyles, newStyles) as CustomStyle[]
  expect(result).toHaveLength(2)
  expect(result[0]).toEqual(expectCombined)
})
