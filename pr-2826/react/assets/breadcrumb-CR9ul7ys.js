import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Bp_OEh6u.js";import{M as d,S as p}from"./blocks-CoQetxQY.js";import{B as h,a as t}from"./breadcrumb-CDPr1Pjo.js";import{B as l,D as u}from"./breadcrumb.stories-CISeQ5Bz.js";import{C as x,G as s,a as i,b as m}from"./index-Cu1f6Qyy.js";import"./iframe-BvgVfL-g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-2t2myD86.js";import"./index-Bcy6Z9yN.js";import"./alert.component-X8k4OUZ0.js";import"./declarative-layout-mixins-DM3vtrCn.js";import"./runtime-Cgryh99k.js";import"./class-map-Bgqo_Jir.js";import"./icon.component-v1yue9vz.js";import"./ref-Cy-2qq4U.js";import"./button.component-C_RJ8bSl.js";import"./watch-QkQzTQuG.js";import"./when-CI7b_ccM.js";import"./transitional-styles-Bd_I0L7E.js";import"./card.component-D9k5p0XJ.js";import"./circle-check.component-DmzKadHM.js";import"./chevron-bottom.component-lKGd0pSm.js";import"./cross-small.component-BfSzrzJ7.js";import"./triangle-exclamation.component-Bl3LMz4G.js";import"./index-BZJIqeWw.js";import"./index-Bpnqora3.js";import"./calender-add.component-BonE-8cE.js";import"./chevron-right.component-C-VWSoey.js";import"./dot-grid-one-horizontal.component-BrIHLZrB.js";import"./index-CMbFasFT.js";import"./checkmark.component-uPQcdfPR.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
