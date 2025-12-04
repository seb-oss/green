import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-BV_uNTx3.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-BGP9mrFR.js";import{B as h,a as t}from"./breadcrumb-DAsNYYji.js";import{B as l,D as u}from"./breadcrumb.stories-Bbuh3fkv.js";import{C as x,G as n,a as m,b as s}from"./index-B7w3IOcb.js";import"./iframe-BgSGGahz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dz3_LlnN.js";import"./index-C0FeTshZ.js";import"./index-CBk2xfp5.js";import"./tokens.style-nVES_huQ.js";import"./triangle-exclamation.component-BaWdmoM4.js";import"./icon.component-lDNPNhLt.js";import"./alert.component-CibVyCKf.js";import"./runtime-nRyYmvPb.js";import"./class-map-B8mXImLD.js";import"./unwrap-slots-DtxTgRS4.js";import"./button.component-Cx7n5H5P.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-fgp8u5do.js";import"./dropdown.component-Bvh4qN4r.js";import"./popover.component-Cj9eipTX.js";import"./cross-small.component-dM2FZpGR.js";import"./chevron-bottom.component-C8-Wp15G.js";import"./checkmark.component-rxYS0sVz.js";import"./circle-check.component-CfTn2-GB.js";import"./chevron-right.component-D6Dj13Zb.js";import"./datepicker.component-DqApYulU.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-p5DJ9KZ6.js";import"./index-CLuRuh0M.js";import"./dot-grid-one-horizontal.component-Cw0TDApR.js";import"./context-menu.component-5JnbSEod.js";import"./filter-chips.component-D9QVyKIR.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-PzHQ-xCD.js";import"./segmented-control.component-CFF2z3q_.js";import"./index-Dr6uKo2y.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
