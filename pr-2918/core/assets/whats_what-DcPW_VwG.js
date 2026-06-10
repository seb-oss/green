import{m as h,k as s,u as m,j as t,M as f}from"./iframe-DAdgaLKT.js";import{am as i}from"./mermaid.core-DMxeWU6G.js";import"./preload-helper-PPVm8Dsz.js";const x="dark",w="default",j="dark",l="light",T="data-theme";function A(n,e){let r=n.getAttribute(T)??l;r===l||r===j||(r=l);const a=r===l?w:x;return e?.theme?.[r]??e?.mermaid?.theme??a}const C=({chart:n,config:e})=>{if(typeof window>"u")return h.createElement("div",{className:"mermaid","data-mermaid-src":n},n);const r=s.useMemo(()=>typeof e=="string"?JSON.parse(e):e,[e]),a=document.querySelector("html"),[p,g]=s.useState(!1),d=s.useMemo(()=>A(a,r),[r,p]);return s.useEffect(()=>{const o=new MutationObserver(b=>{for(const c of b)if(!(c.type!=="attributes"||c.attributeName!=="data-theme")){g(y=>!y);break}});return o.observe(a,{attributes:!0}),()=>{try{o.disconnect()}catch{}}},[]),s.useEffect(()=>{r&&(r.mermaid?i.initialize({startOnLoad:!0,...r.mermaid,theme:d}):i.initialize({startOnLoad:!0,theme:d}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach(o=>{o.removeAttribute("data-processed"),o.innerHTML=o.getAttribute("data-mermaid-src")}),i.contentLoaded())},[r,d]),s.useEffect(()=>{setTimeout(i.contentLoaded,0)},[n]),h.createElement("div",{className:"mermaid","data-mermaid-src":n},n)},k=({chart:n})=>n?h.createElement(C,{chart:n,config:{theme:{light:"neutral",dark:"dark"}}}):null;function u(n){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...m(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(f,{title:"What's what?"}),`
`,t.jsx(e.h1,{id:"whats-what",children:"What's what?"}),`
`,t.jsx(e.p,{children:"Green Design System is a collection of components, styles, documentation and guidelines that help you build web applications that are consistent with the SEB brand."}),`
`,t.jsx(e.p,{children:"It contains a lot of stuff, some of it legacy, and it can be quite daunting to understand how everything fits together at first. This page will give you a high-level overview of the different parts of the design system, and how they relate to each other."}),`
`,t.jsx(e.p,{children:"The system is made available, roughly speaking, through these different resources:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsxs(e.strong,{children:[t.jsx(e.a,{href:"https://seb.io/",rel:"nofollow",children:"seb.io"}),":"]})," The new documentation website for the design system. Here you can find the things like design guidelines, accessibility guidelines, and other higher-level resources. This site is currently under construction, and will eventually be the main documentation hub for the design system."]}),`
`,t.jsxs(e.li,{children:[t.jsxs(e.strong,{children:[t.jsx(e.a,{href:"http://design-library.sebgroup.com/",rel:"nofollow",children:"Design Library"}),":"]})," This is the old documentation website for the 2016 version of the design. It focuses mostly on guidelines and principles. This site will eventually be phased out in favor of seb.io."]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"NPM packages:"})," The actual code that you import to build web experiences."]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Storybooks:"})," Lower-level code documentation and examples. Here you can find API-docs and example component usage, as well as architectural documentation and coding guidelines."]}),`
`,t.jsxs(e.li,{children:[t.jsxs(e.strong,{children:[t.jsx(e.a,{href:"https://github.com/seb-oss/green",rel:"nofollow",children:"GitHub monorepo"}),":"]})," This is where the source code for all of the above is stored. The repo is public and open source, so anyone can browse the code  to better understand it and even contribute."]}),`
`]}),`
`,t.jsx(e.h2,{id:"npm-packages-and-storybooks",children:"NPM packages and Storybooks"}),`
`,t.jsx(e.p,{children:`Green currently has component libraries for React and Angular, underpinned by a library of framework agnostic Web Components called Green Core. There is also a design token package, a fonts package and a CSS package.
Some packages (Core, React and Angular) have Storybooks associated with them, where you can find documentation and examples for the components in that package.`}),`
`,t.jsx(e.p,{children:"Here's an overview over all the packages:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"@sebgroup/green-core:"})," The core library of Web Components (this Storybook)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"@sebgroup/green-core-ng:"})," Automatically generated Angular wrappers for the Web Components in Green Core"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"@sebgroup/green-react:"})," The React library (",t.jsx(e.a,{href:"https://storybook.seb.io/latest/react",rel:"nofollow",children:"React Storybook"}),") (deprecated)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"@sebgroup/green-angular:"})," The Angular library (",t.jsx(e.a,{href:"https://storybook.seb.io/latest/angular",rel:"nofollow",children:"Angular Storybook"}),") (deprecated)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"@sebgroup/green-tokens:"})," Design tokens"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"@sebgroup/fonts:"})," Includes the SEB SansSerif font"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"@sebgroup/chlorophyll:"})," Green CSS library (16 design) (",t.jsx(e.a,{href:"https://storybook.seb.io/latest/chlorophyll",rel:"nofollow",children:"Chlorophyll Storybook"}),") (deprecated)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"@sebgroup/extract:"})," A deprecated library with some shared functions and utilities for React and Angular. This is no longer used by those libraries internally, and is kept only for archival reasons."]}),`
`]}),`
`,t.jsx(e.p,{children:"Here is a rough diagram of how all of this fits together:"}),`
`,t.jsx(k,{chart:`flowchart TD
  style CP opacity:0.5,color:#888
  style A opacity:0.5,color:#888
  style R opacity:0.5,color:#888
  style APP fill:#fff,stroke:#666
  CP[<b>Chlorophyll</b><br><i><small>#64;sebgroup/chlorophyll</small></i>]-.->A
  CP-.->R
  F[<b>Fonts</b><br><i><small>#64;sebgroup/fonts</small></i>]---->APP
  WC[<b>Green Core</b><br><i><small>#64;sebgroup/green-core<br/>Web & React components</small></i>]-->APP
  DT[<b>Design Tokens</b><br><i><small>#64;sebgroup/green-tokens</small></i>]-->WC
  DT-.->CP
  WC-->CNG[<b>Core NG Angular wrappers</b><br><i><small>#64;sebgroup/green-core-ng<br/>Angular components</small></i>]-->APP
  WC-.->A[<b>Angular</b><br><i><small>#64;sebgroup/green-angular</small></i>]-->APP
  WC-.->R[<b>React</b><br><i><small>#64;sebgroup/green-react</small></i>]-->APP
  APP(<b>Your app</b><br><i><small>Using Angular, React, Other or no framework</small></i>)
  subgraph Deprecated
    CP
    A
    R
  end
`}),`
`,t.jsx(e.h3,{id:"legacy",children:"Legacy"}),`
`,t.jsx(e.p,{children:"The Angular and React libraries are older than the Core library, and a gradual process of migration is currently in progress."}),`
`,t.jsx(e.p,{children:"A goal is to eventually keep all component implementations in the Core library, while providing framework-idiomatic wrappers for React and Angular. At the moment, some components that are not yet migrated, are still only available in the Angular and/or React libraries."}),`
`,t.jsx(e.p,{children:"Some of the older components in React and Angular have been updated to use the new Core components internally, while retaining backwards-compatible API, but it is reccomended to use the automatically generated wrappers from green-core or green-core-ng instead, as those are guaranteed to always be up to date with the underlying library."}),`
`,t.jsx(e.h3,{id:"design-update-16---23",children:"Design update, 16 -> 23"}),`
`,t.jsx(e.p,{children:"At the same time, a move to a newer version of the design itself is also in progress. The new design is referred to as '23', and is being implemented in the Core package."}),`
`,t.jsx(e.h3,{id:"transitional-styles",children:"Transitional styles"}),`
`,t.jsxs(e.p,{children:["To facilitate the transition from the old design to the new, a mechanism called 'transitional styles' have been implemented in the Core library. It allows components to have the new design by default, but with the option to apply the old design to allow for a smoother transition. You can read more about this concept in ",t.jsx(e.a,{href:"/docs/concepts-transitional-styles--docs",children:"Concepts/Transitional Styles"})]}),`
`,t.jsx(e.h3,{id:"chlorophyll",children:"Chlorophyll"}),`
`,t.jsx(e.p,{children:"The Chlorophyll CSS library only contains the '16' design version, and since the goal is to have all component styles and implementation in the Core library, the styles in Chlorophyll will be gradually phased out in favor of encapsulated styles in our Web Components. This is why the Chlorophyll box is greyed out in the diagram above."}),`
`,t.jsx(e.p,{children:"Chlorophyll will still be supported for a long time to come, and it will always remain compatible with the newer components. However, it is not reccomended to build local components using styles from Chlorophyll. You should only use it if you are using the old Green React or Angular components that require styles from Chlorophyll."}),`
`,t.jsx(e.h3,{id:"extract",children:"Extract"}),`
`,t.jsx(e.p,{children:"The Extract library was used to share some functionality, types, etc, between the Angular and React libraries, but since all of that is moving to the Core library, the Extract library is deprecated and will eventually be removed entirely. None of the libraries depend on it any longer. Do not use Extract as a direct dependency in your projects."})]})}function R(n={}){const{wrapper:e}={...m(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}export{R as default};
