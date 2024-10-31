import{ae as e,af as r}from"./index-x86wdeKD.js";import{u as s}from"./index-D2Qan75q.js";import"./chunk-HLWAVYOI-LdmnFt0c.js";import"./iframe-DEE5pnGP.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-Cef7vbu6.js";import"./index-DrFu-skq.js";function t(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Guides/Troubleshooting"}),`
`,e.jsx(n.h1,{id:"troubleshooting-common-problems",children:"Troubleshooting common problems"}),`
`,e.jsx(n.p,{children:"This guide will help you troubleshoot common problems that you might encounter when developing with Green."}),`
`,e.jsx(n.h2,{id:"component-is-not-rendering",children:"Component is not rendering"}),`
`,e.jsx(n.p,{children:"If a component is not rendering, there are a few things you can check:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Make sure that the component is imported correctly. For example, if you are using the button component, you need
to import it like this:`}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@sebgroup/green-core/components/button/index.js'
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Check that ",e.jsx(n.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/concepts-scoping--docs",rel:"nofollow",children:"custom element scoping"}),` is
correctly applied. If you inspect the component in the browser, you should see that the custom element name has a
version suffix, like this:`,e.jsx(n.code,{children:"<gds-button-VERSIONSTRING>"}),"."]}),`
`,e.jsx(n.p,{children:"If the version suffix is missing, it usually means one of two things:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The component is not imported correctly. See previous point."}),`
`,e.jsxs(n.li,{children:[`The suffix is not being applied in your template. There are a few different ways to accomplish this, depending on
what framework you are working with. Check the examples in the `,e.jsx(n.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/welcome--docs",rel:"nofollow",children:"Welcome"}),`
docs to see how it is done in Lit, React and Angular.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["When the component is properly initialized, it should have an attribute called ",e.jsx(n.code,{children:"gds-element"}),`, and a shadow root
attached, similar to this:`]}),`
`,e.jsx("img",{width:"335",alt:"image",src:"https://github.com/user-attachments/assets/5918f952-4713-4ee8-a298-2ae9b71c45fa"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-is-not-styled-correctly",children:"Component is not styled correctly"}),`
`,e.jsxs(n.p,{children:["First, check that you have loaded and registered Transistional Styles accoring to the examples in the ",e.jsx(n.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/welcome--docs",rel:"nofollow",children:"Welcome"})," docs."]}),`
`,e.jsx(n.p,{children:"If you are still having issues, continue reading."}),`
`,e.jsxs(n.p,{children:["A common cause of styling issues with Green Core components is that ",e.jsx(n.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/concepts-transitional-styles--docs",rel:"nofollow",children:"transitional styles"}),`
often rely on `,e.jsx(n.a,{href:"https://storybook.seb.io/latest/chlorophyll",rel:"nofollow",children:"Chlorophyll"})," CSS variables being in scope."]}),`
`,e.jsx(n.p,{children:"When you already have the Chlorophyll CSS loaded on the page, this is usually not an issue, but if you try to use the components in isolation, you might run into this problem."}),`
`,e.jsx(n.p,{children:"There are two ways to solve it:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Make sure that the Chlorophyll CSS is loaded on the page. This can be done by importing SCSS or precompiled CSS from the ",e.jsx(n.code,{children:"@sebgroup/chlorophyll"})," package."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Use the (currently experimental) ",e.jsx(n.code,{children:"<gds-theme>"})," component. This component will automatically load the Chlorophyll CSS variables, and make sure that they are in scope."]}),`
`,e.jsxs(n.p,{children:["You can use the ",e.jsx(n.code,{children:"<gds-theme>"})," component like this:"]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// Import the theme component
import '@sebgroup/green-core/components/theme/index.js'

// Import and register transitional styles for the theme component
// This is important, as it will make sure that the actual Chlorophyll CSS variables are loaded
import * as themeTransStyles from '@sebgroup/green-core/components/theme/theme.trans.styles.ts'
themeTransStyles.register()
`})}),`
`,e.jsx(n.p,{children:"Then use it in your template:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-theme>
  <!-- Green Core components here -->
</gds-theme>
`})}),`
`,e.jsx(n.h2,{id:"errors-in-the-console",children:"Errors in the console"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"Class constructor LitElement cannot be invoked without 'new'"})}),`
`,e.jsx(n.p,{children:"This error usually occurs when incorrect transformations are applied in the build step."}),`
`,e.jsx(n.p,{children:"Make sure that:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"@babel/preset-env"})," is configured correctly in your Babel configuration."]}),`
`,e.jsxs(n.li,{children:["The compile target for both Babel and TypeScript is set to at least ",e.jsx(n.code,{children:"es2015"}),"."]}),`
`,e.jsx(n.li,{children:"You are using Typescript version 5.0 or later."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"problems-testing-with-jest",children:"Problems testing with Jest"}),`
`,e.jsxs(n.p,{children:["The most common source of issues when tesing with Jest is that, by default, Jest does not apply babel transformations to modules in ",e.jsx(n.code,{children:"node_modules"}),`.
Because of this, you need to configure Jest to transform the Green Core modules. Core already have a configureation for this that you can import
and apply to your Jest configuration.`]}),`
`,e.jsx(n.p,{children:"Check the docs for React or Angular for more details on how to do this:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://storybook.seb.io/latest/react/?path=/docs/testing--docs",rel:"nofollow",children:"React"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://storybook.seb.io/latest/angular/?path=/docs/testing--docs",rel:"nofollow",children:"Angular"})}),`
`]})]})}function x(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{x as default};
