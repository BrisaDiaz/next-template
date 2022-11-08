import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import Box from '.'
const elementsTags = [
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'i',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',

  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'template',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'wbr'
]
const selfClosingTags = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
]
elementsTags.forEach((element) => {
  test(`display ${element} pass as prop "as" and children components`, () => {
    if (selfClosingTags.includes(element) || element === 'menuitem') {
      render(<Box as={element} data-testid={element} />)
    } else {
      render(
        <Box as={element} data-testid={element}>
          <p>Hello</p>
        </Box>
      )
    }

    const Element = screen.getByTestId(element)
    expect(Element.tagName.toLowerCase()).toBe(element)

    if (![...selfClosingTags, 'menuitem', 'noscript'].includes(element)) {
      expect(Element?.hasChildNodes()).toBeTruthy()
    }
  })
})
