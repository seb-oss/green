import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-CetCgFPN.js";import{M as d,S as p}from"./blocks-Cr5twrBm.js";import{B as h,a as t}from"./breadcrumb-DJ5oRiRZ.js";import{B as l,D as u}from"./breadcrumb.stories-Byevtn1L.js";import{C as x,G as s,a as i,b as m}from"./index-B3ZU7xBL.js";import"./iframe-a5gIpdK3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DmPfeYjw.js";import"./index-CvV_JJaE.js";import"./alert.component-BCOd_3ty.js";import"./tokens.style-DYFavAxZ.js";import"./runtime-nRyYmvPb.js";import"./class-map-BrQoAMV7.js";import"./icon.component-uKh1n_99.js";import"./ref-DrcaRVN9.js";import"./button.component-DRMI87ny.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CtoEuUBX.js";import"./card.component-DucC4sLF.js";import"./circle-check.component-CvaStz2q.js";import"./chevron-bottom.component-ZYKwTeJe.js";import"./cross-small.component-B8dO3GFq.js";import"./triangle-exclamation.component-BLT2RbjX.js";import"./index-BU9ehQbA.js";import"./index-DPi00ur1.js";import"./calender-add.component-PrUs7iug.js";import"./chevron-right.component-ZTCG9kl0.js";import"./dot-grid-one-horizontal.component-DD8Of5g2.js";import"./index-CCCDgehP.js";import"./checkmark.component-C0SPkAGo.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
