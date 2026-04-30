import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-7vMffAdd.js";import{M as d,S as p}from"./blocks-DctbIkk1.js";import{B as h,a as t}from"./breadcrumb-CKhyaMkp.js";import{B as l,D as u}from"./breadcrumb.stories-CgjgsU0v.js";import{C as x,G as s,a as i,b as m}from"./index-BxBqsVDL.js";import"./iframe-BTKxALnd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CzRpvsS3.js";import"./index-Czata2SW.js";import"./alert.component-DM78Ts4V.js";import"./tokens.style-Bhwj2cQj.js";import"./runtime-nRyYmvPb.js";import"./class-map-B8Zb_Iyr.js";import"./icon.component-t7MaohKM.js";import"./ref-6aqyqkTP.js";import"./button.component-BAiwaR0Z.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BkY5OCNE.js";import"./card.component-BwWoJQ8m.js";import"./circle-check.component-BkRroM9h.js";import"./chevron-bottom.component-CUK49LI5.js";import"./cross-small.component-na_fZ8VL.js";import"./triangle-exclamation.component-HRPaYJQg.js";import"./index-CoZ0EScf.js";import"./index-BD9jkoRe.js";import"./calender-add.component-Bev-eKi4.js";import"./chevron-right.component-D2pY0KOX.js";import"./dot-grid-one-horizontal.component-BfPOubm2.js";import"./index-D5_mqd5d.js";import"./checkmark.component-BNRxkQ2z.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
