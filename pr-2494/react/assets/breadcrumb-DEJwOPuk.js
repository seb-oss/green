import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-BcWSDjD9.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-C2gwnHNw.js";import{B as h,a as t}from"./breadcrumb-Dm8bHIlX.js";import{B as l,D as u}from"./breadcrumb.stories-CqGMRhwA.js";import{C as x,G as n,a as m,b as s}from"./index-D3yUuyKC.js";import"./iframe-DLviRDmB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-fchADxIv.js";import"./index-DQzKB1vJ.js";import"./index-DZISCQbu.js";import"./tokens.style-eh0fOWGS.js";import"./triangle-exclamation.component-r_qUHe0g.js";import"./icon-Dghe-sAX.js";import"./alert.component-C69l0uz7.js";import"./runtime-nRyYmvPb.js";import"./class-map-DnJuhoFG.js";import"./unwrap-slots-B55ibK7r.js";import"./button.component-DYbBIhPW.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CrtHx0eJ.js";import"./dropdown.component-DTn28Lrw.js";import"./popover.component-YImAX3Wz.js";import"./cross-small.component-BLLIJ9Gj.js";import"./chevron-bottom.component-gsVsx_CN.js";import"./checkmark.component-BP8Ny7G1.js";import"./circle-check.component-BlFUbedC.js";import"./chevron-right.component-CYGhZ5hy.js";import"./datepicker.component-NMXjIxBB.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-DiM-_-6G.js";import"./index-BVbMUtlz.js";import"./dot-grid-one-horizontal.component-CG3BcLcD.js";import"./context-menu.component-DRvnNhp2.js";import"./filter-chips.component-D46emnm3.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-Cn-7LOZk.js";import"./segmented-control.component-8ZOGZ38T.js";import"./index-CwsPAabN.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
