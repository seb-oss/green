import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BoPDYvSB.js";import{M as d,S as p}from"./blocks-BJ-mjt2B.js";import{B as h,a as t}from"./breadcrumb-okMsPuse.js";import{B as l,D as u}from"./breadcrumb.stories-BBKcD5KM.js";import{C as x,G as s,a as i,b as m}from"./index-x9lnqzY_.js";import"./iframe-DJFm8O1y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BFSZr38Q.js";import"./index-CAp9MrRr.js";import"./alert.component-C28ZRlUK.js";import"./declarative-layout-mixins-Dk_P0g7a.js";import"./runtime-Cgryh99k.js";import"./class-map-Cf2R5KvW.js";import"./icon.component-CbvSePyT.js";import"./ref-ClOv5Fgi.js";import"./button.component-DeTXx6xp.js";import"./watch-rsnQmdjn.js";import"./when-CI7b_ccM.js";import"./transitional-styles-MC5JnTtI.js";import"./card.component-BkbtoMTO.js";import"./circle-check.component-DB_Oe_ic.js";import"./chevron-bottom.component-CqgZ-S2d.js";import"./cross-small.component-C9bkimys.js";import"./triangle-exclamation.component-BRmmqRd5.js";import"./index-LiHHRBPH.js";import"./index-zlzKhUht.js";import"./calender-add.component-CHwwNLma.js";import"./chevron-right.component-CRoG7Aga.js";import"./dot-grid-one-horizontal.component-BIXL8H1_.js";import"./index-DGmlt4_w.js";import"./checkmark.component-CnY4bT1O.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
