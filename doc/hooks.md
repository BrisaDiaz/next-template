#  Hooks 
  
## `useBreakpoints`  

This binding returns several methods that allows you to adapt layouts and components at various breakpoints.   Dimensions are updated on load, on mount/un-mount, when resizing the window. 
   
### Default breakpoints   
   
  -  **xs**: 0  
  -  **sm**: 640  
  -  **md**: 768  
  -  **lg**: 1024  
  -  **xl**: 1280  
  -  **2xl**: 1536  
     
### Custom breakpoints as argument
   
   ```tsx
import useBreakpoints, { BreakpointsSchema } from '@hooks/useBreakpoints'
// or import { useBreakpoints } from '@hooks'

export default function Component() {
  /// the values are used as px
  const customBreakpoints: BreakpointsSchema = {
    xs: 0,
    sm: 411,
    md: 768,
    lg: 1366,
    xl: 1536,
    '2xl': 1920
  }
  const breakpoints = useBreakpoints(customBreakpoints)

  return (
    <div>
      <p>Is small size screen: {breakpoints.only('sm')}</p>
      <p>Is medium size screen: {breakpoints.only('sm')}</p>
      <p>Is large size screen: {breakpoints.only('lg')}</p>
      <p>Is extra large size screen: {breakpoints.only('xl')}</p>
      <p>Is extra extra large size screen: {breakpoints.only('2xl')}</p>
    </div>
  )
}

```  
  
### Methods

`breakpoints.up(key)` 
       
  *Argument*
  >  A breakpoint key (xs, sm, etc.) or a screen width number in px.
      
   *Return* 
  > Returns a boolean indicating if the screen width is greater than the screen size given by the breakpoint key (inclusive).
   
`breakpoints.down(key)`   
  
*Argument*
  >  A breakpoint key (xs, sm, etc.) or a screen width number in px.
      
*Return* 
>  Returns a boolean indicating if the screen width is less than the screen size given by the breakpoint key (exclusive).

`breakpoints.only(key)`   
   
*Argument*
  >  A breakpoint key (xs, sm, etc.).
      
*Return*  
>  Returns a boolean indicating if the screen width starts from the screen size given by the breakpoint key (inclusive) and stops at the screen size given by the next breakpoint key (exclusive).  


`breakpoints.equal(key)`   
       
*Argument*  
  >  A breakpoint key (xs, sm, etc.) or a screen width number in px.
      
*Return* 
>  Returns a boolean indicating if the screen width is equal at the screen size given by the breakpoint key.   

`breakpoints.unequal(key)`   
       
*Argument*  
  >  A breakpoint key (xs, sm, etc.) or a screen width number in px.
      
*Return* 
>  Returns a boolean indicating if the screen width is not equal at the screen size given by the breakpoint key. 


`breakpoints.not(key)`  
   
*Argument*
  >  A breakpoint key (xs, sm, etc.).
      
*Return* 
>  Returns a boolean indicating if the screen width stops at the screen size given by the breakpoint key (exclusive) and starts at the screen size given by the next breakpoint key (inclusive).

`breakpoints.between(start, end)`
       
*Argument*  
  >  A breakpoint key (xs, sm, etc.) or a screen width number in px.

*Return* 
>  Returns a boolean indicating if the screen width is greater than the screen size given by the breakpoint key in the first argument (inclusive) and less than the screen size given by the breakpoint key in the second argument (exclusive).  
   
### Usage example
   
```tsx
import useBreakpoints from '@hooks/useBreakpoints'
// or import { useBreakpoints } from '@hooks'

import Button from '@components/atoms/Button'

export default function Page() {
  const breakpoints = useBreakpoints()
  return (
    <div>
      <Button
        size={breakpoints.up('md') ? 'md' : 'sm'}
        colorSchema={breakpoints.between('sm', 950) ? 'blue' : 'red'}
      >
        Click me
      </Button>
    </div>
  )
}
```
 
## `useElementSize`    
   
This hook helps you to dynamically recover the width and the height of an HTML element. Dimensions are updated on load, on mount/un-mount, when resizing the window and when the ref changes.   
    
### Usage Example

```tsx

import useElementSize from '@hooks/useElementSize'
// or import { useElementSize } from '@hooks'
import Button from '@components/atoms/Button'

export default function Page() {
  const [buttonRef, { width, height }] = useElementSize<HTMLButtonElement>()

  return (
    <div>
      <Button ref={buttonRef}>Click me</Button>
      <p>Button height {height}</p>
      <p>Button width {width}</p>
    </div>
  )
}

```
