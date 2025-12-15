import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-C8qeaaaw.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-BXkgZX6b.js";import{B as h,a as t}from"./breadcrumb--e5kDJc-.js";import{B as l,D as u}from"./breadcrumb.stories-V9XjbAWD.js";import{C as x,G as n,a as m,b as s}from"./index-Df9KoWQM.js";import"./iframe-h83jaT2I.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D-79kXk_.js";import"./index-BLhMJAQ3.js";import"./index-B-87TB4V.js";import"./tokens.style-B1gy1bKV.js";import"./triangle-exclamation.component-xZ-jUQPU.js";import"./icon.component-DZZ93NwP.js";import"./alert.component-EL0HfEsn.js";import"./runtime-nRyYmvPb.js";import"./class-map-ise5yENP.js";import"./unwrap-slots-YkCIoOPR.js";import"./button.component-9_NURiQh.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-ClHB5LMu.js";import"./dropdown.component-Canxkd7K.js";import"./popover.component-CQ-JvIWo.js";import"./cross-small.component-C3vm4cqJ.js";import"./chevron-bottom.component-B3qULICJ.js";import"./checkmark.component-D58LQLAF.js";import"./circle-check.component-DprXDimY.js";import"./chevron-right.component-Do55bV7w.js";import"./datepicker.component-C4KPwczH.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-C-SkHPQI.js";import"./index-DHgWGGmf.js";import"./dot-grid-one-horizontal.component-Cspq-rrD.js";import"./context-menu.component-Bvz5eHxn.js";import"./filter-chips.component-BVaG0J76.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-CKLEKn6r.js";import"./segmented-control.component-DXOu7Af9.js";import"./index-DjrlE4MG.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
