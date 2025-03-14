import{j as e}from"./jsx-runtime-jlkngO-M.js";import{u as o}from"./index-CsjPDBdz.js";import"./chunk-HLWAVYOI-CFYwXX_8.js";import{ae as s}from"./index-B0KyF2dQ.js";import"./iframe-DKNW17Ai.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function r(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Get started"}),`
`,e.jsx(n.h2,{id:"install",children:"Install"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn install @sebgroup/green-core

# or use npm
npm install @sebgroup/green-core
`})}),`
`,e.jsx(n.h2,{id:"use",children:"Use"}),`
`,e.jsx(n.p,{children:"There are three main ways you can use Green Core:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"With Lit"}),`
`,e.jsx(n.li,{children:"With Angular"}),`
`,e.jsx(n.li,{children:"With React"}),`
`]}),`
`,e.jsx(n.p,{children:"But that said, the components in Green Core are just regular Web Components, so you can use them with or without any framework."}),`
`,e.jsx(n.h3,{id:"using-lit",children:"Using Lit"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { css, customElement, LitElement } from 'lit'

// This custom \`html\` template literal tag from Green Core extends the default \`lit-html\` tag to handle element version scoping.
import { html } from '@sebgroup/green-core/scoping'

// Transitional styles applies the current 2016 design language to the components
// These two linies imports and registers the transitional styles for the button component
import * as ButtonStyles from '@sebgroup/green-core/components/button/button.trans.styles.js'
ButtonStyles.register()

// Import the components that you need
import '@sebgroup/green-core/components/button/index.js'

@customElement('my-app')
export class MyApp extends LitElement {
  static styles = css\`\`

  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html\`<gds-button>Click me!</gds-button>\`
  }
}
`})}),`
`,e.jsx(n.h3,{id:"using-angular",children:"Using Angular"}),`
`,e.jsx(n.p,{children:"Angular has support for using web components directly. To enable this support, you need to do the following:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Add the ",e.jsx(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})," in the module where you plan to use the components."]}),`
`,e.jsxs(n.li,{children:["Provide ",e.jsx(n.code,{children:"NggCoreRenderer"})," or import ",e.jsx(n.code,{children:"NggCoreWrapperModule"})," to handle Green Core's element name scoping."]}),`
`]}),`
`,e.jsx(n.p,{children:"The renderer is more convenient, but the wrapper module can provide more explicit control."}),`
`,e.jsxs(n.p,{children:["For a more detailed break-down of how to use Green Core components with Angular, and some additional information about use with the router, see the full ",e.jsx(n.a,{href:"/docs/guides-angular--docs",children:"Angular guide"}),"."]}),`
`,e.jsx(n.p,{children:"Below is a minimal example using the renderer."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"In your module:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { provideCoreRenderer } from '@sebgroup/green-angular/src/lib/shared'

@NgModule({
    // Provides \`NggCoreRenderer\` as a custom renderer
    providers: [provideCoreRenderer()],
    // CUSTOM_ELEMENTS_SCHEMA is still needed
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
`})}),`
`,e.jsxs(n.p,{children:["If you need animations, use ",e.jsx(n.code,{children:"provideCoreRendererWithAnimations()"})," instead, and make sure to import ",e.jsx(n.code,{children:"BrowserAnimationsModule"})," too."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"In your component:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@sebgroup/green-core/components/button/index.js'

// Transitional styles, only if you need the 2016 design
import * as ButtonStyles from '@sebgroup/green-core/components/button/button.trans.styles.js'
ButtonStyles.register()
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"In your template:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-button (click)="handleEvent($event)">Click me!</gds-button>
`})}),`
`,e.jsx(n.h3,{id:"using-react",children:"Using React"}),`
`,e.jsxs(n.p,{children:["In most cases, we already exort React wrappers for these components from the ",e.jsx(n.code,{children:"@sebgroup/green-react"})," package. In those cases you can just use those. But you can also easily create your own wrappers using ",e.jsx(n.code,{children:"@lit/react"}),"."]}),`
`,e.jsx(n.p,{children:"Here is an example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import React from 'react'
import { createComponent } from '@lit/react'

import { GdsButton } from '@sebgroup/green-core/component/button/index.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

import * as ButtonStyles from '@sebgroup/green-core/components/button/button.trans.styles.js'
ButtonStyles.register()

export const Button = createComponent({
  tagName: getScopedTagName('gds-button'),
  elementClass: GdsButton,
  react: React,
  events: { onClick: 'click' }, // Event callbacks need to be explicitly mapped to DOM events
})
`})}),`
`,e.jsxs(n.p,{children:["Then you can just use ",e.jsx(n.code,{children:"<Button />"})," like a regular React component."]})]})}function x(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{x as default};
