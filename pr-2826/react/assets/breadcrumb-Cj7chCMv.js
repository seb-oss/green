import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-CRo8A1Ga.js";import{M as d,S as p}from"./blocks-D21IJUa5.js";import{B as h,a as t}from"./breadcrumb-iuWAdcNV.js";import{B as l,D as u}from"./breadcrumb.stories-DnAHZdWY.js";import{C as x,G as s,a as i,b as m}from"./index-8K7Bswgx.js";import"./iframe-yCUhBq6n.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-Kb-3Pw.js";import"./index-W-yPqH4J.js";import"./alert.component-BxmUs5Io.js";import"./declarative-layout-mixins-_06SKQMp.js";import"./runtime-Cgryh99k.js";import"./class-map-p9a7aOqr.js";import"./icon.component-DsViI2Je.js";import"./ref-gL6JZIvB.js";import"./button.component-B6W6L_OS.js";import"./watch-QkQzTQuG.js";import"./when-CI7b_ccM.js";import"./transitional-styles-DZI2zshL.js";import"./card.component-BSqDm8we.js";import"./circle-check.component-Htlfqixg.js";import"./chevron-bottom.component-DvZ3ej60.js";import"./cross-small.component-B1GB_eHr.js";import"./triangle-exclamation.component-iz0VZVBH.js";import"./index-DorPVgEn.js";import"./index-DOJz0TX6.js";import"./calender-add.component-DL-f0Cj9.js";import"./chevron-right.component-K5UftUB1.js";import"./dot-grid-one-horizontal.component-CsBbxddc.js";import"./index-CjpXkK6F.js";import"./checkmark.component-DH9mV39j.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
