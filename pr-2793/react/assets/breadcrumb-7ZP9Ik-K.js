import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-CPB0jIbq.js";import{M as d,S as p}from"./blocks-B9Z_Gh1P.js";import{B as h,a as t}from"./breadcrumb-2HZdLJho.js";import{B as l,D as u}from"./breadcrumb.stories-CBZVKw4O.js";import{C as x,G as s,a as i,b as m}from"./index-2zD--BaL.js";import"./iframe-39MKjz71.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CKMsaqhZ.js";import"./index-WQdicYTM.js";import"./alert.component-B5LC7rbE.js";import"./tokens.style-DxVdNCZa.js";import"./runtime-nRyYmvPb.js";import"./class-map-1rRrO_lX.js";import"./icon.component-CnxzhO6D.js";import"./ref-BV7LdmuT.js";import"./button.component-ptZsQnet.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DN7pQLG_.js";import"./card.component-qAKB9g32.js";import"./circle-check.component-BoVopT-d.js";import"./chevron-bottom.component-BWC0bhUe.js";import"./cross-small.component-C3LmuYqK.js";import"./triangle-exclamation.component-4OoHYgGY.js";import"./index-B6jvXOQm.js";import"./index-CzzapmwH.js";import"./calender-add.component-BTfttGFD.js";import"./chevron-right.component-Dg9qpDUn.js";import"./dot-grid-one-horizontal.component-dB-jYL7j.js";import"./index-ByYQZBvV.js";import"./checkmark.component-C_MhBgkp.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
