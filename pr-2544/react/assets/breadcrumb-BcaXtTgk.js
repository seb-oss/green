import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-Dq5X6a7V.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-19rGsFDp.js";import{B as h,a as t}from"./breadcrumb-Bu8UYCgC.js";import{B as l,D as u}from"./breadcrumb.stories-DoUJ4U50.js";import{C as x,G as n,a as m,b as s}from"./index-DSv21nj1.js";import"./iframe-DKnk_O5c.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B3aHzKbh.js";import"./index-CgWyV3P8.js";import"./alert.component-BDxhRv3_.js";import"./tokens.style-LWos6X7z.js";import"./runtime-nRyYmvPb.js";import"./class-map-CUPXc7ju.js";import"./icon.component-BuEfjfw3.js";import"./unwrap-slots-B0QqiaYe.js";import"./button.component-Buk_-E7A.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-HUI8cENb.js";import"./dropdown.component-DPRJuyfa.js";import"./popover.component-DTQPN4yP.js";import"./cross-small.component-iv37CPuS.js";import"./triangle-exclamation.component-B6kM3wEU.js";import"./chevron-bottom.component-BpENbKEX.js";import"./checkmark.component-BfiRtcEo.js";import"./circle-check.component-D_0qcV1b.js";import"./index-CP0zXzsH.js";import"./chevron-right.component-ZW9Vuszc.js";import"./datepicker.component-BoSOJnFJ.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CThPLYXC.js";import"./index-DZpnE0nn.js";import"./dot-grid-one-horizontal.component-6nnBhpEf.js";import"./context-menu.component-DHw1B5dy.js";import"./filter-chips.component-Cgkx2HvR.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-DINsg_-S.js";import"./segmented-control.component-cQm9ncqG.js";import"./index-BE91ZUCa.js";import"./triangle-exclamation-Bo_z4ltf.js";const tr=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
`})})]})}function ir(o={}){const{wrapper:e}={...c(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(a,{...o})}):a(o)}function i(o,e){throw new Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{tr as Template,ir as default};
