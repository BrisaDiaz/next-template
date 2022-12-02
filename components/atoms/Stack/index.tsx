import { forwardRef, ReactNode, Children } from 'react'
import { Flex, FlexProps } from '../Box'
import { theme, combineCustomStyles, Space } from '@common/utils'

export type Orientation = 'horizontal' | 'vertical'

export type StackProps = Omit<FlexProps, 'flexDirection'> & {
  divider?: string | ReactNode
  orientation?: Orientation
  spacing?: Space
}
export const defaultValues = {
  spacing: 'none' as Space,
  orientation: 'vertical'
}
function Stack(props: StackProps, ref?: any) {
  const {
    children,
    divider,
    spacing = defaultValues.spacing,
    orientation = defaultValues.orientation,
    cs,
    ...other
  } = props
  const isLastChild = (index: number) => arrayChildren.length - 1 === index
  const isHTZL = orientation === 'horizontal'
  const isVERT = orientation === 'vertical'
  const arrayChildren = Children.toArray(children)
  return (
    <Flex
      {...other}
      ref={ref}
      cs={combineCustomStyles(
        [
          {
            css: {
              w: 'inherit',
              h: 'inherit'
            }
          },
          {
            selector: ' .spacing',
            css: {
              py: isVERT ? theme.space[spacing] : 0,
              px: isHTZL ? theme.space[spacing] : 0,
              w: '100%'
            }
          }
        ],
        cs
      )}
      flexDirection={isHTZL ? 'row' : 'column'}
    >
      {Children.map(arrayChildren, (child, index) => (
        <>
          {child}

          {spacing && !isLastChild(index) && (
            <span className="spacing" data-testid="spacing-wrapper">
              {divider}
            </span>
          )}

          {!isLastChild(index) && !spacing && divider}
        </>
      ))}
    </Flex>
  )
}
export default forwardRef(Stack)
