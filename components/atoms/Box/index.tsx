import React, { forwardRef, Ref } from 'react'
import CSS from 'csstype'
import clsx from 'clsx'
import {
  HTMLTag,
  CommonProps,
  Space,
  theme,
  useCustomStyles
} from '@common/utils'

type Display = 'grid' | 'flex' | 'grid-item' | 'block'

export interface FlexBoxProps {
  gap?: Space
  flexDirection?: CSS.Property.FlexDirection
  wrap?: CSS.Property.FlexWrap
  basis?: CSS.Property.FlexBasis
  shrink?: CSS.Property.FlexShrink
  grow?: CSS.Property.FlexGrow
}
export interface GridBoxProps {
  gap?: Space
  rowGap?: Space
  gridGap?: Space
  columnGap?: Space
  gridColumnGap?: Space
  gridRowGap?: Space
  templateColumns?: CSS.Property.GridTemplateColumns
  templateRows?: CSS.Property.GridTemplateRows
  templateAreas?: CSS.Property.GridTemplateAreas
  autoColumns?: CSS.Property.GridAutoColumns
  autoRows?: CSS.Property.GridAutoRows
  column?: CSS.Property.GridColumn
}
export interface GridItemBoxProps {
  row?: CSS.Property.GridRow
  area?: CSS.Property.GridArea
  columnStart?: CSS.Property.GridColumnStart
  columnEnd?: CSS.Property.GridColumnEnd
  rowStart?: CSS.Property.GridColumnStart
  rowEnd?: CSS.Property.GridColumnEnd
}
export interface GenericBoxProps {
  as?: HTMLTag
  children?: React.ReactNode
  alignItems?: CSS.Property.AlignItems
  alignSelf?: CSS.Property.AlignSelf
  alignContent?: CSS.Property.AlignContent
  justifyItems?: CSS.Property.JustifyItems
  justifyContent?: CSS.Property.JustifyContent
  justifySelf?: CSS.Property.JustifySelf
}
export type ExtraProps = FlexProps &
  GridProps &
  GridItemBoxProps & {
    display?: Display
  }

export type BaseProps = CommonProps &
  React.HTMLAttributes<any> &
  GenericBoxProps

export type BoxProps = BaseProps & ExtraProps

