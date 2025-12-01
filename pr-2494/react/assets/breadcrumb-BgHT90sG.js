import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-BwKcGpbV.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-DwhutTAy.js";import{B as h,a as t}from"./breadcrumb-DWkF76cm.js";import{B as l,D as u}from"./breadcrumb.stories-5sdQRmYz.js";import{C as x,G as n,a as m,b as s}from"./index-xtG0sMt6.js";import"./iframe-Dn_htULk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-tSageb4e.js";import"./index-Dnl_1eEf.js";import"./index-jXCqxWEJ.js";import"./tokens.style-0Zu8bpSk.js";import"./triangle-exclamation.component-BbU1k-wY.js";import"./icon-kZL5gSOa.js";import"./alert.component-hrDQ79CR.js";import"./runtime-nRyYmvPb.js";import"./class-map-CoHbcHyZ.js";import"./unwrap-slots-DjYGAbGz.js";import"./button.component-OG8PkpWh.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CsGCktAT.js";import"./dropdown.component-gVoW_U5-.js";import"./popover.component-BCAP6uZ9.js";import"./cross-small.component-DC23WTg6.js";import"./chevron-bottom.component-D-9aWC2U.js";import"./checkmark.component-GQDQMprw.js";import"./circle-check.component-CXCh5Xx9.js";import"./chevron-right.component-D3Qii65P.js";import"./datepicker.component-BH9KNIlu.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-q-b8wgho.js";import"./index-DPnjumtU.js";import"./dot-grid-one-horizontal.component-D9tWGVsx.js";import"./context-menu.component-Ce-JYO55.js";import"./filter-chips.component-C8yu4lhi.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-BJ7dEwEh.js";import"./segmented-control.component-6xRxN0aF.js";import"./index-B1ol2VoP.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
