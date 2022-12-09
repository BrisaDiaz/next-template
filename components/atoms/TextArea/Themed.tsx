import { forwardRef, Ref } from 'react'
import { useTheme } from '@common/providers/ThemeProvider'
import TextArea, { TextAreaProps } from '.'

function ThemedTextArea(props: TextAreaProps, ref?: Ref<HTMLTextAreaElement>) {
  const { mode } = useTheme()

  return <TextArea themeMode={mode} {...props} ref={ref} />
}
export default forwardRef(ThemedTextArea)
