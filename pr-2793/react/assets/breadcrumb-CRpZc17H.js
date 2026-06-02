import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-DmXtVC_6.js";import{M as d,S as p}from"./blocks-C1_n-QzT.js";import{B as h,a as t}from"./breadcrumb-CwdPnMG4.js";import{B as l,D as u}from"./breadcrumb.stories-CcimV2vd.js";import{C as x,G as s,a as i,b as m}from"./index-CGaqNFR2.js";import"./iframe-JXwBRNPu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-dkPKGlx1.js";import"./index-BvbwSAB5.js";import"./alert.component-Dqnwxs_G.js";import"./tokens.style-CxQ3SWgH.js";import"./runtime-nRyYmvPb.js";import"./class-map-B2vseaf8.js";import"./icon.component-0ijJcYIw.js";import"./ref-BlX815BD.js";import"./button.component-C3jOUCh7.js";import"./watch-2OEWzoh-.js";import"./when-BR7zwNJC.js";import"./transitional-styles-Bn03ynzO.js";import"./card.component-C-AogSrF.js";import"./circle-check.component-3A5iS5x8.js";import"./chevron-bottom.component-BN7bYxCS.js";import"./cross-small.component-BJVnLu6A.js";import"./triangle-exclamation.component-DkSzEwKt.js";import"./index-Dg5S2P18.js";import"./index-D0A4MkgZ.js";import"./calender-add.component-CUcbMH5v.js";import"./chevron-right.component-DR_jrlE6.js";import"./dot-grid-one-horizontal.component-DHxGdz33.js";import"./index-CmAmA5-l.js";import"./checkmark.component-C2WIXHD6.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
