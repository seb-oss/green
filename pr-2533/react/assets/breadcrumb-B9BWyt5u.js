import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-D-sQWh4q.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-4YPB4446.js";import{B as h,a as t}from"./breadcrumb-BSWATPWT.js";import{B as l,D as u}from"./breadcrumb.stories-Dsl4giPI.js";import{C as x,G as n,a as m,b as s}from"./index-BMNKH_rD.js";import"./iframe-B7xrO1Ll.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DtPyyxA_.js";import"./index-Do4YUONK.js";import"./index-DBvVqXqa.js";import"./tokens.style-pPkJvYRA.js";import"./triangle-exclamation.component-Ck_oBoSJ.js";import"./icon.component-CYfX3Z2j.js";import"./alert.component-BaJKFCTh.js";import"./runtime-nRyYmvPb.js";import"./class-map-DoXy6Hf8.js";import"./unwrap-slots-awcDZQi8.js";import"./button.component-7dlx_TlB.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-YGzytPX9.js";import"./dropdown.component-DVn2oT82.js";import"./popover.component-x-W7F-B2.js";import"./cross-small.component-k9_LgE75.js";import"./chevron-bottom.component-DU8uqYpm.js";import"./checkmark.component-D3G2fHRK.js";import"./circle-check.component-ConWgW0g.js";import"./chevron-right.component-DTN6m3Wt.js";import"./datepicker.component-DqNJ6lkB.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-C7BFHdUI.js";import"./index-CP_mQdja.js";import"./dot-grid-one-horizontal.component-BaoFAf3J.js";import"./context-menu.component-Ckj7q1dR.js";import"./filter-chips.component-BSuJlNOK.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-C_mdEOR_.js";import"./segmented-control.component-BELA_4nz.js";import"./index-OHq4JSCR.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
