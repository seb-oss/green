import{u as s,j as e,M as r}from"./iframe-D5uig_49.js";import{S as i}from"./Mermaid-C6jrcVcK.js";import"./preload-helper-Dp1pzeXC.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"What's what?"}),`
`,e.jsx(n.h1,{id:"whats-what",children:"What's what?"}),`
`,e.jsx(n.p,{children:"Green Design System is a collection of components, styles, documentation and guidelines that help you build web applications that are consistent with the SEB brand."}),`
`,e.jsx(n.p,{children:"It contains a lot of stuff, some of it legacy, and it can be quite daunting to understand how everything fits together at first. This page will give you a high-level overview of the different parts of the design system, and how they relate to each other."}),`
`,e.jsx(n.p,{children:"The system is made available, roughly speaking, through these different resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.a,{href:"https://seb.io/",rel:"nofollow",children:"seb.io"}),":"]})," The new documentation website for the design system. Here you can find the things like design guidelines, accessibility guidelines, and other higher-level resources. This site is currently under construction, and will eventually be the main documentation hub for the design system."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.a,{href:"http://design-library.sebgroup.com/",rel:"nofollow",children:"Design Library"}),":"]})," This is the current documentation website for the design system. It only contains content for the 2016 design, and focuses mostly on guidelines and principles. This site will eventually be phased out in favor of seb.io."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"NPM packages:"})," The actual code that you import to build web experiences."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybooks:"})," Lower-level code documentation and examples. Here you can find API-docs and example component usage, as well as architectural documentation and coding guidelines."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.a,{href:"https://github.com/seb-oss/green",rel:"nofollow",children:"GitHub monorepo"}),":"]})," This is where the source code for all of the above is stored. The repo is public and open source, so anyone can browse the code  to better understand it and even contribute."]}),`
`]}),`
`,e.jsx(n.h2,{id:"npm-packages-and-storybooks",children:"NPM packages and Storybooks"}),`
`,e.jsx(n.p,{children:`Green currently has component libraries for React and Angular, underpinned by a library of framework agnostic Web Components called Green Core. There is also a design token package, a fonts package and a CSS package.
Some packages (Core, React and Angular) have Storybooks associated with them, where you can find documentation and examples for the components in that package.`}),`
`,e.jsx(n.p,{children:"Here's an overview over all the packages:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@sebgroup/green-core:"})," The core library of Web Components (this Storybook)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@sebgroup/green-react:"})," The React library (",e.jsx(n.a,{href:"https://storybook.seb.io/latest/react",rel:"nofollow",children:"React Storybook"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@sebgroup/green-angular:"})," The Angular library (",e.jsx(n.a,{href:"https://storybook.seb.io/latest/angular",rel:"nofollow",children:"Angular Storybook"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@sebgroup/green-tokens:"})," Design tokens"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@sebgroup/fonts:"})," Includes the SEB SansSerif font"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@sebgroup/chlorophyll:"})," Green CSS library (16 design) (",e.jsx(n.a,{href:"https://storybook.seb.io/latest/chlorophyll",rel:"nofollow",children:"Chlorophyll Storybook"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@sebgroup/extract:"})," A deprecated library with some shared functions and utilities for React and Angular"]}),`
`]}),`
`,e.jsx(n.p,{children:"Here is a rough diagram of how all of this fits together:"}),`
`,e.jsx(i,{chart:`flowchart TD
  style CP opacity:0.5,color:#888
  style E opacity:0.5,color:#888
  style APP fill:#fff,stroke:#666
  CP[<b>Chlorophyll</b><br><i><small>#64;sebgroup/chlorophyll</small></i>]-.->A
  E[<b>Extract</b><br><i><small>#64;sebgroup/extract</small></i>]-.->A
  E-.->R
  CP-.->R
  F[<b>Fonts</b><br><i><small>#64;sebgroup/fonts</small></i>]---->APP
  WC[<b>Green Core</b><br><i><small>#64;sebgroup/green-core</small></i>]-->APP
  DT[<b>Design Tokens</b><br><i><small>#64;sebgroup/green-tokens</small></i>]-->WC
  DT-.->CP
  WC-->A[<b>Angular</b><br><i><small>#64;sebgroup/green-angular</small></i>]-->APP
  WC-->R[<b>React</b><br><i><small>#64;sebgroup/green-react</small></i>]-->APP
  APP(<b>Your app</b><br><i><small>Using Angular, React, Other or no framework</small></i>)
`}),`
`,e.jsx(n.h3,{id:"legacy",children:"Legacy"}),`
`,e.jsx(n.p,{children:"The Angular and React libraries are older than the Core library, and a gradual process of migration is currently in progress."}),`
`,e.jsx(n.p,{children:"A goal is to eventually keep all component implementations in the Core library, and only keep complimentary framework-specific wrappers and helpers in the Angular and React libraries. At the moment, some components that are not yet migrated, are still only available in the Angular and/or React libraries."}),`
`,e.jsx(n.p,{children:"Some of the older components in React and Angular have been updated to use the new Core components internally, while retaining backwards-compatible API."}),`
`,e.jsx(n.h3,{id:"design-update-16---23",children:"Design update, 16 -> 23"}),`
`,e.jsx(n.p,{children:"At the same time, a move to a newer version of the design itself is also in progress. The new design is referred to as '23', and is being implemented in the Core package."}),`
`,e.jsx(n.h3,{id:"transitional-styles",children:"Transitional styles"}),`
`,e.jsxs(n.p,{children:["To facilitate the transition from the old design to the new, a mechanism called 'transitional styles' have been implemented in the Core library. It allows components to have the new design by default, but with the option to apply the old design to allow for a smoother transition. You can read more about this concept in ",e.jsx(n.a,{href:"/docs/concepts-transitional-styles--docs",children:"Concepts/Transitional Styles"})]}),`
`,e.jsx(n.h3,{id:"chlorophyll",children:"Chlorophyll"}),`
`,e.jsx(n.p,{children:"The Chlorophyll CSS library only contains the '16' design version, and since the goal is to have all component styles and implementation in the Core library, the styles in Chlorophyll will be gradually phased out in favor of encapsulated styles in our Web Components. This is why the Chlorophyll box is greyed out in the diagram above."}),`
`,e.jsx(n.p,{children:"Chlorophyll will still be supported for a long time to come, and it will always remain compatible with the newer components. However, it is not reccomended to build local components using styles from Chlorophyll. You should only use it if you are using the Green React or Angular components that require styles from Chlorophyll."}),`
`,e.jsx(n.h3,{id:"extract",children:"Extract"}),`
`,e.jsx(n.p,{children:"The Extract library is used to share some functionality, types, etc, between the Angular and React libraries, but since all of that is moving to the Core library, the Extract library will be deprecated and eventually removed. Do not use Extract as a direct dependency in your projects."}),`
`,e.jsx(n.h3,{id:"web-components",children:"Web Components"}),`
`,e.jsxs(n.p,{children:["All the components in Green Core are implemented as ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components",rel:"nofollow",children:"Web Components"})," using the ",e.jsx(n.a,{href:"https://lit.dev/",rel:"nofollow",children:"Lit"})," library. This means that they are framework agnostic and can be used with any framework, or without a framework. The components makes use of ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",rel:"nofollow",children:"Shadow DOM"})," to encapsulate their styles and behavior, so they won't interfere with the rest of your application."]}),`
`,e.jsx(n.p,{children:"The reason the components use Shadow DOM is twofold:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Provide style encapsulation to protect against styling conflicts which can occur in a micro-frontend environment"}),`
`,e.jsx(n.li,{children:"Put constraints on the design itself. When a feature is missing, it is important that it is implemented in the Design System and designed according to brand guidelines following all the principles that are in place. If every team/developer were to add their own tweaks, consistency is very difficult to maintain. So while this restriction can feel like a limitation at times, it serves an important purpose in the larger context of the Design System."}),`
`]}),`
`,e.jsx(n.h3,{id:"fonts",children:"Fonts"}),`
`,e.jsx(n.p,{children:"The fonts are not imported automatically in the Core library, so you need to add this yourself. There are plenty of strategies for how static files like fonts are handled and hosted, and often they are already loaded and avaible in the shells, so we want to leave this part up to you."}),`
`,e.jsxs(n.p,{children:["The CSS ",e.jsx(n.code,{children:"font-family"})," property is inherited though shadow DOM boundaries, so the components will render whichever font is used in the parent document."]})]})}function c(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{c as default};
