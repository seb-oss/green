import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-CIshh0DL.js";import{M as d,S as p}from"./blocks-p5WzUCBC.js";import{B as h,a as t}from"./breadcrumb-CexRYo6d.js";import{B as l,D as u}from"./breadcrumb.stories-Di7g9rY0.js";import{C as x,G as s,a as i,b as m}from"./index-_MOBO0Iu.js";import"./iframe-DZnDkVPA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DbM9DiAl.js";import"./index-7RXXJEJp.js";import"./alert.component-AZ6XDbsR.js";import"./tokens.style-BzBOz0om.js";import"./runtime-nRyYmvPb.js";import"./class-map-_dPGYW0e.js";import"./icon.component-C9H6DoOy.js";import"./ref-CnLLFG6i.js";import"./button.component-DRS14h0U.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-Dgr8Ntu3.js";import"./card.component-b4AHh2Ih.js";import"./circle-check.component-0Cngc_6y.js";import"./chevron-bottom.component-B4JMWJXr.js";import"./cross-small.component-BcqZEI9A.js";import"./triangle-exclamation.component-Ca023ajN.js";import"./index-DNWbKpif.js";import"./index-B32sCbgl.js";import"./calender-add.component-CV8umi55.js";import"./chevron-right.component-fgSG77qH.js";import"./dot-grid-one-horizontal.component-DiadmIxK.js";import"./index-gH2gmqGg.js";import"./checkmark.component-BI95O3ov.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
