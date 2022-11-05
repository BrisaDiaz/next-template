import {
  borderRadiusSchema,
  borderSchema,
  borderStyleSchema,
  shadowSchema,
  sizeSchema,
  spaceSchema,
  blurSchema,
  opacitySchema,
  rotateSchema,
  fontSizeSchema,
  letterSpacingSchema,
  lineHeightSchema,
  fontWeightSchema,
  alignSchema,
  flexWrapSchema,
  autoFlowSchema,
  textAlignSchema,
  colorSchema,
  displaySchema,
  flexDirectionSchema,
  paletteColorSchema,
  positionSchema,
  scaleSchema,
  zIndexSchema,
  BorderRadius,
  BorderWidth,
  Shadow,
  Size,
  ZIndex,
  Space,
  Blur,
  Opacity,
  Scale,
  FontSize,
  Color,
  Rotate,
  LetterSpacing,
  LineHeight,
  FontWeight
} from './schemas'

function colorPaletteCss() {
  let css = ''
  for (const color of paletteColorSchema) {
    css += `
      .bg-${color} {
      background-color: var(--colors-${color});
      }
      .border-${color} {
      border-color: var(--colors-${color});
      }
      `
  }
  return css
}
function radioCss() {
  let css = ''
  for (const radius in borderRadiusSchema) {
    css += `.radius-${radius}{
      border-radius: var(${borderRadiusSchema[radius as BorderRadius]});
    }`
  }
  return css
}
function borderCss() {
  let css = ''
  for (const border in borderSchema) {
    css += `.border-${border}{
      border: var(${borderSchema[border as BorderWidth]});
    }`
  }
  return css
}
function borderStylesCss() {
  let css = ''
  for (const border in borderStyleSchema) {
    css += `.border-style-${border}{
      border-style: ${borderStyleSchema[border as any]};
    }`
  }
  return css
}
function shadowCss() {
  let css = ''
  for (const shadow in shadowSchema) {
    css += `.shadow-${shadow}{
      box-shadow: var(${shadowSchema[shadow as Shadow]});
    }`
  }
  return css
}
function dimensionsCss() {
  let css = ''
  for (const size in sizeSchema) {
    css += `
      .max-w-${size} {
      max-width:var(${sizeSchema[size as Size]});
      }
      .max-h-${size} {
       max-height: var(${sizeSchema[size as Size]});
      }
      .min-w-${size} {
      min-width:var(${sizeSchema[size as Size]});
      }
      .min-h-${size} {
       min-height: var(${sizeSchema[size as Size]});
      }
      .w-${size} {
       width: var(${sizeSchema[size as Size]});
      }
      .h-${size} {
       height:var(${sizeSchema[size as Size]});
      }
    `
  }
  return css
}

