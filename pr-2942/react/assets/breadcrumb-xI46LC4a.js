import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-a5_uSUDt.js";import{M as d,S as p}from"./blocks-B6tATZUx.js";import{B as h,a as t}from"./breadcrumb-DHfRI3w-.js";import{B as l,D as u}from"./breadcrumb.stories-D-_utxVj.js";import{C as x,G as s,a as i,b as m}from"./index-DMgTNqFL.js";import"./iframe-lr-vECyi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5sCiXLl.js";import"./index-DngUsu1X.js";import"./alert.component-DEQ5DnZL.js";import"./declarative-layout-mixins-DHI9lTLI.js";import"./runtime-Cgryh99k.js";import"./class-map-CiOQNvRW.js";import"./icon.component-4okfYE8z.js";import"./ref-CgnsIgfV.js";import"./button.component-CDgXlkoD.js";import"./aria-forwarding-D9KxWeew.js";import"./when-CI7b_ccM.js";import"./transitional-styles-Bh0dHMFO.js";import"./card.component-DWNe74m8.js";import"./circle-check.component-lF-D_EWZ.js";import"./chevron-bottom.component-BhFPYVBB.js";import"./cross-small.component-X4cO0Iqh.js";import"./triangle-exclamation.component-B_1RXBXz.js";import"./index-DtDAAkXP.js";import"./index-KVkdm-9L.js";import"./calender-add.component-9OgZow5t.js";import"./chevron-left.component-BBC8RGQK.js";import"./dot-grid-one-horizontal.component-sUYKVfrL.js";import"./index-DIr9ippE.js";import"./checkmark.component-Dd6o_z2E.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
