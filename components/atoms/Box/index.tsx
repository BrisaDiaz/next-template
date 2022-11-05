import React from 'react'
import CSS from 'csstype'
import clsx from 'clsx'
import {
  HTMLTag,
  CommonProps,
  defaultExtraStyles,
  Space
} from '../../common/utils'
type Display = 'grid' | 'flex' | 'grid-item' | 'block'

//  .gap-${space} {
//       gap: var(${spaceSchema[space as Space]});
//       }
//       .row-gap-${space} {
//       row-gap: var(${spaceSchema[space as Space]});
//       }
//       .col-gap-${space} {
//       column-gap: var(${spaceSchema[space as Space]});
//       }
//       .grid-gap-${space} {
//       grid-gap: var(${spaceSchema[space as Space]});
//       }
//       .grid-row-gap-${space} {
//       grid-row-gap: var(${spaceSchema[space as Space]});
//       }
//        .grid-col-gap-${space} {
//       grid-column-gap: var(${spaceSchema[space as Space]});
//       }
export type ExtraProps = {
  as?: HTMLTag
  display?: Display
  gap?: Space
  rowGap?: Space
  gridGap?: Space
  columnGap?: Space
  gridColumnGap?: Space
  gridRowGap?: Space
  templateColumns?: CSS.Property.GridTemplateColumns
  templateRows?: CSS.Property.GridTemplateRows
  templateAreas?: CSS.Property.GridTemplateAreas
  basis?: CSS.Property.FlexBasis
  shrink?: CSS.Property.FlexShrink
  grow?: CSS.Property.FlexGrow
  autoColumns?: CSS.Property.GridAutoColumns
  autoRows?: CSS.Property.GridAutoRows
  column?: CSS.Property.GridColumn
  row?: CSS.Property.GridRow
  area?: CSS.Property.GridArea
  columnStart?: CSS.Property.GridColumnStart
  columnEnd?: CSS.Property.GridColumnEnd
  rowStart?: CSS.Property.GridColumnStart
  rowEnd?: CSS.Property.GridColumnEnd
}

export type BoxProps = CommonProps & ExtraProps & any

function Box({
  as = 'div',
  display = 'block',
  extraStyles = defaultExtraStyles,
  basis,
  shrink,
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
  className,
  ...other
}: BoxProps) {
  const props = {
    className: clsx(
      display,
      'box',
      { [`gap-${gap}`]: gap },
      { [`row-gap-${rowGap}`]: rowGap },
      { [`col-gap-${columnGap}`]: columnGap },
      { [`grid-gap-${gridGap}`]: gridGap },
      { [`grid-col-gap-${gridColumnGap}`]: gridColumnGap },
      { [`grid-row-gap-${gridRowGap}`]: gridRowGap },
      extraStyles.className,
      {
        [`${className}`]: className
      }
    ),
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
      {as === 'li' && <li {...props}>{children}</li>}
      {as === 'address' && <address {...props}>{children}</address>}
      {as === 'figure' && <figure {...props}>{children}</figure>}
      {as === 'figcaption' && <figcaption {...props}>{children}</figcaption>}
      {as === 'blockquote' && <blockquote {...props}>{children}</blockquote>}
      {as === 'form' && <form {...props}>{children}</form>}
      {as === 'table' && <table {...props}>{children}</table>}
      {as === 'tfoot' && <tfoot {...props}>{children}</tfoot>}
      {as === 'dt' && <dt {...props}>{children}</dt>}
      {as === 'dd' && <dd {...props}>{children}</dd>}
      {as === 'dl' && <dl {...props}>{children}</dl>}
      {as === 'pre' && <pre {...props}>{children}</pre>}
      {as === 'a' && <a {...props}>{children}</a>}
      {as === 'abbr' && <abbr {...props}>{children}</abbr>}
      {as === 'b' && <b {...props}>{children}</b>}
      {as === 'bdi' && <bdi {...props}>{children}</bdi>}
      {as === 'bdo' && <bdo {...props}>{children}</bdo>}
      {as === 'big' && <big {...props}>{children}</big>}
      {as === 'li' && <li {...props}>{children}</li>}
      {as === 'address' && <address {...props}>{children}</address>}
      {as === 'figure' && <figure {...props}>{children}</figure>}
      {as === 'figcaption' && <figcaption {...props}>{children}</figcaption>}
      {as === 'blockquote' && <blockquote {...props}>{children}</blockquote>}
      {as === 'form' && <form {...props}>{children}</form>}
      {as === 'tfoot' && <tfoot {...props}>{children}</tfoot>}
      {as === 'dt' && <dt {...props}>{children}</dt>}
      {as === 'dd' && <dd {...props}>{children}</dd>}
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
      {as === 'link' && <link {...props}>{children}</link>}
      {as === 'map' && <map {...props}>{children}</map>}
      {as === 'mark' && <mark {...props}>{children}</mark>}
      {as === 'menu' && <menu {...props}>{children}</menu>}
      {as === 'menuitem' && <menuitem {...props}>{children}</menuitem>}
      {as === 'meter' && <meter {...props}>{children}</meter>}
      {as === 'noscript' && <noscript {...props}>{children}</noscript>}
      {as === 'object' && <object {...props}>{children}</object>}
      {as === 'optgroup' && <optgroup {...props}>{children}</optgroup>}

      {as === 'area' && <area {...props}>{children}</area>}
      {as === 'base' && <base {...props}>{children}</base>}
      {as === 'br' && <br {...props}>{children}</br>}
      {as === 'col' && <col {...props}>{children}</col>}
      {as === 'embed' && <embed {...props}>{children}</embed>}
      {as === 'hr' && <hr {...props}>{children}</hr>}

      {as === 'input' && <input {...props}>{children}</input>}
      {as === 'link' && <link {...props}>{children}</link>}
      {as === 'meta' && <meta {...props}>{children}</meta>}
      {as === 'param' && <param {...props}>{children}</param>}
      {as === 'source' && <source {...props}>{children}</source>}
      {as === 'track' && <track {...props}>{children}</track>}
      {as === 'wbr' && <wbr {...props}>{children}</wbr>}

      {extraStyles.styles}
      <style jsx>{`
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
          ${templateColumns
            ? ` grid-template-columns: ${templateColumns}; `
            : ' '}
          ${basis ? ` flex-basis: ${basis}; ` : ' '}
          ${shrink ? ` flex-shrink: ${shrink}; ` : ' '}
          ${grow ? ` flex-grow: ${grow}; ` : ' '}
        }
      `}</style>
    </>
  )
}
export default Box
