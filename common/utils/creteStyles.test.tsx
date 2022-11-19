import { createStyle } from './createStyles'
import { breakpoints } from './themeSchemas'
const className = 'jadlkadgj'
test('should generate correct styles when pass a single object', () => {
  const styles = createStyle(
    {
      selector: '.title',
      css: { fontSize: '2rem' },
      breakpoint: 'md'
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
        css: { fontSize: '1.5rem' },
        breakpoint: 'md'
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
      css: { fontSize: '1.25rem' },
      breakpoint: 500
    },
    className
  ).styles

  expect(styles).toContain(`@media (min-width: 500px)`)
  expect(styles).toContain(`.title`)
  expect(styles).toContain(`font-size:1.25rem;`)
})
