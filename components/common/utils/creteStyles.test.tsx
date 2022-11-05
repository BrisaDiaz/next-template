import createStyles from './createStyles'
import { breakpoints } from './schemas'

test('should generate correct styles when pass a single object', () => {
  const styles = createStyles({
    selector: '.title',
    reactCss: { fontSize: '2rem' },
    breakpoint: 'md'
  }).styles.props.children

  expect(styles).toContain(`@media (min-width: ${breakpoints['md']}px)`)
  expect(styles).toContain(`.title`)
  expect(styles).toContain(`font-size:2rem;`)
})
test('should generate correct styles when pass an array of objects', () => {
  const styles = createStyles([
    {
      selector: '.btn',
      reactCss: { backgroundColor: 'blue' }
    },
    {
      selector: '.btn:hover',
      reactCss: { backgroundColor: 'violet' }
    },
    {
      selector: '.btn',
      reactCss: { fontSize: '1.5rem' },
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
    reactCss: { fontSize: '1.25rem' },
    breakpoint: 500
  }).styles.props.children

  expect(styles).toContain(`@media (min-width: 500px)`)
  expect(styles).toContain(`.title`)
  expect(styles).toContain(`font-size:1.25rem;`)
})
