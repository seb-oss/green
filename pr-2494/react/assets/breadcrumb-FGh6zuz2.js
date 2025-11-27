import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-Bg_KsDDZ.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-C_GzWYMW.js";import{B as h,a as t}from"./breadcrumb-BbtE84X-.js";import{B as l,D as u}from"./breadcrumb.stories-CWkbeksT.js";import{C as x,G as n,a as m,b as s}from"./index-QqFUxTbl.js";import"./iframe-BY-mButZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D3ahQoZ-.js";import"./index-BGFxfACe.js";import"./index-DPLE1Wxe.js";import"./tokens.style-C1y74JQn.js";import"./triangle-exclamation.component-ptNxJMGz.js";import"./icon-DpQ55yBS.js";import"./alert.component-CgzgOFxJ.js";import"./runtime-nRyYmvPb.js";import"./class-map-poZ8Wzqv.js";import"./unwrap-slots-DHaOvqZV.js";import"./button.component-DQvtbIHn.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BRv-nAj3.js";import"./dropdown.component-xPBl7Jz6.js";import"./popover.component-g4ni09jE.js";import"./cross-small.component-Bkqtug-I.js";import"./chevron-bottom.component-BZJ_2oQV.js";import"./checkmark.component-CfF9tLFH.js";import"./circle-check.component--OV_n7g0.js";import"./chevron-right.component-BM8CcWlC.js";import"./datepicker.component-Dvpg4UhU.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-72wbtdZ_.js";import"./index-DRh_JlKs.js";import"./dot-grid-one-horizontal.component-CN6RNYtU.js";import"./context-menu.component-DQ4BsZUA.js";import"./filter-chips.component-BoJqZ2Fy.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-BOmr1Auw.js";import"./segmented-control.component-DnCLcDd5.js";import"./index-a5QhLgz4.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
