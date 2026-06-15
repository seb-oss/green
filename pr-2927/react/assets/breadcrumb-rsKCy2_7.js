import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Cg4rw7Qg.js";import{M as d,S as p}from"./blocks-ByymUQ-A.js";import{B as h,a as t}from"./breadcrumb-wFfmX-gJ.js";import{B as l,D as u}from"./breadcrumb.stories-DECqJL2X.js";import{C as x,G as s,a as i,b as m}from"./index-Dut86pZS.js";import"./iframe-Beh_VNnr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-pRcuxg3n.js";import"./index-3yJDD_7J.js";import"./alert.component-Bd5QEBcs.js";import"./declarative-layout-mixins-TNpzn5PJ.js";import"./runtime-Cgryh99k.js";import"./class-map-i68-QYbz.js";import"./icon.component-CVlXOusQ.js";import"./ref-DH4GvBZ0.js";import"./button.component-POshhrU5.js";import"./aria-forwarding-D9KxWeew.js";import"./when-CI7b_ccM.js";import"./transitional-styles-Cp92Z64h.js";import"./card.component-BMogwOva.js";import"./circle-check.component-CsvrF-4Y.js";import"./chevron-bottom.component-CYr6_tpL.js";import"./cross-small.component-LrOZHOoM.js";import"./triangle-exclamation.component-D0YNoKqk.js";import"./index-Kso1mYO3.js";import"./index-ZRh6-xVK.js";import"./calender-add.component-CzWAsfoJ.js";import"./chevron-left.component-BYyy5X6E.js";import"./dot-grid-one-horizontal.component-LHDpqGNu.js";import"./index-DqDatG6n.js";import"./checkmark.component-C9alKNhP.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
