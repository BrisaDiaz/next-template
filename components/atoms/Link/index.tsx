import { forwardRef, Ref, AnchorHTMLAttributes } from 'react'
import { CommonProps, combineCustomStyles } from '@common/utils'
import Text, { TextProps, ExtraProps as TextExtraProps } from '../Text'
import { ExternalLinkAlt } from '../SVG'

export interface ExtraProps {
  isExternal?: boolean
  underline?: 'always' | 'hover' | 'none'
}
export type LinkProps = TextProps &
  ExtraProps &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<TextExtraProps, 'as'> &
  CommonProps

function Link(props: LinkProps, ref: Ref<HTMLAnchorElement>) {
  const {
    children,
    isExternal = false,
    cs,
    underline = 'hover',
    ...other
  } = props
  const linkAttributes = isExternal
    ? {
        target: '_blank',
        rel: 'noopener'
      }
    : ''
  return (
    <>
      <Text
        {...linkAttributes}
        {...other}
        ref={ref}
        as="a"
        cs={combineCustomStyles(
          [
            {
              selector: '.text',
              css: {
                textDecorationLine:
                  underline === 'always' ? 'underline' : 'none',
                textUnderlineOffset: '2px'
              }
            },
            {
              selector: '.text:hover',
              css: {
                textDecorationLine: underline !== 'none' ? 'underline' : 'none'
              }
            },
            {
              selector: '.text:focus-visible',
              css: {
                outlineOffset: 'var(--ring-offset-width)',
                outline: '3px solid var(--ring-color)'
              }
            },
            {
              selector: '.text svg',
              css: {
                ml: '0.2rem'
              }
            }
          ],
          cs
        )}
      >
        <>
          {children}
          {isExternal && <ExternalLinkAlt data-testid="external-link-icon" />}
        </>
      </Text>
    </>
  )
}
export default forwardRef(Link)
