import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Cdp0VSOu.js";import{M as d,S as p}from"./blocks-D3dN8dQi.js";import{B as h,a as t}from"./breadcrumb-DFcPOwAT.js";import{B as l,D as u}from"./breadcrumb.stories-CCMSfjeP.js";import{C as x,G as s,a as i,b as m}from"./index-BnaUqDj5.js";import"./iframe-Br_i1snI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BA1BlJgD.js";import"./index-CliT__3u.js";import"./alert.component-TI-W1kwB.js";import"./declarative-layout-mixins-CCIkS4J4.js";import"./runtime-Cgryh99k.js";import"./class-map-DmwtyIHK.js";import"./icon.component-C2UIopmA.js";import"./ref-B0BzUANJ.js";import"./button.component-qKSz3xIe.js";import"./watch-rsnQmdjn.js";import"./when-CI7b_ccM.js";import"./transitional-styles-C7JI3nwL.js";import"./card.component-KgTkg2bf.js";import"./circle-check.component-dV-8OH7Q.js";import"./chevron-bottom.component-BfopQuEk.js";import"./cross-small.component-Du4_Y2px.js";import"./triangle-exclamation.component-BwHa0F-a.js";import"./index-pTz4zuZ9.js";import"./index-C2LUw54t.js";import"./calender-add.component-Do-AcL4Z.js";import"./chevron-right.component-CheEW07y.js";import"./dot-grid-one-horizontal.component-gNRTsW7R.js";import"./index-DjeHieqZ.js";import"./checkmark.component-0vulNG2U.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
