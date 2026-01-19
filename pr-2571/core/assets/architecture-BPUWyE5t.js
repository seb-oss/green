import{u as s,j as e,M as i}from"./iframe-DMDyobL-.js";import{S as r}from"./Mermaid-DexN4ddO.js";function o(t){const n={h1:"h1",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Concepts/Architecture"}),`
`,e.jsx(n.h1,{id:"green-architecture",children:"Green architecture"}),`
`,e.jsx(n.p,{children:"Green Core is the foundation of the Green Design System, and consists of a set of Web Components that underpins the React and Angular components that are typically used when building applications."}),`
`,e.jsx(n.p,{children:"The Web Components are themselves often composed of a hierarchy of smaller Web Componentes, called primitives, that defines the various atomic pieces that make up a component."}),`
`,e.jsx(n.p,{children:"The Green architecture roughly looks something like this:"}),`
`,e.jsx(r,{chart:`flowchart TD
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
`,e.jsx(n.p,{children:"Public API Boundry before Web Components means that anything that is lower level than a complete component is considered internal to the framework and should not be used by consumers. We only guarantee semantic versioning for the public api. Anything that is considered internal could change in breaking ways in any release."})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{h as default};
