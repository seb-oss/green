import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-eMq1Mi9m.js";import{M as d,S as p}from"./blocks-BTx_Axz8.js";import{B as h,a as t}from"./breadcrumb-CpyTCSBs.js";import{B as l,D as u}from"./breadcrumb.stories-CBaJCEE8.js";import{C as x,G as s,a as i,b as m}from"./index-CZrbFOKn.js";import"./iframe-DK1bhXq4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B5BojqOE.js";import"./index-5bq0l07Q.js";import"./alert.component-BVCVGQFd.js";import"./declarative-layout-mixins-CkJtKMON.js";import"./runtime-Cgryh99k.js";import"./class-map-BpY1O2DD.js";import"./icon.component-DftlaaIj.js";import"./ref-D2pnP0QS.js";import"./button.component-BIax0BRb.js";import"./watch-rsnQmdjn.js";import"./when-CI7b_ccM.js";import"./transitional-styles-BL4Eoy8U.js";import"./card.component-CgUMxjp0.js";import"./circle-check.component-Qnj4v5_f.js";import"./chevron-bottom.component-Bp9eTe3v.js";import"./cross-small.component-DvENmaXV.js";import"./triangle-exclamation.component-bGqv_xBs.js";import"./index-eRDIs4x8.js";import"./index-CYHN1qm-.js";import"./calender-add.component-U1dVj1DU.js";import"./chevron-right.component-D-jJgUl-.js";import"./dot-grid-one-horizontal.component-C4OHwpOX.js";import"./index-BrtZpXx3.js";import"./checkmark.component-CQBhQcZL.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
