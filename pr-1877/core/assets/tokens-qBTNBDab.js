import{j as e}from"./jsx-runtime-BvxN2PAe.js";import{u as t}from"./index-CO44Ffwj.js";import"./chunk-HLWAVYOI-C81PhHma.js";import{ae as r}from"./index-CkNQj4a2.js";import"./iframe-B0La9-DR.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function o(s){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Concepts/Tokens"}),`
`,e.jsx(n.h1,{id:"tokens",children:"Tokens"}),`
`,e.jsx(n.p,{children:`Green Design System uses a token-based approach to design. This means
that design properties, such as colors and spacing values, are defined
in a single place and are then used throughout the design system.
This makes it easier to maintain and update the design system and helps to
ensure consistency across the components in the system and the products
that use them.`}),`
`,e.jsxs(n.p,{children:["Tokens are  commonly referred to as ",e.jsx("em",{children:"variables"}),`, and these terms
can be used interchangeably for the most parts. The distiction is mainly an
abstract one, with the term `,e.jsx("em",{children:"token"}),` meaning the design value itself,
whereas `,e.jsx("em",{children:"variable"}),` often refers to the concrete implementation in code. In
CSS it is typically called `,e.jsx(n.code,{children:"variables"}),` though the technically correct terminlogy
is `,e.jsx(n.code,{children:"CSS custom properties"}),". In Figma, they are called ",e.jsx(n.code,{children:"variables"}),`. Other
languagues and tools may have other names for the same concept.`]}),`
`,e.jsx(n.h2,{id:"token-collections",children:"Token collections"}),`
`,e.jsx(n.p,{children:"Tokens in Green are grouped in the following collections:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Colors",e.jsx(n.br,{}),`
`,"Green uses a three-level color system, which you can read more about under ",e.jsx(n.a,{href:"/docs/style-colors--docs",children:"Style/Colors"})]}),`
`,e.jsxs(n.li,{children:["Text",e.jsx(n.br,{}),`
`,"Text tokens include font sizes, line heights, and font weights. Read more under ",e.jsx(n.a,{href:"/docs/style-typography--docs",children:"Style/Typography"})]}),`
`,e.jsxs(n.li,{children:["Sizes",e.jsx(n.br,{}),`
`,"Size tokens define the spacing values used for paddings, margins, gaps and other spaces in the design. Read more under ",e.jsx(n.a,{href:"/docs/style-size--docs",children:"Style/Size"})]}),`
`,e.jsxs(n.li,{children:["Viewports",e.jsx(n.br,{}),`
`,"Viewport tokens define the breakpoints used in the design system."]}),`
`,e.jsxs(n.li,{children:["Shadows",e.jsx(n.br,{}),`
`,"Shadow tokens define the ",e.jsx(n.code,{children:"box-shadow"})," values used in the design system."]}),`
`]}),`
`,e.jsx(n.h2,{id:"using-token-variables",children:"Using token variables"}),`
`,e.jsxs(n.p,{children:[`In most cases you don't need to use variables directly. They are already used in
the design of the components, and if you are using `,e.jsx(n.a,{href:"/docs/concepts-declarative-layout--docs",children:"Declarative Layout"}),`, you have a
simplified way of using the tokens. You can read more on this under `,e.jsx(n.a,{href:"/docs/style-colors--docs",children:"Style/Colors"}),"."]}),`
`,e.jsx(n.p,{children:`However, in some cases you will need to use CSS variables directly in your code, so
let's briefly go over how to access them.`}),`
`,e.jsx(n.h3,{id:"using-the-css-variables",children:"Using the CSS variables"}),`
`,e.jsxs(n.p,{children:["In CSS, you can access the tokens by using the ",e.jsx(n.code,{children:"var()"}),` function. If you are not familiar
with CSS variables, you can `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"read more about them on MDN"}),"."]}),`
`,e.jsxs(n.p,{children:["By default, tokens are defined on the ",e.jsx(n.code,{children:":host"}),` selector of every component, so in order to access them, the element you are styling
needs to be a child to a Green component. CSS variables, as opposed to other CSS properties, propagates down across shadow DOM boundaries,
so when they are defined on the `,e.jsx(n.code,{children:":host"})," selector of a component, they are available to all children of that component."]}),`
`,e.jsxs(n.p,{children:[`If a parent of your element is one of the declarative layout components from Green
(ie, container, flex, grid or card), you're already covered, but if not, you can use `,e.jsx(n.code,{children:"<gds-theme>"})," for this purpose. ",e.jsx(n.code,{children:"<gds-theme>"}),` does not
add any visible layout to the page, but it provides access to all the CSS variables. The theme component can also be used to toggle
between light and dark mode, as well as setting the design version to be used by its descendants. You can `,e.jsx(n.a,{href:"/docs/components-theme--docs",children:"read more about the theme component here"}),"."]}),`
`,e.jsx(n.p,{children:"Here is an example of using the theme component to get access to variables:"}),`
`,e.jsx("gds-theme",{"design-version":"2023",children:e.jsx("div",{style:{backgroundColor:"var(--gds-color-l2-background-primary)",color:"var(--gds-color-l2-content-primary)",padding:"var(--gds-space-l)"},children:"Hello world"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-theme design-version="2023">
  <div style="background-color: var(--gds-color-l2-background-primary); color: var(--gds-color-l2-content-primary); padding: var(--gds-space-l);">
    Hello world
  </div>
</gds-theme>
`})}),`
`,e.jsxs(n.p,{children:["Try inspecting this example in Chrome DevTools, and change the value of the ",e.jsx(n.code,{children:"color-scheme"})," attribute in the ",e.jsx(n.code,{children:"<gds-theme>"})," element to ",e.jsx(n.code,{children:"dark"})," to see what happens to the color variables."]})]})}function y(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{y as default};
