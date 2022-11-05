import css from 'styled-jsx/css'
import { ExtraStyles } from './schemas'

export const defaultExtraStyles = css.resolve`` as ExtraStyles

export function combineExtraStyles(extraStyles: ExtraStyles | ExtraStyles[]) {
  if (Array.isArray(extraStyles)) {
    const union = extraStyles.reduce((accumulator: ExtraStyles, current) => {
      accumulator['className'] =
        accumulator['className'] + ` ${current.className}`
      accumulator['styles'] = (
        <>
          {accumulator['styles']}
          {current.styles}
        </>
      )
      return accumulator
    })
    return union
  }
  return extraStyles
}
