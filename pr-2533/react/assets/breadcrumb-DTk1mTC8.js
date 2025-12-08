import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-CQuQ9vH2.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-CV4-pSgg.js";import{B as h,a as t}from"./breadcrumb-jW4RkJQH.js";import{B as l,D as u}from"./breadcrumb.stories-BZoBYOM1.js";import{C as x,G as n,a as m,b as s}from"./index-BHXlGALW.js";import"./iframe-BtUtMXgA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CLOiLsl1.js";import"./index-Bpg7LR5K.js";import"./index-Tz0sXy-0.js";import"./tokens.style-B8ZLGgjm.js";import"./triangle-exclamation.component-DWyjtohi.js";import"./icon.component-BlE6Vt-s.js";import"./alert.component-FqSvjzhY.js";import"./runtime-nRyYmvPb.js";import"./class-map-Cr62hOES.js";import"./unwrap-slots-D5CuLpNL.js";import"./button.component-Cd7bzoRh.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-D25H4bzH.js";import"./dropdown.component-yOMSlejk.js";import"./popover.component-DetqDriL.js";import"./cross-small.component-9Boz3g85.js";import"./chevron-bottom.component-BdjSVc35.js";import"./checkmark.component-CwTs9u5C.js";import"./circle-check.component-jRlROt-3.js";import"./chevron-right.component-3jYBihdg.js";import"./datepicker.component-CGorcvkR.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CLYXTSRh.js";import"./index-CvuIXbI8.js";import"./dot-grid-one-horizontal.component-B9E1QEHF.js";import"./context-menu.component-DsHl7UKt.js";import"./filter-chips.component-CZnT70M3.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-DME8g9A6.js";import"./segmented-control.component-BUDvcUJw.js";import"./index-CF7hHgvi.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
