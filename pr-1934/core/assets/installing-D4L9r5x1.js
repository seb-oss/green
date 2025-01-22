import{j as e}from"./jsx-runtime-D9TOz2-v.js";import{u as o}from"./index-_SP9_0TB.js";import"./chunk-HLWAVYOI-Iy-JElPr.js";import{ae as s}from"./index-L52Bb7IC.js";import"./iframe-C1nLCoeY.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function r(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Get started"}),`
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
`,e.jsx(n.p,{children:"Angular has support for using web components directly in the template. To enable it, you need to do the following:"}),`
`,e.jsxs(n.p,{children:["Add the ",e.jsx(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})," in the module where you plan to use the components. It is recommended to add this as locally as possible, only on the moduls/components where you need it, and not in the app module."]}),`
`,e.jsxs(n.p,{children:["You also need the ",e.jsx(n.code,{children:"NggCoreWrapperModule"})," from ",e.jsx(n.code,{children:"@sebgroup/green-angular"}),"."]}),`
`,e.jsx(n.p,{children:"In your module:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'

@NgModule({
    // Add the NggCoreWrapperModule to the \`imports\` array
    imports: [NggCoreWrapperModule],
    // Add the CUSTOM_ELEMENTS_SCHEMA to the \`schemas\` array
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
`})}),`
`,e.jsx(n.p,{children:"In your component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@sebgroup/green-core/components/button/index.js'

// Transitional styles
import * as ButtonStyles from '@sebgroup/green-core/components/button/button.trans.styles.js'
ButtonStyles.register()
`})}),`
`,e.jsxs(n.p,{children:["Use the web component in your template with the ",e.jsx(n.code,{children:"*nggCoreElement"})," directive."]}),`
`,e.jsx(n.p,{children:"In your template:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-button *nggCoreElement>Click me!</gds-button>
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"*nggCoreElement"})," directive comes from the ",e.jsx(n.code,{children:"NggCoreWrapperModule"})," you imported above. It has the same pupose as the custom html template tag mentioned in the Lit example above: It handles custom element scoping for you."]}),`
`,e.jsx(n.h4,{id:"alternative-custom-renderer",children:"Alternative custom renderer"}),`
`,e.jsxs(n.p,{children:["If you are using a lot of web components, it can feel a bit cluttered with all the ",e.jsx(n.code,{children:"*nggCoreElement"})," directives. In that case you can use ",e.jsx(n.code,{children:"NggCoreRenderer"})," instead. This will automatically add scoping to all ",e.jsx(n.code,{children:"<gds-*>"})," elements in the template."]}),`
`,e.jsx(n.p,{children:"In your module:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { CUSTOM_ELEMENTS_SCHEMA, RendererFactory2 } from '@angular/core'
import { NggCoreRendererFactory } from '@sebgroup/green-angular/src/lib/shared'

@NgModule({
    // Provide the NggCoreRenderer as a custom renderer
    providers: [
      {
        provide: RendererFactory2,
        useClass: NggCoreRendererFactory,
      },
    ],
    // CUSTOM_ELEMENTS_SCHEMA is still needed
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
`})}),`
`,e.jsx(n.p,{children:"Now you can use Green Core components in your template without any special directive:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-button>Click me!</gds-button>
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
