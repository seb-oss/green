import{u as o,j as e,M as i}from"./iframe-DeZzR3Q-.js";import"./preload-helper-PPVm8Dsz.js";function s(t){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Get started"}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"The components in Green Core are standard web components, so you can use them with or without any framework, but since most consumers will be using Angular or React, idiomatic wrappers are provided for those frameworks."}),`
`,e.jsx(n.h3,{id:"go-here-for-angular",children:e.jsx(n.a,{href:"/docs/guides-angular--docs",children:"Go here for Angular"})}),`
`,e.jsx(n.h3,{id:"go-here-for-react",children:e.jsx(n.a,{href:"/docs/guides-react--docs",children:"Go here for React"})}),`
`,e.jsx(n.p,{children:"Keep reading below for other usages"}),`
`,e.jsx(n.h3,{id:"defining-and-tree-shaking",children:"Defining and tree-shaking"}),`
`,e.jsx(n.p,{children:"Web components needs to be defined in the custom elements registry before they can be used, and there are a few different ways to handle this."}),`
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
`,e.jsx(n.p,{children:"When using Green with Angular or React, the importing and defining is done automatically in a tree-shakable way."}),`
`,e.jsx(n.h3,{id:"scoping",children:"Scoping"}),`
`,e.jsx(n.p,{children:"Scoping is done automatically for React, and for Lit and Angular we provide simple solutions (see below for Lit, and link above for Angular), but if you are using the components in some other way, you need to set up your own solution or disable scoping."}),`
`,e.jsxs(n.p,{children:["For POCs and prototyping, you can disable scoping by setting the ",e.jsx(n.code,{children:"GDS_DISABLE_VERSIONED_ELEMENTS"})," global variable to ",e.jsx(n.code,{children:"true"})," before importing any components. This will make all components use their original element names (e.g. ",e.jsx(n.code,{children:"<gds-button>"})," instead of ",e.jsx(n.code,{children:"<gds-button-abc123>"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<head>
  <script>globalThis.GDS_DISABLE_VERSIONED_ELEMENTS = true<\/script>
  ...
</head>
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Warning:"})," Never disable scoping for a microfrontend or production application, as this will cause conflicts with other applications using the same components."]})}),`
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
`})})]})}function l(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{l as default};
