# Next.js template 
  
This is an next started project that contains the following features:

- Dark mode support
- Basic accessible components
- Reusable components construction guideline
- Components documentation width storybook
- Basic ui related hooks
- Configurable SEO features as: sitemap, meta data on headers and manifest.json
- Google analytics  configuration
- Global Style guidelines
- Unit test, cypress, lighthouse and linting configuration
- Conventional commits
- Github CI/CD pipeline

## Table of Contents

- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Setup](#setup)
- [Usage](#usage)

## Technologies
   
- Next.js - Vercel
- Typescript
- React testing library - Jest - Cypress
- Storybook
- Eslint - Prettier - Styleslint - Husky - Commitlint
- Styled-jsx/css (included with create-next-app )
    
## Folder Structure   
 .   
├── public  
│   ├── images   (image assets folder)    
│   │      ├── ico    (manifest  icon assets folder)   
│   ├── fonts  (font assets folder)     
│   ├── manifest.json (customizable manifest file)   
├── styles   (global styles folder)    
│   ├── globals.css     
│   ├── fonts.css     
│   ├── normalize.css     
├── .github  
│   ├── workflows       (github workflows folder)  
├── husky  (husky hooks folder)  
├── cypress      (cypress config and tests folder)  
│   ├── e2e/integration       (e2e or integration tests folder)  
├── storybook     (storybook config folder)  
├── lib  
│   ├── constants.ts   (customizable project config constants)  
│   ├── ga.tsx       (google analytics functions and script component)   
├── common   
│   ├── providers   (data and context provider components folder)   
│   ├── utils    (components common utility functions and types folder)  
├── hooks 
├── components  (atomic design components folder)  
│   ├── atoms   
│   │      ├── Button  
│   │      │      ├── index.tsx  (component file)  
│   │      │      ├── Button.stories.tsx  (component storybook file)  
│   │      │      ├── Button.test.tsx  (component tests file)  
│   │      │      ├── ThemedButton.test.tsx  (theme consumer component file)  
│   ├── molecules    
│   ├── templates    
│   ├── pages    
├── doc                 (documentation folder)  
├── lighthouserc.js                     (lightouse rules config file)  
├── next-sitemap.config.js         (sitemap config file)  
├── cypress.config.ts                  (cypress config file)  
├── jest.config.js                  (jest config file)  
├── jest.setup.js                     (jest and storybook setup file)    
├── commitlint.config.js   (conventional commits config file)   
   
## Setup   

Install project dependencies  
  
```bash
npm install
```
  
```bash
npm run prepare
``` 

To download and install  typescript CLI , run the following command:
     
```bash
npm install -g typescript
```

To download and install  Lighthouse CI CLI , run the following command:
     
```bash
npm i -g @lhci/cli 
```
   
To download and install Vercel CLI, run the following command:   
    
```bash
npm i -g vercel
   
```  
After running the next command, a .vercel directory is added at the root of your project folder. It contains both the organization and project ID.    
   
```bash
 vercel
```  



## Environment Variables

### Production env  
   
 >NODE_ENV  
 >NEXT_PUBLIC_SITE_URL  
 >NEXT_PUBLIC_SITE_NAME   
 >NEXT_PUBLIC_GA_TRACKING_ID          (not required)   
 >NEXT_GOOGLE_SITE_VERIFICATION     (not required)  
   
   
### Githube actions env  
     
>LHCI_GITHUB_APP_TOKEN  
   
>VERCEL_TOKEN  
>ORG_ID  
>PROJECT_ID  
    
## Scripts

*   `dev`  Starts the application in development mode
*   `build` Creates an optimized production build of your application
*   `start`  Starts the application in production mode.
*   `lgci`  Runs Lighthouse assertions
*   `lgci:run` Build project and runs Lighthouse assertions
*   `lint`  Run ESLint to catch errors
*   `lint:fix`  Run ESLint to correct errors
*   `test`  Runs jest tests in watch mode
*   `test:ci`  Runs jest tests in ci mode
*   `test:related`  Finds and runs the tests that cover a list of source files that were passed in as arguments
*   `cypress`  Opens cypress
*   `cypress:headless`  Runs all cypress tests headlessly
*   `cypress:ci` Runs all cypress tests headlessly on testing env
*   `type-check`   Runs typescript type checks
*   `storybook`  Starts storybook server on port 6006
*   `storybook:build` Build Storybook as a static web application
*   `postbuild` Runs next-sitemap generator  
*   `build:analyze` Runs bundle-analyzer
  