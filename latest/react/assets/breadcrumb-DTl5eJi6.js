import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-DanFZc9b.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-C8hlVZeR.js";import{B as h,a as t}from"./breadcrumb-DjAyWmXz.js";import{B as l,D as u}from"./breadcrumb.stories-BGJAUm9b.js";import{C as x,G as n,a as m,b as s}from"./index-Ba1j4siZ.js";import"./iframe-BTg6W11c.js";import"./preload-helper-Dp1pzeXC.js";import"./index-yN0Yg-BO.js";import"./index-C6MtbJ5h.js";import"./index-BExXmQ5h.js";import"./tokens.style-DW1iXue_.js";import"./triangle-exclamation.component-Berr1JUd.js";import"./icon.component-CZFiWEgy.js";import"./alert.component-CQzpRMfG.js";import"./runtime-nRyYmvPb.js";import"./class-map-Dvfztsir.js";import"./unwrap-slots-DXVoDsZD.js";import"./button.component-4W_YbLc5.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BRgOAAGu.js";import"./dropdown.component-CrgRDVwc.js";import"./popover.component-BMMG2zBy.js";import"./cross-small.component-C-G5eA1q.js";import"./chevron-bottom.component-C48E2jvX.js";import"./checkmark.component-BBwqnDDY.js";import"./circle-check.component-BZpNHDaA.js";import"./chevron-right.component-CISk6bUN.js";import"./datepicker.component-CndJC2Iv.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-DPZI9pgF.js";import"./index-Y6vC-i84.js";import"./dot-grid-one-horizontal.component-B-rM9m9z.js";import"./context-menu.component-DjUSuli7.js";import"./filter-chips.component-Cg5e9-SC.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-BCH11RIz.js";import"./segmented-control.component-DkJOd5rn.js";import"./index-29a7qHyB.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
