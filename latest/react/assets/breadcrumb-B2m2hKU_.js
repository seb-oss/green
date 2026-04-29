import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-C7LYE82L.js";import{M as d,S as p}from"./blocks-CnGrNBjK.js";import{B as h,a as t}from"./breadcrumb-CF5QN-Uo.js";import{B as l,D as u}from"./breadcrumb.stories-BVHbsvfJ.js";import{C as x,G as s,a as i,b as m}from"./index-Cl4BxlHl.js";import"./iframe-CQUnwiD8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CIWZCzjo.js";import"./index-MHndklZb.js";import"./alert.component-C6iK_8ZT.js";import"./tokens.style-B9dm16Su.js";import"./runtime-nRyYmvPb.js";import"./class-map-CH5RdcFs.js";import"./icon.component-Buf0R8yE.js";import"./ref-DJiapoSF.js";import"./button.component-1bcRdqQh.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DrHEwaoE.js";import"./card.component-BmZX1aP5.js";import"./circle-check.component-BHjIsbFu.js";import"./chevron-bottom.component-Bqbu32Ni.js";import"./cross-small.component-CHZH7K3R.js";import"./triangle-exclamation.component-C7oZhJUX.js";import"./index-CncV63K2.js";import"./index-BJsP_4kZ.js";import"./calender-add.component-nrx3b3sJ.js";import"./chevron-right.component-Yvgj8Tzr.js";import"./dot-grid-one-horizontal.component-uhOf-2kd.js";import"./index-BdA-3_4q.js";import"./checkmark.component-CuYLwUJO.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
