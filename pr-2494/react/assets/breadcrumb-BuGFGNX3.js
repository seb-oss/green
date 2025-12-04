import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-fbaLh2VC.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-Bq6-owqb.js";import{B as h,a as t}from"./breadcrumb-D1Kq9-bE.js";import{B as l,D as u}from"./breadcrumb.stories-CpB4T3df.js";import{C as x,G as n,a as m,b as s}from"./index-B6tGHMLA.js";import"./iframe-QAiYAu7-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BcU5wZFA.js";import"./index-BN-PUsDz.js";import"./index-lWHY7NR2.js";import"./tokens.style-Ncxh0kol.js";import"./triangle-exclamation.component-LRf1j3tK.js";import"./icon-CrVP6dfj.js";import"./alert.component-DAXLlyLO.js";import"./runtime-nRyYmvPb.js";import"./class-map-C_oZ4Z3U.js";import"./unwrap-slots-CsqzZwf7.js";import"./button.component-DFWW2dHH.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BZFv1c0z.js";import"./dropdown.component-2z5VwQYz.js";import"./popover.component-Bjc4TXUa.js";import"./cross-small.component-vEIn4DuM.js";import"./chevron-bottom.component-Bi0z_1ez.js";import"./checkmark.component-Br76-Pig.js";import"./circle-check.component-CUB07vOr.js";import"./chevron-right.component-BzPiOtF_.js";import"./datepicker.component-pn5HmQY7.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-ln9Vnpnt.js";import"./index-CDmVktbx.js";import"./dot-grid-one-horizontal.component-DCE5ltWn.js";import"./context-menu.component-B7xCrnjM.js";import"./filter-chips.component-wyzOJi2f.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-Dhjo986p.js";import"./segmented-control.component-CSL2WgaW.js";import"./index-C5_UGhGE.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
