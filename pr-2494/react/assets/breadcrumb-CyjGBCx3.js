import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-CcexD9P-.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-DxBvexgD.js";import{B as h,a as t}from"./breadcrumb-DZpqZ0Yc.js";import{B as l,D as u}from"./breadcrumb.stories-ly7QAn5V.js";import{C as x,G as n,a as m,b as s}from"./index-D5ljMXyo.js";import"./iframe-C5ZKfkpC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CezjZfBh.js";import"./index-BZOr5cl6.js";import"./index-DS8ZwVwz.js";import"./tokens.style-OonLujlS.js";import"./triangle-exclamation.component-BiA8JvuM.js";import"./icon-C4ttA4hQ.js";import"./alert.component-BdzQn8Yz.js";import"./runtime-nRyYmvPb.js";import"./class-map-CCyPSNlr.js";import"./unwrap-slots-CpnL5CJQ.js";import"./button.component-DoIm7p_t.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CTwlZL_5.js";import"./dropdown.component-B5UuP7ZB.js";import"./popover.component-CwxTK5DY.js";import"./cross-small.component-sJhnAmhQ.js";import"./chevron-bottom.component-B0BPSC6S.js";import"./checkmark.component-B8mYX54K.js";import"./circle-check.component-DUubOIMa.js";import"./chevron-right.component-CcwCrsZq.js";import"./datepicker.component-BA1mpkRx.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-DhcxFq2f.js";import"./index-CPjzDzX7.js";import"./dot-grid-one-horizontal.component-7onDdgkC.js";import"./context-menu.component-D9p1AANR.js";import"./filter-chips.component-BEqRR2qI.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-BYK7VT5S.js";import"./segmented-control.component-CHK_qvwO.js";import"./index-DNcaO8Nn.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
