import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{u as r}from"./index-NsY0_b9D.js";import"./chunk-HLWAVYOI-CiIyGmpF.js";import{af as i}from"./index-Cyun3Znq.js";import{S as s}from"./Mermaid-DsuHvusV.js";import"./iframe-9DyU95wM.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function o(t){const n={h1:"h1",p:"p",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Concepts/Architecture"}),`
`,e.jsx(n.h1,{id:"green-architecture",children:"Green architecture"}),`
`,e.jsx(n.p,{children:"Green Core is the foundation of the Green Design System, and consists of a set of Web Components that underpins the React and Angular components that are typically used when building applications."}),`
`,e.jsx(n.p,{children:"The Web Components are themselves often composed of a hierarchy of smaller Web Componentes, called primitives, that defines the various atomic pieces that make up a component."}),`
`,e.jsx(n.p,{children:"The Green architecture roughly looks something like this:"}),`
`,e.jsx(s,{chart:`flowchart TD
    DT[Design Tokens]---S
  subgraph Green Core
    M[Markup]---AP
    S[Styles]---AP
    AP[Atomic Primitives]---|Composition|CP[Compound Primitives]---|-----Public API Boundry-----|WC[Web Components]
  end
  WC---A[Angular]
  WC---DC[Direct Consumption]
  WC---R[React]
`}),`
`,e.jsx(n.p,{children:"Of course, design tokens, markup and styles can be used on all levels of composition, but are only drawn at the top here in order to simplify the diagram."}),`
`,e.jsx(n.p,{children:"Public API Boundry before Web Components means that anything that is lower level than a complete component is considered internal to the framework and should not be used by consumers. We only guarantee semantic versioning for the public api. Anything that is considered internal could change in breaking ways in any release."})]})}function y(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{y as default};
