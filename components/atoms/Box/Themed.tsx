import { forwardRef, Ref } from 'react'
import { useTheme } from '@common/providers/ThemeProvider'
import Box, {
  BoxProps,
  Flex as FlexComponent,
  FlexProps,
  Grid as GridComponent,
  GridProps,
  GridItem as GridItemComponent,
  GridItemProps,
  Block as BlockComponent,
  BlockProps
} from './index'

function ThemedBox(props: BoxProps, ref?: Ref<any>) {
  const { mode } = useTheme()

  return <Box themeMode={mode} {...props} ref={ref} />
}
export default forwardRef(ThemedBox)

function ThemedFlex(props: FlexProps, ref?: Ref<any>) {
  const { mode } = useTheme()

  return <FlexComponent themeMode={mode} {...props} ref={ref} />
}
export const Flex = forwardRef(ThemedFlex)

function ThemedGrid(props: GridProps, ref?: Ref<any>) {
  const { mode } = useTheme()
  return <GridComponent themeMode={mode} {...props} ref={ref} />
}
export const Grid = forwardRef(ThemedGrid)

function ThemedGridItem(props: GridItemProps, ref?: Ref<any>) {
  const { mode } = useTheme()
  return <GridItemComponent themeMode={mode} {...props} ref={ref} />
}
export const GridItem = forwardRef(ThemedGridItem)

function ThemedBlock(props: BlockProps, ref?: Ref<any>) {
  const { mode } = useTheme()
  return <BlockComponent themeMode={mode} {...props} ref={ref} />
}
export const Block = forwardRef(ThemedBlock)
