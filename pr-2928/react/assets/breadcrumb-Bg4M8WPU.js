import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-CQelrIep.js";import{M as d,S as p}from"./blocks-Dj-Y2SYR.js";import{B as h,a as t}from"./breadcrumb-BzQaW7KL.js";import{B as l,D as u}from"./breadcrumb.stories-RgPIeu9S.js";import{C as x,G as s,a as i,b as m}from"./index-D953s9Wp.js";import"./iframe-JlqSS_XP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D2dj6P-H.js";import"./index-BPKKf0P7.js";import"./alert.component-MgwH7fjX.js";import"./declarative-layout-mixins-DdK2xf4p.js";import"./runtime-Cgryh99k.js";import"./class-map-AoKsT_qo.js";import"./icon.component-mV0bKNdI.js";import"./ref-dvubyCfe.js";import"./button.component-Cyyi0rAh.js";import"./watch-QkQzTQuG.js";import"./when-CI7b_ccM.js";import"./transitional-styles-B6_KKal2.js";import"./card.component-Cp1gs_EE.js";import"./circle-check.component-BGTRCyAM.js";import"./chevron-bottom.component-C9ICB82i.js";import"./cross-small.component-QYDMVeiR.js";import"./triangle-exclamation.component-CnzVl-F9.js";import"./index-DXu4z298.js";import"./index-BPl8qWMq.js";import"./calender-add.component-CCYaGeGa.js";import"./chevron-right.component-BrqKL7aR.js";import"./dot-grid-one-horizontal.component-Cgyn8hOI.js";import"./index-0VMQDYQX.js";import"./checkmark.component-CyVh8PDy.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
