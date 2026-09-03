import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Cw7cBCv4.js";import{M as d,S as p}from"./blocks-DlS2kVlf.js";import{B as h,a as t}from"./breadcrumb-BeS23hbR.js";import{B as l,D as u}from"./breadcrumb.stories-CTuIbY1a.js";import{C as x,G as s,a as i,b as m}from"./index-DH-KK33Y.js";import"./iframe-C5Ht9GiP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQpGThvD.js";import"./index-CeM5WDyX.js";import"./alert.component-x0SXUKEX.js";import"./declarative-layout-mixins-RRaBVSCZ.js";import"./runtime-Cgryh99k.js";import"./class-map-Dw-lskpk.js";import"./icon.component-EkyqbvYo.js";import"./ref-CVopERTs.js";import"./button.component-D88qyTuS.js";import"./watch-rsnQmdjn.js";import"./when-CI7b_ccM.js";import"./transitional-styles-D3LAqJWP.js";import"./card.component-BN5UcPN4.js";import"./circle-check.component-yCxTwzhq.js";import"./chevron-bottom.component-24Qu__em.js";import"./cross-small.component-BlXpaMRd.js";import"./triangle-exclamation.component-C715bgSQ.js";import"./index-CfzEGE5C.js";import"./index-Be0z6bGZ.js";import"./calender-add.component-CrXhn4yA.js";import"./chevron-right.component-BTbXl-DV.js";import"./dot-grid-one-horizontal.component-D5hfauPo.js";import"./index-xkoUXSSO.js";import"./checkmark.component-CMYf8oPw.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
