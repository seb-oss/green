import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-DY1Cj_Ba.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-WTIyyQ8Z.js";import{B as h,a as t}from"./breadcrumb-D0qc18Wp.js";import{B as l,D as u}from"./breadcrumb.stories-Cbhca7rQ.js";import{C as x,G as n,a as m,b as s}from"./index-DxLKktpl.js";import"./iframe-CYX-IQPK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BSgXpWbn.js";import"./index-BeVOvKES.js";import"./index-BsM4ljiH.js";import"./tokens.style-C0TwVRwC.js";import"./triangle-exclamation.component-DvI8Ho5N.js";import"./icon.component-DONYl7IC.js";import"./alert.component-DaNfLGKM.js";import"./runtime-nRyYmvPb.js";import"./class-map-DFmkPZV2.js";import"./unwrap-slots-Cipu_VbJ.js";import"./button.component-DB_ClelE.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-D7dFj7jr.js";import"./dropdown.component-_QHlcxY1.js";import"./popover.component-TjlsCr7N.js";import"./cross-small.component-B5mnLIYE.js";import"./chevron-bottom.component-DpHHv8PG.js";import"./checkmark.component-cKyCXNKO.js";import"./circle-check.component-C55Mw7nl.js";import"./chevron-right.component-BCXfHujz.js";import"./datepicker.component-CHmqBa0o.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CKpQCIWo.js";import"./index-BIZbmWG4.js";import"./dot-grid-one-horizontal.component-C3edV4HA.js";import"./context-menu.component-BeSMkFBa.js";import"./filter-chips.component-BfoGan6p.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-DWpuXn_0.js";import"./segmented-control.component-hzANxtv0.js";import"./index-DxvmFzgo.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
