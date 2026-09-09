import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DDWKTkbA.js";import{M as d,S as p}from"./blocks-sQQYpD7I.js";import{B as h,a as t}from"./breadcrumb-CJHnXO0e.js";import{B as l,D as u}from"./breadcrumb.stories-Bn5qHnj8.js";import{C as x,G as s,a as i,b as m}from"./index-DMAn6hgg.js";import"./iframe-Bg4vm2Zo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJVonWVk.js";import"./index-BS6GqtvF.js";import"./alert.component-CCEFBAPB.js";import"./declarative-layout-mixins-BcTTFP85.js";import"./runtime-Cgryh99k.js";import"./class-map-CYSAQGor.js";import"./icon.component-8uyxerC-.js";import"./ref-DxMNaT1n.js";import"./button.component-B0EPp0kO.js";import"./watch-rsnQmdjn.js";import"./when-CI7b_ccM.js";import"./transitional-styles-Ds070E38.js";import"./card.component-vrznxnnx.js";import"./circle-check.component-DYuaGZKp.js";import"./chevron-bottom.component-C2bq6_E4.js";import"./cross-small.component-CnCr4Bqg.js";import"./triangle-exclamation.component-BLN4Hl-r.js";import"./index-C3U7YYdB.js";import"./index-BnxuSuJI.js";import"./calender-add.component-DbiiIcQt.js";import"./chevron-right.component-DyjsIOaN.js";import"./dot-grid-one-horizontal.component-f0_yRQIV.js";import"./index-CdBQXj8-.js";import"./checkmark.component-WuqsVHOV.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
