import{j as e,M as r}from"./WithTooltip-SK46ZJ2J-BSip3UGy.js";import{useMDXComponents as t}from"./index-Q5qwsYvQ.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-CL8TLtY6.js";function s(o){const n={code:"code",em:"em",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Use cases/Use Green for MFE in shell application"}),`
`,e.jsx(n.h1,{id:"use-green-for-mfe-in-shell-application",children:"Use Green for MFE in shell application"}),`
`,e.jsx(n.p,{children:"Whenever you create an MFE (Micro Front End) that will be used or incorporated in another application (shell) you need to consider CSS leakage to avoid the CSS from the MFE to affect the shell (and the other way around, which is another topic)."}),`
`,e.jsx(n.h3,{id:"scoping-css",children:"Scoping CSS"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Note: not necessary if the MFE uses a shadow DOM"})}),`
`,e.jsxs(n.p,{children:["The example below is for Angular but the same principle applies to other frameworks as well. We recommend setting up Angular with scss and that you add global styles to ",e.jsx(n.code,{children:"styles.scss"})," located in the ",e.jsx(n.code,{children:"src"})," folder of your project."]}),`
`,e.jsxs(n.p,{children:["Import green and scope it to the app root. Eg: ",e.jsx(n.code,{children:"app-root.use-green"}),` (app-root is the default root in angular but should be renamed to a unique name).
We use the app-root here to make sure that no CSS leaks outside of the MFE which will be rendered inside the `,e.jsx(n.code,{children:"<app-root>"})," tag."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"styles.scss"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Add use-green scope. If you need to configure the font-path variable you can do it here as well by setting $font-path. */
@use '@sebgroup/chlorophyll/scss/components/use-green-scope' with (
  $use-green-selector: 'app-root.use-green',
  $font-path: './path/to/seb/font'
);

app-root.use-green {
  /* declare parts to include in a separate file that you import (to scope it to .use-green) */
  @import './green'; /* custom import of green (see example file below) */
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"green.scss"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Custom import of green */
@use '@sebgroup/chlorophyll/scss'; /* if yoy want all of green */
/* @use '@sebgroup/chlorophyll/scss/components/button'; */ /* if you only need specific parts like button component(s) */
`})})]})}function p(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{p as default};
