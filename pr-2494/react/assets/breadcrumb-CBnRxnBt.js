import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-B_21fPPp.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-DQsIbQlR.js";import{B as h,a as t}from"./breadcrumb-VFXQo1Da.js";import{B as l,D as u}from"./breadcrumb.stories-DdIc7Nmt.js";import{C as x,G as n,a as m,b as s}from"./index-DZaFxwV-.js";import"./iframe-BDifA8yT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CqXDwye2.js";import"./index-B5tSmkZ6.js";import"./index-Dhn4dE3j.js";import"./tokens.style-Dg3DjNA6.js";import"./triangle-exclamation.component-BKCz0EJ4.js";import"./icon.component-DgQbdcMX.js";import"./alert.component-CGSeDA1c.js";import"./runtime-nRyYmvPb.js";import"./class-map--_fRTFHt.js";import"./unwrap-slots-B5ATO2SA.js";import"./button.component-Hl7dLSp2.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CLwggSoW.js";import"./dropdown.component-CoGrTlkf.js";import"./popover.component-CxQr7Tce.js";import"./cross-small.component-BAfW7RQt.js";import"./chevron-bottom.component-Pg3XnUuL.js";import"./checkmark.component-DFEKLRNm.js";import"./circle-check.component-DbvQh5-v.js";import"./chevron-right.component-CMNCTtuG.js";import"./datepicker.component-B7RAlcuO.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-iesJWQdd.js";import"./index-BMqpUNq6.js";import"./dot-grid-one-horizontal.component-5EcR7PRP.js";import"./context-menu.component-s_MxtW66.js";import"./filter-chips.component-DKN5TJYv.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-HGv1FCoy.js";import"./segmented-control.component-D28UCBGf.js";import"./index-DxRyU4LM.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
