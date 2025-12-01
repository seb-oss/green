import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-BLx-cpbW.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-DVERbW6V.js";import{B as h,a as t}from"./breadcrumb-BARgDWnD.js";import{B as l,D as u}from"./breadcrumb.stories-BATdc4yI.js";import{C as x,G as n,a as m,b as s}from"./index-D6OvG8Ts.js";import"./iframe-d6pE-P_0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DWxPNXHP.js";import"./index-CP-WYI0K.js";import"./index-B0gtSGlk.js";import"./tokens.style-Dpl9siNR.js";import"./triangle-exclamation.component-z-FQ0fVW.js";import"./icon-DGkUv3oA.js";import"./alert.component-C2IPUfUw.js";import"./runtime-nRyYmvPb.js";import"./class-map-CFGbdK_r.js";import"./unwrap-slots-B5V4aZln.js";import"./button.component-BeTG1VvC.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DaNvNrAN.js";import"./dropdown.component-rK5WC7W3.js";import"./popover.component-5vZUWi-_.js";import"./cross-small.component-DZmOw2GF.js";import"./chevron-bottom.component-oE9_hjsJ.js";import"./checkmark.component-CXZwXKHT.js";import"./circle-check.component-D0nFDywS.js";import"./chevron-right.component-CwmTs22m.js";import"./datepicker.component-WkrKBhB5.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-9-9lA1cA.js";import"./index-_xBhwr2R.js";import"./dot-grid-one-horizontal.component-B7sCZEP-.js";import"./context-menu.component-BsJpagpt.js";import"./filter-chips.component-B01JxGJq.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-Ch6kQnLm.js";import"./segmented-control.component-BjcUj2FO.js";import"./index-DVoFnkUA.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
