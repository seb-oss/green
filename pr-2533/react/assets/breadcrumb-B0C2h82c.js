import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-1EMxbEAs.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-CP6fS6iH.js";import{B as h,a as t}from"./breadcrumb-zQsLhj_b.js";import{B as l,D as u}from"./breadcrumb.stories-BHpEYaAi.js";import{C as x,G as n,a as m,b as s}from"./index-DC3ayLn3.js";import"./iframe-DCAnp-F1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D7f6o6RO.js";import"./index-BZRGR-kp.js";import"./index-4wM5AXv7.js";import"./tokens.style-2eIxml9r.js";import"./triangle-exclamation.component-iRGSKvNF.js";import"./icon.component-BoUMn6u9.js";import"./alert.component-DQ4wu6xR.js";import"./runtime-nRyYmvPb.js";import"./class-map-YJMI3JxZ.js";import"./unwrap-slots-BUUaliHi.js";import"./button.component-CLqrE5F9.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CnJbDinn.js";import"./dropdown.component-rwOTJLCy.js";import"./popover.component-H84QEhLU.js";import"./cross-small.component-CXnJsXvG.js";import"./chevron-bottom.component-DeWOdhLO.js";import"./checkmark.component-9S5ot2vb.js";import"./circle-check.component-Dyw-3jBJ.js";import"./chevron-right.component-w0r4yQSz.js";import"./datepicker.component-B1old_dN.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CIzbRk06.js";import"./index-CU_S3bnB.js";import"./dot-grid-one-horizontal.component-CX66_9Vf.js";import"./context-menu.component-B0CFL33z.js";import"./filter-chips.component-r7KBVmCx.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-DbHQmLty.js";import"./segmented-control.component-zsWyB9Dv.js";import"./index-sUa5yb-G.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
