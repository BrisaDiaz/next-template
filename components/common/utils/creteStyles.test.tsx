import { createStyles } from './createStyles'
import { breakpoints } from './schemas'

test('should generate correct styles when pass a single object', () => {
  const styles = createStyles({
    selector: '.title',
    css: { fontSize: '2rem' },
    breakpoint: 'md'
  }).styles.props.children

  expect(styles).toContain(`@media (min-width: ${breakpoints['md']}px)`)
  expect(styles).toContain(`.title`)
  expect(styles).toContain(`font-size:2rem;`)
})
test('should generate correct styles when pass custom props names', () => {
  const styles = createStyles({
    selector: '.title',
    css: { px: '2rem', bgColor: 'blue' }
  }).styles.props.children

  expect(styles).toContain(`.title`)
  expect(styles).toContain(`padding-inline-start:2rem;`)
  expect(styles).toContain(`padding-inline-end:2rem;`)
  expect(styles).toContain(`background-color:blue;`)
})
test('should generate correct styles when pass an array of objects', () => {
  const styles = createStyles([
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
  ]).styles.props.children
  expect(styles).toContain(`.btn:hover`)
  expect(styles).toContain(`.btn`)
  expect(styles).toContain(`@media (min-width: ${breakpoints['md']}px)`)
  expect(styles).toContain(`font-size:1.5rem;`)
  expect(styles).toContain(`background-color:blue;`)
  expect(styles).toContain(`background-color:violet;`)
})
test('should generate correct styles when pass a custom breakpoint', () => {
  const styles = createStyles({
    selector: '.title',
    css: { fontSize: '1.25rem' },
    breakpoint: 500
  }).styles.props.children

  expect(styles).toContain(`@media (min-width: 500px)`)
  expect(styles).toContain(`.title`)
  expect(styles).toContain(`font-size:1.25rem;`)
})
