import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-CXY3cktO.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-BMiq8-o5.js";import{B as h,a as t}from"./breadcrumb-BC9SrENq.js";import{B as l,D as u}from"./breadcrumb.stories-BNoW1_RA.js";import{C as x,G as n,a as m,b as s}from"./index-BjFGxdQ9.js";import"./iframe-DKK1fhlK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BkJRXDiP.js";import"./index-CEPhBRw0.js";import"./index-DbeADu2t.js";import"./tokens.style-DwNx1wVp.js";import"./triangle-exclamation.component-ComBQFZ3.js";import"./icon.component-C9veAUIp.js";import"./alert.component-CQWL1nlL.js";import"./runtime-nRyYmvPb.js";import"./class-map-BbkpcqX0.js";import"./unwrap-slots-C5raZurB.js";import"./button.component-DFUKcNmC.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-3csLTW7b.js";import"./dropdown.component-BaNU6jgN.js";import"./popover.component-DSRZdcr4.js";import"./cross-small.component-BfyU2Gpn.js";import"./chevron-bottom.component-tljTwg9p.js";import"./checkmark.component-D7SQ1zwX.js";import"./circle-check.component-oeI2OzX_.js";import"./chevron-right.component-BZfEQHql.js";import"./datepicker.component-DbSqFUqX.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-DsKGGvu2.js";import"./index-iN7ctYKg.js";import"./dot-grid-one-horizontal.component-D9fP2nPV.js";import"./context-menu.component-Cyg54yDQ.js";import"./filter-chips.component-Deu9xqLM.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-BvlbLW0D.js";import"./segmented-control.component-QsXYt9Jb.js";import"./index-DCsMaUel.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
