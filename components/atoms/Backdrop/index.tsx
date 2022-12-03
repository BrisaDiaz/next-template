import { Flex, FlexProps } from '@components/atoms/Box'
import { forwardRef } from 'react'
import { theme, combineCustomStyles } from '@common/utils'
export type BackdropProps = {
  isOpen?: boolean
} & FlexProps

function Backdrop(props: BackdropProps, ref?: React.Ref<unknown>) {
  const { isOpen, cs, ...other } = props
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      {...other}
      ref={ref}
      aria-hidden="true"
      cs={combineCustomStyles(
        {
          css: {
            visibility: isOpen ? 'visible' : 'hidden',
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: theme.zIndex.banner,
            bgColor: theme.paletteColor['blackAlpha-700']
          }
        },
        cs
      )}
    />
  )
}
export default forwardRef(Backdrop)
