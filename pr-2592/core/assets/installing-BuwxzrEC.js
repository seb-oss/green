import{u as r,j as e,M as t}from"./iframe-ByPMS9JH.js";function o(s){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Get started"}),`
`,e.jsx(n.h2,{id:"install",children:"Install"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn install @sebgroup/green-core

# or use npm
npm install @sebgroup/green-core
`})}),`
`,e.jsx(n.h2,{id:"use",children:"Use"}),`
`,e.jsx(n.p,{children:"The components in Green Core are standard web components, so you can use them with or without any framework, but since most consumers will be useing Angular or React, some extra convenience features are provided for these frameworks."}),`
`,e.jsx(n.p,{children:"Web components needs to be defined in the custom elements registry before they can be used, and there are a few different ways of handling this:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Use a sub-path side-effect import:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@sebgroup/green-core/components/button/index.js'
`})}),`
`,e.jsx(n.p,{children:"This will automatically register the component in the custom elements registry, and you can use it immediately, but it will not be tree-shakable, so it will be included in your bundle whether you use it or not."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Use a pure import and define separately:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// Import the component class
import { GdsButton } from '@sebgroup/green-core/pure'

// Call define to register with the custom elements registry
GdsButton.define()
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"For POCs and prototyping where you just want to gain access to all the components quickly, you can import everything at once:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@sebgroup/green-core/everything'
`})}),`
`,e.jsx(n.p,{children:"This will import all components and icons, and register them in the custom elements registry. This is not tree-shakable and not recommended for production use, as it will include everything in your bundle (~700kb)."}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"scoping",children:"Scoping"}),`
`,e.jsxs(n.p,{children:["Finally, you need to handle ",e.jsx(n.a,{href:"/docs/concepts-scoping--docs",children:"scoping"})," of the element names. This is done automatically for React, and for Lit and Angular we provide simple solutions (see below), but if you are using the components in some other way, you need to set up your own solution or disable scoping."]}),`
`,e.jsxs(n.p,{children:["For POCs and prototyping, you can disable scoping by setting the ",e.jsx(n.code,{children:"GDS_DISABLE_VERSIONED_ELEMENTS"})," global variable to ",e.jsx(n.code,{children:"true"})," before importing any components. This will make all components use their original element names (e.g. ",e.jsx(n.code,{children:"<gds-button>"})," instead of ",e.jsx(n.code,{children:"<gds-button-abc123>"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<head>
  <script>globalThis.GDS_DISABLE_VERSIONED_ELEMENTS = true<\/script>
  ...
</head>
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Warning:"})," Never disable scoping for a microfrontend or production application, as this will cause conflicts with other applications using the same components."]})}),`
`,e.jsx(n.h2,{id:"using-with-angular",children:"Using with Angular"}),`
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
import { getScopedTagName } from '@sebgroup/green-core/scoping'

@NgModule({
    // Provides \`NggCoreRenderer\` as a custom renderer
    providers: [provideCoreRenderer(getScopedTagName)],
    // CUSTOM_ELEMENTS_SCHEMA is still needed
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
`})}),`
`,e.jsxs(n.p,{children:["If you need animations, use ",e.jsx(n.code,{children:"provideCoreRendererWithAnimations()"})," instead, and make sure to import ",e.jsx(n.code,{children:"BrowserAnimationsModule"})," too."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"In your component:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@sebgroup/green-core/components/button/index.js'
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"In your template:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-button (click)="handleEvent($event)">Click me!</gds-button>
`})}),`
`,e.jsx(n.h2,{id:"using-with-react",children:"Using with React"}),`
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
`,e.jsxs(n.p,{children:["For full details on how to use Green Core with React, and how to handle older React versions (pre 19), see the full ",e.jsx(n.a,{href:"/docs/guides-react--docs",children:"React guide"}),"."]}),`
`,e.jsx(n.h2,{id:"using-with-lit",children:"Using with Lit"}),`
`,e.jsx(n.p,{children:"The components in Green core rely on the Lit framework for their internal implementations, and it is of course also possible to use the components in applications or other components using Lit."}),`
`,e.jsx(n.p,{children:"Here is a minimal example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { css, customElement, LitElement } from 'lit'

// This custom \`html\` template literal tag from Green Core extends the default \`lit-html\` tag to handle element version scoping.
import { html } from '@sebgroup/green-core/scoping'

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
`})})]})}function l(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{l as default};