function zindexCss() {
  let css = ''
  for (const zindex in zIndexSchema) {
    css += `
      .zindex-${zindex} {
       z-index: var(${zIndexSchema[zindex as ZIndex]});
      }`
  }
  return css
}
function spacesCss() {
  let css = ''
  for (const space in spaceSchema) {
    css += `
      .m-${space} {
      margin: var(${spaceSchema[space as Space]});
      }
       .mt-${space} {
      margin-top: var(${spaceSchema[space as Space]});
      }
        .mb-${space} {
      margin-bottom: var(${spaceSchema[space as Space]});
      }
      .my-${space} {
      margin-top: var(${spaceSchema[space as Space]});
       margin-bottom: var(${spaceSchema[space as Space]});
      }
       .ml-${space} {
      margin-left: var(${spaceSchema[space as Space]});
      }
      .mr-${space} {
      margin-right: var(${spaceSchema[space as Space]});
      }
      .mx-${space} {
      margin-inline-end: var(${spaceSchema[space as Space]});
       margin-inline-start: var(${spaceSchema[space as Space]});
      }
      .ms-${space} {
       margin-inline-start: var(${spaceSchema[space as Space]});
      }
      .me-${space} {
      margin-inline-end: var(${spaceSchema[space as Space]});
      }
     .p-${space} {
      padding: var(${spaceSchema[space as Space]});
      }
       .pt-${space} {
      padding-top: var(${spaceSchema[space as Space]});
      }
        .pb-${space} {
      padding-bottom: var(${spaceSchema[space as Space]});
      }
      .py-${space} {
      padding-top: var(${spaceSchema[space as Space]});
       padding-bottom: var(${spaceSchema[space as Space]});
      }
       .pl-${space} {
      padding-left: var(${spaceSchema[space as Space]});
      }
      .pr-${space} {
      padding-right: var(${spaceSchema[space as Space]});
      }
      .px-${space} {
      padding-inline-end: var(${spaceSchema[space as Space]});
       padding-inline-start: var(${spaceSchema[space as Space]});
      }
      .ps-${space} {
       padding-inline-start: var(${spaceSchema[space as Space]});
      }
      .pe-${space} {
      padding-inline-end: var(${spaceSchema[space as Space]});
      }
      .gap-${space} {
      gap: var(${spaceSchema[space as Space]});
      }
      .row-gap-${space} {
      row-gap: var(${spaceSchema[space as Space]});
      }
      .col-gap-${space} {
      column-gap: var(${spaceSchema[space as Space]});
      }
      .grid-gap-${space} {
      grid-gap: var(${spaceSchema[space as Space]});
      }
      .grid-row-gap-${space} {
      grid-row-gap: var(${spaceSchema[space as Space]});
      }
       .grid-col-gap-${space} {
      grid-column-gap: var(${spaceSchema[space as Space]});
      }
    `
  }
  return css
}
function blurCss() {
  let css = ''
  for (const blur in blurSchema) {
    css += `
      .blur-${blur} {
      filter:  blur(var(${blurSchema[blur as Blur]}));}
      `
  }
  return css
}
function opacityCss() {
  let css = ''
  for (const opacity in opacitySchema) {
    css += `
      .opacity-${opacity} {
      opacity: var(${opacitySchema[opacity as Opacity]});}
      `
  }
  return css
}
function scaleCss() {
  let css = ''
  for (const scale in scaleSchema) {
    css += `
      .scale-${scale} {
      transform: scale(var(${scaleSchema[scale as Scale]}));}
      `
  }
  return css
}
function rotateCss() {
  let css = ''
  for (const rotate in rotateSchema) {
    css += `
      .rotate-${rotate} {
      transform: rotate(var(${rotateSchema[rotate as Rotate]}));}
      `
  }

  return css
}
function fontSizeCss() {
  let css = ''
  for (const size in fontSizeSchema) {
    css += `
      .font-size-${size} {
      font-size: var(${fontSizeSchema[size as FontSize]});}`
  }

  return css
}
function positionCss() {
  let css = ''
  for (const position of positionSchema) {
    css += `
      .${position} {
       position: ${position};
      }`
  }

  return css
}
function placingCss() {
  const toExcludeSizesOfPlacing = ['fit-content', 'max-content', 'min-content']
  let css = ''
  for (const distance in sizeSchema) {
    if (!toExcludeSizesOfPlacing.includes(distance)) {
      css += `
      .top-${distance} {
      top: var(${sizeSchema[distance as Size]});
      }
     .bottom-${distance} {
      bottom: var(${sizeSchema[distance as Size]});
      }
      .left-${distance} {
      left: var(${sizeSchema[distance as Size]});
      }
    .right-${distance} {
      right: var(${sizeSchema[distance as Size]});
      }
      .inset-x-${distance} {
      left: var(${sizeSchema[distance as Size]});
       right: var(${sizeSchema[distance as Size]});
      }
      .inset-y-${distance} {
      top: var(${sizeSchema[distance as Size]});
       bottom: var(${sizeSchema[distance as Size]});
      }
      `
    }
  }

  return css
}
function letterSpacingCss() {
  let css = ''
  for (const spacing in letterSpacingSchema) {
    css += `
      .letter-spacing-${spacing} {
      letter-spacing: var(${letterSpacingSchema[spacing as LetterSpacing]});}
      `
  }

  return css
}
function lineHeightCss() {
  let css = ''
  for (const height in lineHeightSchema) {
    css += `
      .line-height-${height} {
      line-height: var(${lineHeightSchema[height as LineHeight]});}`
  }

  return css
}
function fontWeightCss() {
  let css = ''
  for (const weight in fontWeightSchema) {
    css += `
    .font-weight-${weight} {font-weight: var(${
      fontWeightSchema[weight as FontWeight]
    });}`
  }

  return css
}
function alignCss() {
  let css = ''
  for (const align of alignSchema) {
    css += `
    .align-self-${align} { align-self: ${align};}
    .align-content-${align} { align-content: ${align};}
    .align-item-${align} { align-items: ${align};}
    .justify-self-${align} { justify-self: ${align};}
    .justify-content-${align} { justify-content: ${align};}
    .justify-item-${align} { justify-items: ${align};}
    `
  }

  return css
}
function flexWrapCss() {
  let css = ''
  for (const align of flexWrapSchema) {
    css += `
    .flex-${align} { flex-wrap: ${align};}`
  }

  return css
}
function autoFlowCss() {
  let css = ''
  for (const flow of autoFlowSchema) {
    css += `
    .auto-flow-${flow} { grid-auto-flow: ${flow};}`
  }

  return css
}
function textAlignCss() {
  let css = ''
  for (const align of textAlignSchema) {
    css += `
    .text-align-${align} { text-align: ${align};}`
  }

  return css
}
function colorCss() {
  let css = ''
  for (const colorName in colorSchema) {
    css += `   
        .color-${colorName} {
          --color-${colorName}: var(${colorSchema[colorName as Color].main});
          color: var(--color-${colorName});
        }
        [data-theme='dark'] {
         --color-${colorName}: var(${colorSchema[colorName as Color].light});
        }`
  }

  return css
}
function displayCss() {
  let css = ''
  for (const display of displaySchema) {
    if (display === 'grid-item') {
      css += ''
    } else {
      css += `.display-${display} { display: ${display};}`
    }
  }

  return css
}
function flexDirectionCss() {
  let css = ''
  for (const direction of flexDirectionSchema) {
    css += `.flex-${direction} { flex-direction: ${direction};}`
  }

  return css
}
export default function generateCommonStyles() {
  return `${radioCss()} ${borderCss()} ${borderStylesCss()} ${dimensionsCss()} ${rotateCss()} ${shadowCss()} ${scaleCss()} ${opacityCss()} ${spacesCss()} ${fontSizeCss()} ${blurCss()} ${fontWeightCss()} ${letterSpacingCss()} ${lineHeightCss()} ${alignCss()} ${flexWrapCss()} ${autoFlowCss()} ${textAlignCss()} ${colorCss()} ${colorPaletteCss()} ${displayCss()} ${positionCss()} ${placingCss()} ${flexDirectionCss()} ${zindexCss()}`
}
