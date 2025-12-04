import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-BV_uNTx3.js";import{M as r}from"./WithTooltip-SK46ZJ2J-BGP9mrFR.js";import"./iframe-BgSGGahz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dz3_LlnN.js";function t(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Use"}),`
`,e.jsx(o.h1,{id:"use",children:"Use"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," The preferred way to consume React components is from the Core library. Read how to do it ",e.jsx(o.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/guides-react--docs",rel:"nofollow",children:"here"})]}),`
`,e.jsx(o.p,{children:"But if you need components from this storybook, read on."}),`
`,e.jsx(o.h2,{id:"use-components-with-chlorophyll-styles",children:"Use Components with Chlorophyll styles"}),`
`,e.jsxs(o.p,{children:["React components rely on Chlorophyll styling to work as intented. Introduce the chlorophyll library to your main styles file which is typically ",e.jsx(o.code,{children:"styles.css"})," located in your ",e.jsx(o.code,{children:"src"})," folder"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`// project/src/styles.scss
@use "~@sebgroup/chlorophyll/scss";
`})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Depending on your bundler, you may need to configure the font path by setting the ",e.jsx(o.code,{children:"$font-path"})," variable:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`@use '@sebgroup/chlorophyll/scss' with (
  $font-path: '@sebgroup/fonts/fonts'
);
`})}),`
`,e.jsx(o.h3,{id:"selective-imports",children:"Selective imports"}),`
`,e.jsx(o.p,{children:"I you are only using a few components, it's better to selectively import the components you need. This will reduce the size of the final css bundle."}),`
`,e.jsxs(o.p,{children:["Check out the example on ",e.jsx(o.a,{href:"https://storybook.seb.io/latest/chlorophyll/?path=/docs/get-started-use--page",rel:"nofollow",children:"this page"}),"."]}),`
`,e.jsx(o.h2,{id:"importing-a-react-component",children:"Importing a React component"}),`
`,e.jsx(o.p,{children:"Within your React project component file, you can import green-react components as below:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`// project/src/ProjectComponent
import { Button } from "@sebgroup/green-react";

...

<Button variant="secondary"> Click Me </Button>
`})})]})}function d(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{d as default};
