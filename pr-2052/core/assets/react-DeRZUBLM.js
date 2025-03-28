import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{u as s}from"./index-BqRQ0iNe.js";import"./chunk-HLWAVYOI-DMA34cWh.js";import{ae as r}from"./index-BilLyyBM.js";import"./iframe-BuIUWAYQ.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function o(t){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Guides/React"}),`
`,e.jsx(n.p,{children:"React 19 has built-in support for web components, and Green Core automatically generates typed JSX wrappers for all components and icons. This means you can use the components directly in your JSX templates."}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { GdsButton } from '@sebgroup/green-core/react'
`})}),`
`,e.jsx(n.p,{children:"Then, in your JSX template:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<GdsButton rank="secondary" onClick={() => console.log('Hello')}>
  Click me!
</GdsButton>
`})}),`
`,e.jsx(n.p,{children:"These imports are tree-shakable and the underlying web components will be defined automatically on first use."}),`
`,e.jsx(n.h2,{id:"transitional-styles",children:"Transitional styles"}),`
`,e.jsx(n.p,{children:"If you are using the 2016 design, you need to add transitional styles. You can import them like this and register separately:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import * as ButtonStyles from '@sebgroup/green-core/components/button/button.trans.styles.js'
ButtonStyles.register()
`})}),`
`,e.jsx(n.p,{children:"Then, you can use the component in your JSX template as shown above."}),`
`,e.jsx(n.h2,{id:"react-18-and-older",children:"React 18 and older"}),`
`,e.jsxs(n.p,{children:[`React 18 and older versions do not have proper built-in support for web components. You can still use Green Core components in your React application, but you need to provide a wrapper for each component.
You can use the `,e.jsx(n.code,{children:"createComponent"})," function from ",e.jsx(n.code,{children:"@lit/react"})," to create these wrappers."]}),`
`,e.jsx(n.p,{children:"Here is an example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import React from 'react'
import { createComponent } from '@lit/react'

import { GdsButton as GdsButtonClass } from '@sebgroup/green-core/component/button/index.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

import * as ButtonStyles from '@sebgroup/green-core/components/button/button.trans.styles.js'
ButtonStyles.register()

export const GdsButton = createComponent({
  tagName: getScopedTagName('gds-button'),
  elementClass: GdsButtonClass,
  react: React,
  events: { onClick: 'click' }, // Event callbacks need to be explicitly mapped to DOM events
})
`})}),`
`,e.jsxs(n.p,{children:["Then you can just use ",e.jsx(n.code,{children:"<GdsButton />"})," like a regular React component."]})]})}function g(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{g as default};
