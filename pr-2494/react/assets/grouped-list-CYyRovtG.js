import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BLx-cpbW.js";import{M as i,C as l}from"./WithTooltip-SK46ZJ2J-DVERbW6V.js";import{G as a,L as n}from"./grouped-list-BHMdaQSQ.js";import{G as d}from"./grouped-list.stories-BU6WY0qj.js";import"./iframe-d6pE-P_0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DWxPNXHP.js";import"./create-component-CPRSibq9.js";import"./grouped-list.component-Ch6kQnLm.js";import"./tokens.style-Dpl9siNR.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DaNvNrAN.js";function o(s){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
`,e.jsx(t.h1,{id:"grouped-list",children:"Grouped List"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://github.com/seb-oss/green/tree/main/libs/react/src/lib/grouped-list",rel:"nofollow",children:"Source code"}),`
 | 
`,e.jsx(t.a,{href:"https://designlibrary.sebgroup.com/components/lists",rel:"nofollow",children:"Usage guidelines"})]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(t.p,{children:"List are used to list many datapoints with labels in a structured way. They may be grouped under heading and they may have a link or button added to act on the data being displayed."}),`
`,e.jsx(t.h2,{id:"importing-the-component",children:"Importing the component"}),`
`,e.jsxs(t.p,{children:["To use the component, import ",e.jsx(t.code,{children:"GroupedList"})," and ",e.jsx(t.code,{children:"ListItem"})," like this:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { GroupedList, ListItem } from '@sebgroup/green-react/src/lib/list'

// Use as JSX element in your app
return (
  <GroupedList label="List heading">
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </GroupedList>
)
`})}),`
`,e.jsx(l,{children:e.jsxs(a,{label:"List heading",children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]})}),`
`,e.jsx(t.h2,{id:"register-transitional-styles",children:"Register transitional styles"}),`
`,e.jsxs(t.p,{children:["This component does not need you to import styles from ",e.jsx(t.code,{children:"Chlorophyll"}),' it handles it with "transitional styles" that you need to register.']}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { registerTransitionalStyles } from '@sebgroup/green-core/scoping'
// Register the styles once in your apps entrypoint (main.tsx, app.tsx) file
registerTransitionalStyles()
`})}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(t.p,{children:["For various examples of how to use the component, head over to the ",e.jsx(t.a,{href:"https://storybook.seb.io/latest/core/?path=/story/components-grouped-list--page",rel:"nofollow",children:"Green Core storybook"})]})]})}function w(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(o,{...s})}):o(s)}export{w as default};
