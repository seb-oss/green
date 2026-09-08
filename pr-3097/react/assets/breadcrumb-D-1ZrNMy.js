import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-KhKI22Rw.js";import{M as d,S as p}from"./blocks-Dt-IVFqs.js";import{B as h,a as t}from"./breadcrumb-ptoRvloJ.js";import{B as l,D as u}from"./breadcrumb.stories-B7bBpSWd.js";import{C as x,G as s,a as i,b as m}from"./index-B39EOwGq.js";import"./iframe-Bbab5pBw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CCv_JeHW.js";import"./index-QFNOBbFC.js";import"./alert.component-pXWHA9Ie.js";import"./declarative-layout-mixins-BUHXCl2J.js";import"./runtime-Cgryh99k.js";import"./class-map-DQAfWxTc.js";import"./icon.component-DHR6UF0p.js";import"./ref-CqAKnQbg.js";import"./button.component-Cki_0IXz.js";import"./watch-rsnQmdjn.js";import"./when-CI7b_ccM.js";import"./transitional-styles-CFquaz6J.js";import"./card.component-Rselr-Qf.js";import"./circle-check.component-CFtykuLl.js";import"./chevron-bottom.component-DqJyeCrX.js";import"./cross-small.component-D0yqC1Be.js";import"./triangle-exclamation.component-WqxiCj1X.js";import"./index-ZW0dBizp.js";import"./index-DdEYgRVX.js";import"./calender-add.component-JvBFBBmc.js";import"./chevron-right.component-DiufjKOF.js";import"./dot-grid-one-horizontal.component-Ci75IDJl.js";import"./index-C7Pjn-1q.js";import"./checkmark.component-BJPg9zC6.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
