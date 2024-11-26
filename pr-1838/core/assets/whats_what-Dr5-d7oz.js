import{j as e}from"./jsx-runtime-Cw2vUT3Q.js";import{u as r}from"./index-CpvSPiP5.js";import"./chunk-HLWAVYOI-WF1R0q9s.js";import{ae as t}from"./index-ChO9ZFZc.js";import{S as l}from"./Mermaid-BkiHE8Zb.js";import"./iframe-C84TRiQn.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function s(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"What's what?"}),`
`,e.jsx(n.h1,{id:"whats-what",children:"What's what?"}),`
`,e.jsx(n.p,{children:"Green Design System is a collection of components, styles, documentation and guidelines that help you build web applications that are consistent with the SEB brand."}),`
`,e.jsx(n.p,{children:"It contains a lot of stuff, some of it legacy, and it can be quite daunting to understand how everything fits together at first. This page will give you a high-level overview of the different parts of the design system, and how they relate to each other."}),`
`,e.jsx(n.p,{children:"The system is made available, roughly speaking, through these different resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.a,{href:"https://seb.io/",rel:"nofollow",children:"seb.io"}),":"]})," The main documentation website for the design system. Here you can find the things like design guidelines, accessibility guidelines, and other higher-level resources."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"NPM packages:"})," The actual code that you import to build web experiences."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybooks:"})," Lower-level code documentation and examples. Here you can find API-docs and example component usage, as well as architectural documentation and coding guidelines."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.a,{href:"https://github.com/seb-oss/green",rel:"nofollow",children:"GitHub monorepo"}),":"]})," This is where the source code for all of the above is stored. The repo is public and open source, so anyone can browse the code  to better understand it and even contribute."]}),`
`]}),`
`,e.jsx(n.h2,{id:"npm-packages-and-storybooks",children:"NPM packages and Storybooks"}),`
`,e.jsx(n.p,{children:"Green has currently has components libraries for React and Angular, underpinned by a library of framework agnostic Web Components called Green Core, as well as a design token package, a fonts package and a CSS package."}),`
`,e.jsx(n.p,{children:"Here's an overvw over all the packages:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@sebgroup/green-core:"})," The core library of Web Components (this Storybook)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@sebgroup/green-react:"})," The React library (",e.jsx(n.a,{href:"https://storybook.seb.io/latest/react",rel:"nofollow",children:"React Storybook"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@sebgroup/green-angular:"})," The Angular library (",e.jsx(n.a,{href:"https://storybook.seb.io/latest/angular",rel:"nofollow",children:"Angular Storybook"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@sebgroup/green-tokens:"})," Design tokens"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@sebgroup/fonts:"})," Includes the SEB SansSerif font"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@sebgroup/chlorophyll:"})," Green (legacy) CSS library (",e.jsx(n.a,{href:"https://storybook.seb.io/latest/chlorophyll",rel:"nofollow",children:"Chlorophyll Storybook"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@sebgroup/extract:"})," A deprecated library with some shared functions and utilities for React and Angular"]}),`
`]}),`
`,e.jsx(n.p,{children:"Here is a rough diagram of how all of this fits together:"}),`
`,e.jsx(l,{chart:`flowchart TD
    style CP opacity:0.5,color:#888
    style E opacity:0.5,color:#888
    style APP fill:#fff,stroke:#666
    CP[<b>Chlorophyll</b><br><i><small>@sebgroup/chlorophyll</small></i>]-.->A
    E[<b>Extract</b><br><i><small>@sebgroup/extract</small></i>]-.->A
    E-.->R
    CP-.->R
    F[<b>Fonts</b><br><i><small>@sebgroup/fonts</small></i>]---->APP
    WC[<b>Green Core</b><br><i><small>@sebgroup/green-core</small></i>]-->APP
    DT[<b>Design Tokens</b><br><i><small>@sebgroup/green-tokens</small></i>]-->WC
    DT-.->CP
    WC-->A[<b>Angular</b><br><i><small>@sebgroup/green-angular</small></i>]-->APP
    WC-->R[<b>React</b><br><i><small>@sebgroup/green-react</small></i>]-->APP
    APP(<b>Your app</b><br><i><small>Using Angular, React, Other or no framework</small></i>)
`}),`
`,e.jsx(n.h3,{id:"legacy",children:"Legacy"}),`
`,e.jsx(n.p,{children:"The Angular and React libraries are older than the Core library, and a gradual process of migration is in progress. This means that some components are still only available in the Angular and/or React libraries. The goal is to eventually have all components available in the Core library, and at that point the Angular and React libraries will only contain some framework-specific wrappers and helpers where needed."}),`
`,e.jsx(n.p,{children:"Some of the older components in React and Angular have been updated internally to use the Core components, while retaining old API."}),`
`,e.jsx(n.h3,{id:"design-update-2016---2023",children:"Design update, 2016 -> 2023"}),`
`,e.jsx(n.p,{children:"At the same time, a move to a never version of the design itself is also in progress. The new design is referred to as '2023', and is being implemented only in the Core package."}),`
`,e.jsx(n.h3,{id:"transitional-styles",children:"Transitional styles"}),`
`,e.jsxs(n.p,{children:["To facilitate the transition from the old design to the new, a mechanism called 'transitional styles' has been implemented in the Core library. It allows to components to have the new design by default, but the old design can optionally be imported to allow smoother transition for applications. You can read more about this in ",e.jsx(n.a,{href:"/docs/concepts-transitional-styles--docs",children:"Concepts/Transitaional Styles"})]}),`
`,e.jsx(n.h3,{id:"chlorophyll",children:"Chlorophyll"}),`
`,e.jsx(n.p,{children:"The Chlorophyll CSS library only contains the old 2016 design, and since the goal is to have all component styles and implementations in the Core library, the styles in here will be gradually phased out. This is why the Chlorophyll box is greyed out in the diagram above."}),`
`,e.jsx(n.h3,{id:"fonts",children:"Fonts"}),`
`,e.jsx(n.p,{children:"The fonts are not imported automatically in the Core library, so you need to add this yourself. There are plenty of strategies for how static files like fonts are handled and hosted, and often they are already loaded and avaible in the shells, so we want to leave this part up to you."}),`
`,e.jsxs(n.p,{children:["The CSS ",e.jsx(n.code,{children:"font-family"})," property is inherited though shadow DOM boundaries, so the components will render whichever font is set by their parent."]})]})}function f(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{f as default};