function BoxComponent(
  {
    as = 'div',
    display = 'block',
    flexDirection,
    alignItems,
    alignSelf,
    alignContent,
    justifyItems,
    justifyContent,
    justifySelf,
    basis,
    shrink,
    wrap,
    grow,
    children,
    autoColumns,
    autoRows,
    templateColumns,
    templateAreas,
    columnStart,
    columnEnd,
    rowStart,
    rowEnd,
    gap,
    rowGap,
    gridGap,
    columnGap,
    gridColumnGap,
    gridRowGap,
    templateRows,
    column,
    row,
    area,
    cs,
    className,
    themeMode,
    ...other
  }: BoxProps,
  ref?: Ref<any>
) {
  const extraStyles = useCustomStyles(cs)
  const props = {
    className: clsx(
      extraStyles.className,
      'root',
      'box',
      display,
      'box-align',
      'box-spaces',
      {
        [`${className}`]: className
      }
    ),
    ref,
    'data-theme': themeMode,
    ...other
  }

  return (
    <>
      {as === 'div' && <div {...props}>{children}</div>}
      {as === 'article' && <article {...props}>{children}</article>}
      {as === 'section' && <section {...props}>{children}</section>}
      {as === 'main' && <main {...props}>{children}</main>}
      {as === 'header' && <header {...props}>{children}</header>}
      {as === 'footer' && <footer {...props}>{children}</footer>}
      {as === 'nav' && <nav {...props}>{children}</nav>}
      {as === 'aside' && <aside {...props}>{children}</aside>}
      {as === 'ul' && <ul {...props}>{children}</ul>}
      {as === 'ol' && <ol {...props}>{children}</ol>}
      {as === 'address' && <address {...props}>{children}</address>}
      {as === 'figcaption' && <figcaption {...props}>{children}</figcaption>}
      {as === 'blockquote' && <blockquote {...props}>{children}</blockquote>}
      {as === 'form' && <form {...props}>{children}</form>}
      {as === 'table' && <table {...props}>{children}</table>}
      {as === 'tfoot' && <tfoot {...props}>{children}</tfoot>}
      {as === 'dt' && <dt {...props}>{children}</dt>}
      {as === 'dd' && <dd {...props}>{children}</dd>}
      {as === 'a' && <a {...props}>{children}</a>}
      {as === 'abbr' && <abbr {...props}>{children}</abbr>}
      {as === 'b' && <b {...props}>{children}</b>}
      {as === 'bdi' && <bdi {...props}>{children}</bdi>}
      {as === 'bdo' && <bdo {...props}>{children}</bdo>}
      {as === 'big' && <big {...props}>{children}</big>}
      {as === 'li' && <li {...props}>{children}</li>}
      {as === 'figure' && <figure {...props}>{children}</figure>}
      {as === 'dl' && <dl {...props}>{children}</dl>}
      {as === 'pre' && <pre {...props}>{children}</pre>}
      {as === 'body' && <body {...props}>{children}</body>}
      {as === 'button' && <button {...props}>{children}</button>}
      {as === 'canvas' && <canvas {...props}>{children}</canvas>}
      {as === 'caption' && <caption {...props}>{children}</caption>}
      {as === 'cite' && <cite {...props}>{children}</cite>}
      {as === 'code' && <code {...props}>{children}</code>}
      {as === 'colgroup' && <colgroup {...props}>{children}</colgroup>}
      {as === 'data' && <data {...props}>{children}</data>}
      {as === 'datalist' && <datalist {...props}>{children}</datalist>}
      {as === 'del' && <del {...props}>{children}</del>}
      {as === 'details' && <details {...props}>{children}</details>}
      {as === 'dfn' && <dfn {...props}>{children}</dfn>}
      {as === 'em' && <em {...props}>{children}</em>}
      {as === 'fieldset' && <fieldset {...props}>{children}</fieldset>}
      {as === 'h1' && <h1 {...props}>{children}</h1>}
      {as === 'h2' && <h2 {...props}>{children}</h2>}
      {as === 'h3' && <h3 {...props}>{children}</h3>}
      {as === 'h4' && <h4 {...props}>{children}</h4>}
      {as === 'h5' && <h5 {...props}>{children}</h5>}
      {as === 'h6' && <h6 {...props}>{children}</h6>}
      {as === 'head' && <head {...props}>{children}</head>}
      {as === 'hgroup' && <hgroup {...props}>{children}</hgroup>}
      {as === 'i' && <i {...props}>{children}</i>}
      {as === 'ins' && <ins {...props}>{children}</ins>}
      {as === 'kbd' && <kbd {...props}>{children}</kbd>}
      {as === 'th' && <th {...props}>{children}</th>}
      {as === 'thead' && <thead {...props}>{children}</thead>}
      {as === 'time' && <time {...props}>{children}</time>}
      {as === 'title' && <title {...props}>{children}</title>}
      {as === 'tr' && <tr {...props}>{children}</tr>}
      {as === 'u' && <u {...props}>{children}</u>}
      {as === 'var' && <var {...props}>{children}</var>}
      {as === 'strong' && <strong {...props}>{children}</strong>}
      {as === 'style' && <style {...props}>{children}</style>}
      {as === 'sub' && <sub {...props}>{children}</sub>}
      {as === 'summary' && <summary {...props}>{children}</summary>}
      {as === 'sup' && <sup {...props}>{children}</sup>}
      {as === 'tbody' && <tbody {...props}>{children}</tbody>}
      {as === 'td' && <td {...props}>{children}</td>}
      {as === 'template' && <template {...props}>{children}</template>}
      {as === 'textarea' && <textarea {...props}>{children}</textarea>}
      {as === 'option' && <option {...props}>{children}</option>}
      {as === 'output' && <output {...props}>{children}</output>}
      {as === 'p' && <p {...props}>{children}</p>}
      {as === 'progress' && <progress {...props}>{children}</progress>}
      {as === 'q' && <q {...props}>{children}</q>}
      {as === 'rp' && <rp {...props}>{children}</rp>}
      {as === 'rt' && <rt {...props}>{children}</rt>}
      {as === 'ruby' && <ruby {...props}>{children}</ruby>}
      {as === 's' && <s {...props}>{children}</s>}
      {as === 'samp' && <samp {...props}>{children}</samp>}
      {as === 'script' && <script {...props}>{children}</script>}
      {as === 'select' && <select {...props}>{children}</select>}
      {as === 'small' && <small {...props}>{children}</small>}
      {as === 'span' && <span {...props}>{children}</span>}
      {as === 'keygen' && <keygen {...props}>{children}</keygen>}
      {as === 'label' && <label {...props}>{children}</label>}
      {as === 'legend' && <legend {...props}>{children}</legend>}
      {as === 'map' && <map {...props}>{children}</map>}
      {as === 'mark' && <mark {...props}>{children}</mark>}
      {as === 'menu' && <menu {...props}>{children}</menu>}
      {as === 'menuitem' && <menuitem {...props}>{children}</menuitem>}
      {as === 'meter' && <meter {...props}>{children}</meter>}
      {as === 'noscript' && <noscript {...props}>{children}</noscript>}
      {as === 'object' && <object {...props}>{children}</object>}
      {as === 'optgroup' && <optgroup {...props}>{children}</optgroup>}
      {as === ('area' as HTMLTag) && <area {...props} />}
      {as === ('base' as HTMLTag) && <base {...props} />}
      {as === ('br' as HTMLTag) && <br {...props} />}
      {as === ('col' as HTMLTag) && <col {...props} />}
      {as === ('embed' as HTMLTag) && <embed {...props} />}
      {as === ('hr' as HTMLTag) && <hr {...props} />}
      {as === ('input' as HTMLTag) && <input {...props} />}
      {as === ('link' as HTMLTag) && <link {...props} />}
      {as === ('meta' as HTMLTag) && <meta {...props} />}
      {as === ('param' as HTMLTag) && <param {...props} />}
      {as === ('source' as HTMLTag) && <source {...props} />}
      {as === ('track' as HTMLTag) && <track {...props} />}
      {as === ('wbr' as HTMLTag) && <wbr {...props} />}
      <style jsx>{`
        .box-align {
          ${alignSelf ? `align-self:${alignSelf};` : ''}
          ${alignItems ? `align-items:${alignItems};` : ''}
          ${alignContent ? `align-content:${alignContent};` : ''}
         ${justifyItems ? `justify-items:${justifyItems};` : ''}
         ${justifyContent ? `justify-content:${justifyContent};` : ''}
           ${justifySelf ? `justify-self:${justifySelf};` : ''}
        }
        .box-spaces {
          ${gap ? `gap: ${theme.space[gap as Space]};` : ''}
          ${rowGap ? `row-gap: ${theme.space[rowGap as Space]};` : ''}
                ${columnGap
            ? `column-gap: ${theme.space[columnGap as Space]};`
            : ''}
                   ${gridGap
            ? `grid-gap: ${theme.space[gridGap as Space]};`
            : ''}
                      ${gridColumnGap
            ? `grid-column-gap: var(${theme.space[gridColumnGap as Space]};`
            : ''}
                ${gridRowGap
            ? `gap-row-gap: ${theme.space[gridRowGap as Space]};`
            : ''}
        }
        .grid {
          display: grid;
          ${templateColumns
            ? `grid-template-columns: ${templateColumns}; `
            : ' '}
          ${templateAreas ? ` grid-template-areas: ${templateAreas}; ` : ' '}
            ${templateRows ? ` grid-template-rows: ${templateRows}; ` : ' '}
            ${autoColumns ? ` grid-auto-columns: ${autoColumns}; ` : ' '}
            ${autoRows ? ` grid-auto-rows: ${autoRows}; ` : ' '}
            ${column ? ` grid-column: ${column}; ` : ' '}
            ${row ? ` grid-row: ${row}; ` : ' '};
        }
        .grid-item {
          ${area ? `  grid-area: ${area}; ` : ' '}
          ${columnStart ? ` grid-column-start: ${columnStart}; ` : ' '}
          ${columnEnd ? ` grid-column-end: ${columnEnd}; ` : ' '}
          ${rowStart ? ` grid-row-start: ${rowStart}; ` : ' '}
          ${rowEnd ? ` grid-row-end: ${rowEnd}; ` : ' '}
        }

        .flex {
          display: flex;
          ${flexDirection ? `flex-direction: ${flexDirection}; ` : ' '}
          ${basis ? ` flex-basis: ${basis}; ` : ' '}
          ${shrink ? ` flex-shrink: ${shrink}; ` : ' '}
          ${grow ? ` flex-grow: ${grow}; ` : ' '}
          ${wrap ? ` flex-wrap: ${wrap}; ` : ' '}
        }
        ${extraStyles.styles}
      `}</style>
    </>
  )
}
const Box = forwardRef(BoxComponent)
export default Box

export type FlexProps = FlexBoxProps & BaseProps

export function FlexBoxComponent(props: FlexProps, ref?: any) {
  return <Box {...props} display="flex" ref={ref} />
}
export const Flex = forwardRef(FlexBoxComponent)

export type GridProps = GridBoxProps & BaseProps

export function GridComponent(props: FlexBoxProps, ref?: any) {
  return <Box {...props} display="grid" ref={ref} />
}
export const Grid = forwardRef(GridComponent)

export type GridItemProps = GridItemBoxProps & BaseProps

export function GridItemComponent(props: GridItemProps, ref?: any) {
  return <Box {...props} display="grid-item" ref={ref} />
}
export const GridItem = forwardRef(GridItemComponent)

export type BlockProps = BaseProps

export function BlockComponent(props: BlockProps, ref?: any) {
  return <Box {...props} display="block" ref={ref} />
}
export const Block = forwardRef(BlockComponent)
