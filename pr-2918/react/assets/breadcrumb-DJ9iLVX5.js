import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-B_uAGkmL.js";import{M as d,S as p}from"./blocks-C3rltVZF.js";import{B as h,a as t}from"./breadcrumb-DiJwlnp7.js";import{B as l,D as u}from"./breadcrumb.stories-Cn2P2CZy.js";import{C as x,G as s,a as i,b as m}from"./index-55h5MF23.js";import"./iframe-BsBrJZlq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BZi4TXqb.js";import"./index-1yO8KL7W.js";import"./alert.component-CXfzCrw-.js";import"./declarative-layout-mixins-DSF861dE.js";import"./runtime-Cgryh99k.js";import"./class-map-CqsimS31.js";import"./icon.component-C-hyQKeR.js";import"./ref-nBfUPeTE.js";import"./button.component-DG30GNMR.js";import"./watch-QkQzTQuG.js";import"./when-CI7b_ccM.js";import"./transitional-styles-B3Wp0N06.js";import"./card.component-Dn79Wy7f.js";import"./circle-check.component-CS-dqSjV.js";import"./chevron-bottom.component-CVMiZh96.js";import"./cross-small.component-CO76jzl3.js";import"./triangle-exclamation.component-BuPK22gh.js";import"./index-Ngt9GHfN.js";import"./index-BN6p-dcc.js";import"./calender-add.component-BXvFO7qB.js";import"./chevron-left.component-DUlzelAk.js";import"./dot-grid-one-horizontal.component-CfE9MbMU.js";import"./index-D_9EeQKB.js";import"./checkmark.component-BGC5NfRv.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
`,r.jsx(m,{children:r.jsx(i,{margin:"xl 0",children:r.jsxs(s,{variant:"notice",children:[r.jsx(e.strong,{children:"Note:"})," This version of Breadcrumbs is deprecated! Please use the ",r.jsx(e.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/components-breadcrumbs--docs",rel:"nofollow",children:"web component from Green Core"})," instead."]})})}),`
`,r.jsx(e.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,r.jsx(e.p,{children:"Displays the path to the current resource using a hierarchy of links."}),`
`,r.jsx(p,{of:u}),`
`,r.jsx("br",{}),`
`,r.jsx("br",{}),`
`,r.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-typescript",children:`import {
  Breadcrumb,
  BreadcrumbItem,
} from '@sebgroup/green-react/src/lib/breadcrumbs'
`})}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`<Breadcrumb>
  <BreadcrumbItem>
    <a href="/home">Home</a>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <a href="/home/cart">Cart</a>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <a href="/home/cart/shopping">Shopping</a>
  </BreadcrumbItem>
  <BreadcrumbItem>Billing</BreadcrumbItem>
</Breadcrumb>
`})})]})}function V(o={}){const{wrapper:e}={...c(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(a,{...o})}):a(o)}function n(o,e){throw new Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Q as Template,V as default};
