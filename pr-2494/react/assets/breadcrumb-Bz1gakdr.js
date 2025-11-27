import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-3uTtG0j_.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-oUBkM_32.js";import{B as h,a as t}from"./breadcrumb-BRXBLD_C.js";import{B as l,D as u}from"./breadcrumb.stories-CmmrMzBb.js";import{C as x,G as n,a as m,b as s}from"./index-BS0NeQpv.js";import"./iframe-BO7oVpkk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BsUFmQgE.js";import"./index-DZH1g9G5.js";import"./index-BHwXFS-r.js";import"./tokens.style-CfrRsT7t.js";import"./triangle-exclamation.component-Dccj10ij.js";import"./icon-Bafp6z4o.js";import"./alert.component-BcqjBIzq.js";import"./runtime-nRyYmvPb.js";import"./class-map-BLZM_j9N.js";import"./unwrap-slots-BvTJ9hdF.js";import"./button.component-iVkgwJJ1.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-Bsob4SCc.js";import"./dropdown.component-CZQYF3Yy.js";import"./popover.component-f0wSg8V_.js";import"./cross-small.component-BKGiVm4j.js";import"./chevron-bottom.component-BDd6gl_J.js";import"./checkmark.component-DAlMu5Rq.js";import"./circle-check.component-Gk3XK1WE.js";import"./chevron-right.component-D4Drz-Md.js";import"./datepicker.component-DRE-rAvf.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-HlU4FmR8.js";import"./index-B7zQcP4D.js";import"./dot-grid-one-horizontal.component-CUcVgC6W.js";import"./context-menu.component-Zd310RdI.js";import"./filter-chips.component-C7oxdIOi.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-iVpfiy7g.js";import"./segmented-control.component-Cuu0ScEY.js";import"./index-CL9EzG_b.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
