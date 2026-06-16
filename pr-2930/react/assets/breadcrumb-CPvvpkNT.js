import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BL9ApHMm.js";import{M as d,S as p}from"./blocks-BD0ZEt6R.js";import{B as h,a as t}from"./breadcrumb-C64JL1if.js";import{B as l,D as u}from"./breadcrumb.stories-Bz29SF60.js";import{C as x,G as s,a as i,b as m}from"./index-BTuUj8sb.js";import"./iframe-Cb37uHG-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-x2D5dgdl.js";import"./index-0EX00I2K.js";import"./alert.component-BeACxdmJ.js";import"./declarative-layout-mixins-DbXOEhQt.js";import"./runtime-Cgryh99k.js";import"./class-map-D7eGWNYk.js";import"./icon.component-i0q5V0-p.js";import"./ref-DD6-Q4Ef.js";import"./button.component-Bm8mBf1o.js";import"./watch-QkQzTQuG.js";import"./when-CI7b_ccM.js";import"./transitional-styles-cpSy2wyH.js";import"./card.component-CFeOOBsS.js";import"./circle-check.component-PrxWV_re.js";import"./chevron-bottom.component-Dcm5e7AO.js";import"./cross-small.component-WGAWLICt.js";import"./triangle-exclamation.component-ogaveNQv.js";import"./index-rJ1F2QKi.js";import"./index-B3kyY4j_.js";import"./calender-add.component-i-9hzhoB.js";import"./chevron-right.component-LctbYf0O.js";import"./dot-grid-one-horizontal.component-Baz9X0bz.js";import"./index-C58pH0-1.js";import"./checkmark.component-C1vHgaaK.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
