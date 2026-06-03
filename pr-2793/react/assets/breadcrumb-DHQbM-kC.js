import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-BOzlK9QA.js";import{M as d,S as p}from"./blocks-CbhW7EdJ.js";import{B as h,a as t}from"./breadcrumb-CMdYpL7f.js";import{B as l,D as u}from"./breadcrumb.stories-BGRuAO4Y.js";import{C as x,G as s,a as i,b as m}from"./index-DdcIrhyj.js";import"./iframe-CNIez2W3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-COWlG8sF.js";import"./index-DoslGFVT.js";import"./alert.component-DkT_GtFQ.js";import"./tokens.style-_hO-0dwC.js";import"./runtime-nRyYmvPb.js";import"./class-map-CwifVN3K.js";import"./icon.component-DRsYOWP-.js";import"./ref-DNzm-Jm4.js";import"./button.component-CvbJ40Ct.js";import"./watch-2OEWzoh-.js";import"./when-BR7zwNJC.js";import"./transitional-styles-3Eh7o0Tz.js";import"./card.component-B5w3Chfr.js";import"./circle-check.component-DEQj6W8r.js";import"./chevron-bottom.component-BpZ0y1cQ.js";import"./cross-small.component-Dq7PW3Ux.js";import"./triangle-exclamation.component-DJUBGiq4.js";import"./index-B6MJc_Yx.js";import"./index-8EOj56cC.js";import"./calender-add.component-Bd2LP02_.js";import"./chevron-right.component-C3Rv2Sse.js";import"./dot-grid-one-horizontal.component-x0zv8Ta6.js";import"./index-Deom8fVE.js";import"./checkmark.component-BgVqUW7o.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
`,r.jsx(m,{children:r.jsx(i,{margin:"xl 0",children:r.jsxs(s,{variant:"notice",children:[r.jsx(e.strong,{children:"Note:"})," This version of Breadcrumbs is deprecated! Please use the ",r.jsx(e.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/components-breadcrumbs--docs",rel:"nofollow",children:"web component from Green Core"})," instead."]})})}),`
`,r.jsx(e.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,r.jsx(e.p,{children:"Displays the path to the current resource using a hierarchy of links."}),`
`,r.jsx(p,{of:u}),`
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
`})})]})}function V(o={}){const{wrapper:e}={...c(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(a,{...o})}):a(o)}function n(o,e){throw new Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Q as Template,V as default};
