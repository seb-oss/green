import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-BD7-QAXy.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-B1RH2AZr.js";import{B as h,a as t}from"./breadcrumb-CU0JqtDu.js";import{B as l,D as u}from"./breadcrumb.stories-Bp_GXm_P.js";import{C as x,G as n,a as m,b as s}from"./index-20CyD0LI.js";import"./iframe-BZAwPpwv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DBNBqnqe.js";import"./index-CWbhJcCF.js";import"./index-BtSLIVHr.js";import"./tokens.style-BMqmbS7l.js";import"./triangle-exclamation.component-CKAaI3xz.js";import"./icon-UU9fev_S.js";import"./alert.component-CYYtg8dm.js";import"./runtime-nRyYmvPb.js";import"./class-map-B4EX7G_s.js";import"./unwrap-slots-CpNo-Doe.js";import"./button.component-dKfEU_As.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BmkO-u4p.js";import"./dropdown.component-CN7fZKx-.js";import"./popover.component-DxvrHA34.js";import"./cross-small.component-Dtsmat7Q.js";import"./chevron-bottom.component-nVf3dBmH.js";import"./checkmark.component-CkxSOnLc.js";import"./circle-check.component-Dh9YgBuA.js";import"./chevron-right.component-D-zKM6XL.js";import"./datepicker.component-B_6kbwoV.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-B3XH3wgs.js";import"./index-DDMCW5tS.js";import"./dot-grid-one-horizontal.component-3EJ5SjAM.js";import"./context-menu.component-qS92DzOs.js";import"./filter-chips.component-CHkAbfxF.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-Bmhu9zN9.js";import"./segmented-control.component-BRytFbls.js";import"./index-CCYv2O_Q.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
