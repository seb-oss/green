import{u as t,j as e,M as d}from"./iframe-DVeeRdOd.js";import"./preload-helper-Dp1pzeXC.js";function s(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Contributing/Code Splitting"}),`
`,e.jsx(n.h1,{id:"code-splitting",children:"Code Splitting"}),`
`,e.jsx(n.p,{children:"This document describes how to build components in a tree-shakable way."}),`
`,e.jsx(n.h2,{id:"dead-code-elimination",children:"Dead code elimination"}),`
`,e.jsx(n.p,{children:"Dead code elimination works by statically analyzing the code in the application, and figuring out which code paths are actually being called, and then removing the stuff that is never reached."}),`
`,e.jsxs(n.p,{children:["This kind of elimination can only be done for code that is free of side-effects. If there are side-effects, such as setting a cookie or writing to ",e.jsx(n.code,{children:"localStorage"}),", the code cannot be eliminated, because the analyzer doesn't know what else relies on the side-effect. The same thing is true when a web component is defined in the browser's ",e.jsx(n.code,{children:"CustomElementRegistry"}),"."]}),`
`,e.jsx(n.p,{children:"To get around this, Green Core exports both side-effect components that are defined automatically on import, and pure components that needs to be manually defined."}),`
`,e.jsx(n.p,{children:"Currently, side-effect exports are exposed though the package root:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { GdsDropdown } from '@sebgroup/green-core'
`})}),`
`,e.jsx(n.p,{children:"This imports all components in a non-tree-shakable way, meaning that even unused components will be included in the final bundle."}),`
`,e.jsx(n.p,{children:"The pure components are exposed through a sub-path:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { GdsDropdown } from '@sebgroup/green-core/pure'

GdsDropdown.define()
`})}),`
`,e.jsxs(n.p,{children:["This will import only ",e.jsx(n.code,{children:"GdsDropdown"}),", allowing for tree-shaking and reducing the final bundle size."]}),`
`,e.jsx(n.p,{children:"In a future major release, this is likely to change in order to make the pure components the default export."}),`
`,e.jsx(n.h2,{id:"library-coding-guidelines",children:"Library coding guidelines"}),`
`,e.jsx(n.p,{children:"The file structure of a components should look roughly something like this:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["my-component/",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"index.ts"}),`
`,e.jsx(n.li,{children:"my-component.ts"}),`
`,e.jsx(n.li,{children:"my-component.component.ts"}),`
`,e.jsx(n.li,{children:"my-component.styles.ts"}),`
`,e.jsx(n.li,{children:"my-component.test.ts"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["The important parts here are the ",e.jsx(n.code,{children:"my-component.ts"})," and the ",e.jsx(n.code,{children:"my-component.component.ts"}),"."]}),`
`,e.jsxs(n.p,{children:["The actual implementation of the component should be in ",e.jsx(n.code,{children:"my-component.component.ts"}),", while ",e.jsx(n.code,{children:"my-component.ts"})," should import the component, call ",e.jsx(n.code,{children:"MyComponent.define()"})," and then re-export."]}),`
`,e.jsxs(n.p,{children:["Example from ",e.jsx(n.code,{children:"dropdown.ts"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { GdsDropdown } from './dropdown.component'

GdsDropdown.define()

export { GdsDropdown }
`})}),`
`,e.jsxs(n.p,{children:["This way, the side-effect of defining the component is contained within the ",e.jsx(n.code,{children:"my-component.ts"})," file, keeping the ",e.jsx(n.code,{children:".component.ts"})," file pure."]}),`
`,e.jsx(n.h3,{id:"sub-dependencies",children:"Sub-dependencies"}),`
`,e.jsx(n.p,{children:"You should never rely on the consumer to import some vital depency on their end. If component A relies on component B for its internal structure, then component A needs to import component B."}),`
`,e.jsx(n.p,{children:"Also in the cases where you know that a component needs to be used with a particular child-component, it makes sense for the parent component to import that child component."}),`
`,e.jsx(n.h3,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.p,{children:["Here's some consumer code using a ",e.jsx(n.code,{children:"gds-dropdown"}),":"]}),`
`,e.jsx(n.p,{children:"JS:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { GdsDropdown } from '@sebgroup/green-core/pure'
GdsDropdown.define()
`})}),`
`,e.jsx(n.p,{children:"HTML:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-dropdown label="Select something">
  <gds-option value="first">First choice</gds-option>
  <gds-option value="second">Second choice</gds-option>
</gds-dropdown>
`})}),`
`,e.jsxs(n.p,{children:["Notice that the consumer needs two components here, ",e.jsx(n.code,{children:"gds-dropdown"})," and ",e.jsx(n.code,{children:"gds-option"}),". Therefor, ",e.jsx(n.code,{children:"gds-dropdown"})," should also import ",e.jsx(n.code,{children:"gds-option"}),", because from the consumers perspective, it would be unexpected to need to import it separately."]}),`
`,e.jsxs(n.p,{children:["In case a consumer also needs the types for these components, it can be helpful to forward it in the ",e.jsx(n.code,{children:"index.ts"}),":"]}),`
`,e.jsxs(n.p,{children:["index.ts for ",e.jsx(n.code,{children:"gds-dropdown"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export * from './dropdown'
export * from '../../primitives/listbox/option'
`})}),`
`,e.jsxs(n.p,{children:["Internally, the dropdown also use other components, such as ",e.jsx(n.code,{children:"gds-popover"})," and ",e.jsx(n.code,{children:"gds-listbox"}),". These are also imported by the component."]}),`
`,e.jsxs(n.p,{children:["All the dependencies should be registered in the ",e.jsx(n.code,{children:"gdsCustomElement"})," decorator. This makes sure that all of them are defined in the ",e.jsx(n.code,{children:"CustomElementRegistry"})," when the dependant is defined."]}),`
`,e.jsxs(n.p,{children:["For ",e.jsx(n.code,{children:"gds-dropdown"}),", it looks like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`@gdsCustomElement('gds-dropdown', {
  dependsOn: [
    GdsFormControlHeader,
    GdsFormControlFooter,
    GdsFieldBase,
    GdsListbox,
    GdsPopover,
    IconCheckmark,
    IconChevronBottom,
  ],
})
`})})]})}function c(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{c as default};
