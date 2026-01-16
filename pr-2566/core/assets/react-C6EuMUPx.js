import{u as s,j as e,M as r}from"./iframe-BQQroKqS.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Guides/React"}),`
`,e.jsx(n.h1,{id:"using-green-core-components-with-react",children:"Using Green Core components with React"}),`
`,e.jsx(n.h2,{id:"react-19",children:"React 19"}),`
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
`,e.jsx(n.p,{children:"Then, you can use the component in your JSX template as shown above."}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:["All events in Green Core has a corresponding CamelCased version that you can use in React. For example, if you see an event called ",e.jsx(n.code,{children:"gds-ui-state"}),", you can use ",e.jsx(n.code,{children:"onGdsUiState"})," in react."]}),`
`,e.jsx(n.h3,{id:"web-component-quirks-with-react",children:"Web component quirks with React"}),`
`,e.jsx(n.p,{children:"There are a few quirks to be aware of when using web components with React:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Event handling"}),": React does not apply some of its regular conventions to web components, for example, when you use ",e.jsx(n.code,{children:"<input>"})," in React, it will automatically map the ",e.jsx(n.code,{children:"input"})," event to the ",e.jsx(n.code,{children:"onChange"})," callback."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"State synchronization"}),": React does not automatically enforce state synchronisation on custom form controls."]}),`
`]}),`
`,e.jsx(n.p,{children:"Both of these issues are handled in the generated React wrappers for Green Core components. The wrappers add some middle-layer logic to replicate this idiomatic behavior, so they should behave as you expect normal form controls to behave, but it's good to be aware that it's not React doing this natively and there may be edge cases where it does not work as expected."}),`
`,e.jsx(n.h2,{id:"transitional-styles",children:"Transitional styles"}),`
`,e.jsx(n.p,{children:"If you are using the 2016 design, you need to add transitional styles. You can import them like this and register separately:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import * as ButtonStyles from '@sebgroup/green-core/components/button/button.trans.styles.js'
ButtonStyles.register()
`})}),`
`,e.jsx(n.h2,{id:"react-18-and-older",children:"React 18 and older"}),`
`,e.jsx(n.p,{children:"It is strongly recommended to upgrade to React 19 to use Green Core. However, if you need to use React 18 or older, you can still use Green Core components in your React application, but you need to provide your own wrapper for each component."}),`
`,e.jsxs(n.p,{children:["You can use the ",e.jsx(n.code,{children:"createComponent"})," function from ",e.jsx(n.code,{children:"@lit/react"})," to create these wrappers."]}),`
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
`,e.jsxs(n.p,{children:["Then you can just use ",e.jsx(n.code,{children:"<GdsButton />"})," like a regular React component."]})]})}function c(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{c as default};
