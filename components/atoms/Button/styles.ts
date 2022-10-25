export const colorSchema = {
  whiteAlpha: {
    main: '--colors-whiteAlpha-500',
    dark: '--colors-whiteAlpha-600',
    contrast: 'dark'
  },
  blackAlpha: {
    main: '--colors-blackAlpha-500',
    dark: '--colors-blackAlpha-600',
    contrast: 'dark'
  },
  gray: {
    main: '--colors-gray-100',
    dark: '--colors-gray-200',
    contrast: 'light'
  },
  red: {
    main: '--colors-red-500',
    dark: '--colors-red-600',
    contrast: 'dark'
  },
  orange: {
    main: '--colors-orange-500',
    dark: '--colors-orange-600',
    contrast: 'dark'
  },
  yellow: {
    main: '--colors-yellow-400',
    dark: '--colors-yellow-500',
    contrast: 'light'
  },
  green: {
    main: '--colors-green-500',
    dark: '--colors-green-600',
    contrast: 'dark'
  },
  teal: {
    main: '--colors-teal-500',
    dark: '--colors-teal-600',
    contrast: 'dark'
  },
  blue: {
    main: '--colors-blue-500',
    dark: '--colors-blue-600',
    contrast: 'dark'
  },
  purple: {
    main: '--colors-purple-500',
    dark: '--colors-purple-600',
    contrast: 'dark'
  },
  pink: {
    main: '--colors-pink-500',
    dark: '--colors-pink-600',
    contrast: 'dark'
  }
}
export const sizeSchema = {
  xs: {
    height: '--sizes-6',
    width: '--sizes-6',
    fontSize: '--fontSizes-xs',
    paddingInline: '--space-2'
  },
  sm: {
    height: '--sizes-8',
    width: '--sizes-8',
    fontSize: '--fontSizes-sm',
    paddingInline: '--space-3'
  },
  md: {
    height: '--sizes-10',
    width: '--sizes-10',
    fontSize: '--fontSizes-md',
    paddingInline: '--space-4'
  },
  lg: {
    height: '--sizes-12',
    width: '--sizes-12',
    fontSize: '--fontSizes-lg',
    paddingInline: '--space-6'
  }
}

export type Color = keyof typeof colorSchema
export type Size = keyof typeof sizeSchema
export type Variant = 'solid' | 'ghost' | 'outline'

export const getStyles = ({ color, size, colorSchema, sizeSchema }: any) => `

.btn{
border: 1px solid transparent;
font-weight:600;
border-radius:0.375em;
cursor:pointer;
 transition-property: var(--transition-property-common);
transition-duration: var(--transition-duration-normal);
position:relative;
}


.btn::focus{
outline-color: var(--ring-color)
}


.btn[disabled]{
opacity: 0.4;
cursor: not-allowed;
box-shadow: var(--shadows-none);
}


.bn--${color}-solid{
background-color: var(${colorSchema[color].main});
color: var(${
  colorSchema[color].contrast === 'light' ? '--colors-black' : '--colors-white'
});
 }

.bn--${color}-solid:hover{
 background-color: var(${colorSchema[color].dark});
 }

.btn--${size}{
height: var(${sizeSchema[size].height});
min-width: var(${sizeSchema[size].width});
font-size: var(${sizeSchema[size].fontSize});
padding-inline-start:var(${sizeSchema[size].paddingInline});
padding-inline-end: var(${sizeSchema[size].paddingInline});
 }

.bn--${color}-outline{
border-color: var(${colorSchema[color].main});
color: var(${color === 'gray' ? 'inherit' : colorSchema[color].main});
background-color:var(--colors-transparent);
}

.bn--${color}-ghost{ 
border-color:var(--colors-transparent);
background-color:var(--colors-transparent);
color: var(${colorSchema[color].main});
  }

.bn--${color}-ghost:hover::before, .bn--${color}-outline:hover::before{
content: " ";
position:absolute;
border-radius:inherit;
width:100%;
height:100%;
top:0;
left:0;
background-color: var(${colorSchema[color].dark});
opacity:0.1;
}

.bn--${color}-ghost:active::before, .bn--${color}-outline:active::before{
opacity:0.15;
}
`
