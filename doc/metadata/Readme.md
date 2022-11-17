  #  Metadata 
     
        
## Related files     
        
├── lib  
│   ├── constants.ts   (default metadata value configurations)  
├── public  
│   ├── images   
│   │      ├── ico    (manifest icon assets folder)   
│   ├── manifest.json (customizable manifest file)   
├── page  
│   ├──_document.tsx  (manifest.json and web icons imports )   
├── common    
│   ├── providers   
│   │      ├── Meta.tsx    (metadata component )   
    
      
## Meta prop types

```ts
 type MetaData = {
  title?: string
  description?: string
  ogImage?: { url: string; width: string; height: string }
  noIndex?: boolean
  author?: string
  siteName?: string
  type?: string
  locale?: string
  keywords?: string
  subject?: string
  twitterSite?: string
  url?: string
}
   
```
## Meta usage example
   
```js
import Head from '@common/providers/Head'
import type { NextPage } from 'next'

  const meta = {
    title:
      'Candace Cameron Bure responds to "traditional marriage" backlash - The A.V. Club',
    description:
      'After saying her new Christian movie network would focus on "traditional marriage," Candace Cameron Bure encourages the haters to embrace God\'s love',
    ogImage: {
      url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c612f72df52f0c8732dfee335f8ecf7a.jpg',
      width: '1200',
      height: '675'
    },
    keyword:
      'Candace Cameron Bure, Candace, Bure, Women, hallmark channel, Up, Actors, Social Issues, American women, Christmas by medium, The A.V. Club',
    locale: 'en_US'
  }
const Page: NextPage = () => {
return (
  <>
<Head {...meta}/>
<h1> Lorem ipsum dolor sit amet</h1>
<p>Ut eu enim a  eros eleifend dignissim in pretium leo. Etiam quis lorem ante. Maecenas a risus laoreet, porta tortor vel, ultrices ante. </p>
<>
)
} 
export default Page


```
