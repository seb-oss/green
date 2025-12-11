import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-BzR2vctz.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-BwKXP4YN.js";import{B as h,a as t}from"./breadcrumb-YIYnZ2LL.js";import{B as l,D as u}from"./breadcrumb.stories-gtRr8zXZ.js";import{C as x,G as n,a as m,b as s}from"./index-DWJshP3k.js";import"./iframe-BtnWFUv2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CkQEWMjW.js";import"./index-BRdM8djr.js";import"./index-DhnlmDEy.js";import"./tokens.style-094o6wS0.js";import"./triangle-exclamation.component-CTOI4I8Z.js";import"./icon.component-BB7acgzI.js";import"./alert.component-DkvcVHLj.js";import"./runtime-nRyYmvPb.js";import"./class-map-BVrMFPcn.js";import"./unwrap-slots-C3eO7CjN.js";import"./button.component-BgrncIZl.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-k8yuw6x0.js";import"./dropdown.component-nLvXER8H.js";import"./popover.component-Dx-IbAoP.js";import"./cross-small.component-DEgdYcLq.js";import"./chevron-bottom.component-CHHQJW1H.js";import"./checkmark.component-BNYKHExq.js";import"./circle-check.component-CBCV1rkr.js";import"./chevron-right.component-Cm_IJbVk.js";import"./datepicker.component-CqnKlyKg.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-bqh-W1ws.js";import"./index-CiB1czFq.js";import"./dot-grid-one-horizontal.component-DrYLNkHx.js";import"./context-menu.component-DR__aZra.js";import"./filter-chips.component-Bhu4KTxY.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-BX8Vt47E.js";import"./segmented-control.component-DJgB9dh3.js";import"./index-U-TK1lHh.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
`,r.jsx(s,{children:r.jsx(m,{margin:"xl 0",children:r.jsxs(n,{variant:"notice",children:[r.jsx(e.strong,{children:"Note:"})," This version of Breadcrumbs is deprecated! Please use the ",r.jsx(e.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/components-breadcrumbs--docs",rel:"nofollow",children:"web component from Green Core"})," instead."]})})}),`
`,r.jsx(e.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,r.jsx(e.p,{children:"Displays the path to the current resource using a hierarchy of links."}),`
`,r.jsx(d,{of:u}),`
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
`})})]})}function tr(o={}){const{wrapper:e}={...c(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(a,{...o})}):a(o)}function i(o,e){throw new Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{or as Template,tr as default};
