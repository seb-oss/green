import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-Bdzlt0s8.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-D9E5TnR6.js";import{B as h,a as t}from"./breadcrumb-CC60W4Ns.js";import{B as l,D as u}from"./breadcrumb.stories-Dkk9ZZEl.js";import{C as x,G as n,a as m,b as s}from"./index-Dr6H6OaH.js";import"./iframe-Ah7auDdV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DKc1XmiQ.js";import"./index-sE5pR4fC.js";import"./index-BZ-AHH6r.js";import"./tokens.style-FFf27jrW.js";import"./triangle-exclamation.component-aCzxs5gY.js";import"./icon-CbGhjhf2.js";import"./alert.component-DGkDJxI6.js";import"./runtime-nRyYmvPb.js";import"./class-map-D2hBlew7.js";import"./unwrap-slots-B1dHw7Jh.js";import"./button.component-SinnzWOh.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-B3uNpkFI.js";import"./dropdown.component-MBHJAU6m.js";import"./popover.component-Bf2WnF-j.js";import"./cross-small.component-BXlE52nV.js";import"./chevron-bottom.component-CNi-RhsP.js";import"./checkmark.component-CftI1FPR.js";import"./circle-check.component-DZu32AB6.js";import"./chevron-right.component-DTxrWfTZ.js";import"./datepicker.component-BrzRO8Zy.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-5zt3v-Oz.js";import"./index-DmgREXD1.js";import"./dot-grid-one-horizontal.component-CyswhgZO.js";import"./context-menu.component-H37ySexx.js";import"./filter-chips.component-C85AQNuU.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-3tDiSiIN.js";import"./segmented-control.component-Dn3dMlUE.js";import"./index-CjvmfeEp.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
