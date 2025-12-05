import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-cvgedavm.js";import{M as s}from"./WithTooltip-SK46ZJ2J-BPrAK9bZ.js";import"./iframe-Ct16n_P_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DyVAcVPk.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Install"}),`
`,e.jsx(n.h1,{id:"green-react",children:"Green React"}),`
`,e.jsx(n.p,{children:"Green React is a collection of React components for the Green design system. It provides a set of reusable components that can be easily integrated into your React applications."}),`
`,e.jsx(n.h2,{id:"legacy-code",children:"Legacy code"}),`
`,e.jsx(n.p,{children:"A migration is currently in progress, where the React-specific implementations are being replaced by framework-agnostic web components. This means that some components in this library are plain React components, and some are simply wrappers for web components. Some wrappers are more complex than others in order to maintain the same API as the original React components."}),`
`,e.jsxs(n.p,{children:["When this work was started, React still did not have proper support for web components, and these wrappers were necessary. Since then, things have changed a bit, and React 19 now does have proper support for web components. This means that we now also export React-versions of the web components from the Green Core library (",e.jsx(n.code,{children:"@sebgroup/green-core"}),"). A benefit of this is these components will always be up to date and provide a 1:1 feature parity with the web components. Therefore, going forward, the recommended way of consuming React components is to import them directly from ",e.jsx(n.code,{children:"@sebgroup/green-core/react"}),". You can find more information about this in the ",e.jsx(n.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/green-design-system--docs",rel:"nofollow",children:"Green Core Storybook"}),"."]}),`
`,e.jsx(n.h3,{id:"in-this-library",children:"In this library"}),`
`,e.jsx(n.p,{children:"Of the components in this library, these are currently wrappers, and use a web component from Green Core under the hood:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Context menu"}),`
`,e.jsx(n.li,{children:"Dropdown"}),`
`,e.jsx(n.li,{children:"Datepicker"}),`
`,e.jsx(n.li,{children:"Popover"}),`
`,e.jsx(n.li,{children:"Filter chips"}),`
`,e.jsx(n.li,{children:"Grouped list"}),`
`,e.jsx(n.li,{children:"Segmented control"}),`
`]}),`
`,e.jsx(n.p,{children:"The rest are regular React components, and will be migrated or deprecated over time. Prefer to use the web components whenever possible."}),`
`,e.jsx(n.p,{children:"Another this to be aware of is that the regular React components rely on the Chlorophyll CSS framework for styling (this is included as a dependency), while the web components have styles included and encapsulated in shadow DOM out of the box."}),`
`,e.jsx(n.h2,{id:"install",children:"Install"}),`
`,e.jsx(n.p,{children:"Install React components npm package using the following"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm install @sebgroup/green-react --save

`})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"./?path=/story/use--page",children:"Next step"})})]})}function d(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{d as default};
