import{j as e,M as l}from"./WithTooltip-SK46ZJ2J-BqBj9YUi.js";import{useMDXComponents as t}from"./index-CwPMOufD.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-Bi3z28Tk.js";function n(s){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"How to use Cholorophyll"}),`
`,e.jsx(o.h1,{id:"how-to-use-chlorophyll",children:"How to use Chlorophyll"}),`
`,e.jsx(o.p,{children:"It's generally not recommended to use Chlorophyll directly. Instead you should use one of Greens component libraries which provides pre-made components for Angular and React."}),`
`,e.jsx(o.h2,{id:"angular",children:"Angular"}),`
`,e.jsxs(o.p,{children:["For detailed information on how to use with Angular, go here: ",e.jsx(o.a,{href:"https://storybook.seb.io/latest/angular/",rel:"nofollow",children:"Angular Storybook"})]}),`
`,e.jsx(o.h2,{id:"react",children:"React"}),`
`,e.jsxs(o.p,{children:["For detailed information on how to use with React, go here: ",e.jsx(o.a,{href:"https://storybook.seb.io/latest/react/",rel:"nofollow",children:"React Storybook"})]}),`
`,e.jsx(o.h2,{id:"selective-imports",children:"Selective imports"}),`
`,e.jsx(o.p,{children:"If you only need a few components, you can selectively import the things that you need."}),`
`,e.jsx(o.p,{children:"First, you need to add some base styles that all components depend on:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-scss",children:`@use '@sebgroup/chlorophyll/scss/components/themes/' as themes;
@use '@sebgroup/chlorophyll/scss/components/reset/' as reset;
@use '@sebgroup/chlorophyll/scss/components/fonts/';
`})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Depending on you bundler, you may need to configure the font path by setting the ",e.jsx(o.code,{children:"$font-path"})," variable:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-scss",children:`@use '@sebgroup/chlorophyll/scss/components/fonts/' with (
  $font-path: '@sebgroup/fonts/fonts'
);
`})}),`
`,e.jsx(o.p,{children:"You will likely also need to use utility classes and grid (and some components use these interally):"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-scss",children:`@use '@sebgroup/hlorophyll/scss/components/utility';
@use '@sebgroup/chlorophyll/scss/components/grid';
`})}),`
`,e.jsx(o.p,{children:"If you use any form components, you may also need to import the form module:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-scss",children:`@use '@sebgroup/chlorophyll/scss/components/form';
`})}),`
`,e.jsx(o.p,{children:"Then you can import the individual components that you need:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-scss",children:`@use '@sebgroup/chlorophyll/scss/components/tabs-bar';
@use '@sebgroup/chlorophyll/scss/components/button';
@use '@sebgroup/chlorophyll/scss/components/dropdown';
@use '@sebgroup/chlorophyll/scss/components/datepicker';
@use '@sebgroup/chlorophyll/scss/components/context-menu';
// ...etc
`})})]})}function a(s={}){const{wrapper:o}={...t(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(n,{...s})}):n(s)}export{a as default};
