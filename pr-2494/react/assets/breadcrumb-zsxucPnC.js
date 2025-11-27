import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-KKbtLrXP.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-RbkRhMyp.js";import{B as h,a as t}from"./breadcrumb-D4CLsLVk.js";import{B as l,D as u}from"./breadcrumb.stories-pRLW_HAn.js";import{C as x,G as n,a as m,b as s}from"./index-B3d-KF_k.js";import"./iframe-DUoXDKnH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CILbAdL-.js";import"./index-BWB4vfN4.js";import"./index-CJXXXYzL.js";import"./tokens.style-BK-37E5b.js";import"./triangle-exclamation.component-CgBFnMM6.js";import"./icon-CZBeqfGn.js";import"./alert.component-CiaziVrL.js";import"./runtime-nRyYmvPb.js";import"./class-map-BH2fBubr.js";import"./unwrap-slots-BKVKDCkg.js";import"./button.component-B-pY68o5.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DXqxng07.js";import"./dropdown.component-DZ-B1EfE.js";import"./popover.component-D6yWsOOx.js";import"./cross-small.component-DJYBAIWi.js";import"./chevron-bottom.component-BsdeJzmM.js";import"./checkmark.component-BL0akEr0.js";import"./circle-check.component-Cs_XxfM2.js";import"./chevron-right.component-DWbe4TrH.js";import"./datepicker.component-EBhrGXOE.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CWfwtZFm.js";import"./index-E5YwODaY.js";import"./dot-grid-one-horizontal.component-D3SHW0C9.js";import"./context-menu.component-D_TPzT-B.js";import"./filter-chips.component-D7t_0RKQ.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-BF8gM7j1.js";import"./segmented-control.component-CcRztEoB.js";import"./index-CjOttKE8.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
