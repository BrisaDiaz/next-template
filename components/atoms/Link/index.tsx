import { forwardRef, Ref, AnchorHTMLAttributes } from 'react'
import { CommonProps, combineCustomStyles } from '@common/utils'
import Text, { TextProps, ExtraProps as TextExtraProps } from '../Text'
import { ExternalLinkAlt } from '../SVG'

export interface ExtraProps {
  isExternal?: boolean
}
export type LinkProps = TextProps &
  ExtraProps &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<TextExtraProps, 'as'> &
  CommonProps

function Link(props: LinkProps, ref: Ref<HTMLAnchorElement>) {
  const { children, isExternal = false, cs, ...other } = props
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
              selector: '.text:hover',
              css: {
                textDecorationLine: 'underline',
                textUnderlineOffset: '2px'
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
