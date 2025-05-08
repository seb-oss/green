import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{u as i}from"./index-BlZxG8vU.js";import"./chunk-HLWAVYOI-CZRlL44A.js";import{ae as s}from"./index-b3WTyEwZ.js";import"./iframe-Bpw2Qjew.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Contributing/Code Splitting"}),`
`,e.jsx(n.h1,{id:"code-splitting",children:"Code splitting"}),`
`,e.jsx(n.p,{children:"Since a consumer of Green Core may not need all of the components every time, it needs to be possible to import them one by one, so that only used code gets included in the application bundle."}),`
`,e.jsx(n.p,{children:"Often, you import stuff from a main export like this, for example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { GdsDropdown } from '@sebgroup/green-core'
`})}),`
`,e.jsxs(n.p,{children:["This resolves to an ",e.jsx(n.code,{children:"index.js"})," file at the root of the package, containing all the exported modules. Normally, this is perfectly fine, as most bundlers have some form of dead code elimination built in, which removes anything that isn't actually used in the end."]}),`
`,e.jsx(n.p,{children:"Dead code elimination works by statically analyzing the code in the application, and figuring out which code paths are actually being called, and then removing the stuff that is never reached."}),`
`,e.jsxs(n.p,{children:["This kind of elimination can only be done for code that is free of side-effects. If there are side-effects, such as setting a cookie or writing to ",e.jsx(n.code,{children:"localStorage"}),", the code cannot be eliminated, because the analyzer doesn't know what else relies on the side-effect. The same thing is true when a Web Component is registered in the browsers ",e.jsx(n.code,{children:"CustomElementRegistry"}),"."]}),`
`,e.jsxs(n.p,{children:["Since each component in Green Core is automatically registered with the ",e.jsx(n.code,{children:"CustomElementRegistry"}),", each component can also be said to have a side-effect. This means that when you ",e.jsx(n.code,{children:"import { GdsDropdown } from '@sebgroup/green-core'"})," you're not just getting the ",e.jsx(n.code,{children:"GdsDropdown"})," component. You're getting ALL of the components, because they all have side-effects."]}),`
`,e.jsx(n.h2,{id:"sub-path-exports",children:"Sub-path exports"}),`
`,e.jsx(n.p,{children:"We can improve the situation by making the package more granular. Intead of all modules being exported from a main root export, we can split it up into separate exports for each component. Importing an individual component now looks like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@sebgroup/green-core/components/dropdown/index.js'
`})}),`
`,e.jsx(n.p,{children:"Now we have sort of flipped the problem of dead code elimition on its head. Instead of starting at the end, when an application is built, we start at the begininng, when the component is built. By treating each component as a separate entry-point in the build process, we automatically elimitate all the things that are never imported by that component."}),`
`,e.jsx(n.p,{children:"So by the time the statical analyzer in your bundler gets to it, there's nothing more to eliminate, and the side-effectfulness of Web Components becomes a non-issue."}),`
`,e.jsx(n.h2,{id:"library-coding-guidelines",children:"Library coding guidelines"}),`
`,e.jsx(n.p,{children:"It's important to keep this in mind when writing a component. You should never rely on the consumer to import some vital depency on their end. If component A relies on component B for its internal structure, then component A needs to import component B."}),`
`,e.jsx(n.p,{children:"Also in the cases where you know that a component needs to be used with a particular child-component, it makes sense for the parent component to import that child component. Often, it will also be a good idea to forward the export of that child-component."}),`
`,e.jsx(n.h3,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.p,{children:["Here's some consumer code using a ",e.jsx(n.code,{children:"gds-dropdown"}),":"]}),`
`,e.jsx(n.p,{children:"JS:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import '@sebgroup/green-core/components/dropdown/index.js'
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
`,e.jsxs(n.p,{children:["In the source code for ",e.jsx(n.code,{children:"gds-dropdown"})," it looks like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '../../primitives/listbox'
import type { GdsListbox } from '../../primitives/listbox'
`})}),`
`,e.jsxs(n.p,{children:["In this case, using simply ",e.jsx(n.code,{children:"import { GdsListbox } from '../../primitives/listbox'"})," won't work, because Typescript will strip out the actual code if it thinks we're only using the type. It can't tell if we're using the element in the template, and in this particular case, we're only using it for type inference, so the code would get stripped. To get around that, we import the code and the type separately."]})]})}function x(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{x as default};
