import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-DY1c__cZ.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-FwVjCuyv.js";import{B as h,a as t}from"./breadcrumb-DF0z2xsu.js";import{B as l,D as u}from"./breadcrumb.stories-BX-JAKoL.js";import{C as x,G as n,a as m,b as s}from"./index-Cj_BOiQp.js";import"./iframe-DRfv7tBL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CPBSqMeh.js";import"./index-BVmD17u4.js";import"./index-C58J1pjK.js";import"./tokens.style-Duv8W5ar.js";import"./triangle-exclamation.component-5Er0r1zh.js";import"./icon.component-DIXl82BG.js";import"./alert.component-C-8ikzSI.js";import"./runtime-nRyYmvPb.js";import"./class-map-iOrWRdYR.js";import"./unwrap-slots-B_h1s96z.js";import"./button.component-_arV9YcT.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-D2fBFE-j.js";import"./dropdown.component-5hVYdNmL.js";import"./popover.component-DFeQXUrl.js";import"./cross-small.component-2Xnq2vi-.js";import"./chevron-bottom.component-BJPlkW9o.js";import"./checkmark.component-C9n2i8Mj.js";import"./circle-check.component-CnGxPTa0.js";import"./chevron-right.component-B3y-rC45.js";import"./datepicker.component-BhVHPFUo.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-C16pe2EV.js";import"./index-kqOjjDU6.js";import"./dot-grid-one-horizontal.component-DXkkdyIG.js";import"./context-menu.component-Bhr0OTmF.js";import"./filter-chips.component-zN-kiGSb.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-BQtlxglF.js";import"./segmented-control.component-CmpnZu9q.js";import"./index-D-DPIV6w.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
