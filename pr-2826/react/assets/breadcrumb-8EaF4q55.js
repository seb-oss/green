import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-5aap_16b.js";import{M as d,S as p}from"./blocks-CMnlexXN.js";import{B as h,a as t}from"./breadcrumb-s0ulYE1i.js";import{B as l,D as u}from"./breadcrumb.stories-7_pHpF-N.js";import{C as x,G as s,a as i,b as m}from"./index-RWkwcW6V.js";import"./iframe-DGVqeOkq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-zWtNrq__.js";import"./index-h5BPpMfX.js";import"./alert.component-tCbSaE5O.js";import"./declarative-layout-mixins-CTNHREsP.js";import"./runtime-Cgryh99k.js";import"./class-map-C-9oTDPt.js";import"./icon.component-DVueWrI9.js";import"./ref-BmNisBzd.js";import"./button.component-5GyRbaKt.js";import"./watch-QkQzTQuG.js";import"./when-CI7b_ccM.js";import"./transitional-styles-rm4sLoh5.js";import"./card.component-Btup_4Dw.js";import"./circle-check.component-CHscsh-Z.js";import"./chevron-bottom.component-DkluyBz8.js";import"./cross-small.component-VktE3WZO.js";import"./triangle-exclamation.component-DbrlonJn.js";import"./index-dJ-a_Y1c.js";import"./index-B_tBxZg4.js";import"./calender-add.component-CzbiOPBn.js";import"./chevron-right.component-CXLZp1no.js";import"./dot-grid-one-horizontal.component-AI8AyW5j.js";import"./index-Br7Q2pxZ.js";import"./checkmark.component-C7NfH7tK.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
